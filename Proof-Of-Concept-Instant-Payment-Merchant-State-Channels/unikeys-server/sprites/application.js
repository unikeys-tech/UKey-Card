/**
 * Copyright by xxxx xxxx
 */
const { Channel, ChannelState, SignedState}= require('./index')
const assert = require('assert')
const BigNumber = require('bignumber.js')
const utils = require('./utils')
const generate_preimage = require('../sprites/generate_preimage')
const request = require('request')

class Application {

    // owner should be object with address
    // { address: '0xXXXXX.....'}
    constructor(owner, registry = null, pm = null, pubnub = null ) {
        this.owner = owner
        this.pm = pm
        this.registry = registry
        this.channels = {}
        this.channelStates = {}
        this.preimage = ""
        this.pubnub = pubnub
        // setup pubnub
        let that = this
        this.pubnub.addListener({
            status: function(statusEvent) {
            },
            message: async function(m) {

                let message = m.message
                if (message.type == 'receipt-preimage') {
                    // complete payment
                    that.log('Receive preimage')
                    if (utils.web3.utils.sha3(message.preimage) == that.channelStates[message.channelID].payment.preimage_hash) {
                        that.log('Preimage Hash OK.  Send Unconditional Payment')
                        that.preimage = message.preimage
                        that.make_uncoditional_payment(message.channelID)
                    }
                }
                else if (message.type == 'unconditional-payment') {
                    that.log('Receive unconditional payment')
                    let signedState = SignedState.deserialze(message.signedState)
                    if (that.preimage == message.preimage) {
                        that.log('Preimage OK.  Complete payment and update blockchain.')
                        let channelID = signedState.channelID
                        await that.channels[channelID].update(that.owner, signedState)
                        that.channelStates[channelID] = await that.channels[channelID].get_state(that.owner)
                    }
                    else {
                        that.log('Error: Uncondtional payment preimage not matches.')
                    }
                }
            },
            presence: function(presenceEvent) {
                // handle presence
            }
        })

        this.pubnub.subscribe( {
            channels: [ 'sprites+' + this.owner.address + '2']
        })
    }

    // probably this should be on called within client becuase
    // there will be fee for deposit.
    deposit(who, amount, channelID) {
        return new Promise( async (resolve, reject) => {
            try {
                assert(this.channels[channelID])
                await this.channels[channelID].deposit(who, amount)
                let d = utils.web3.utils.fromWei(BigNumber(amount).toString(), 'ether')
                this.log(`${who.address} has deposited ${d} ETH.` )
                resolve(true)
            }
            catch (e) {
                this.log('ERROR: Unable to make deposit.')
                resolve(false)
            }
        })
    }

    depositTo(who, amount, channelID) {
        return new Promise( async (resolve, reject) => {
            try {
                assert(this.channels[channelID])
                await this.channels[channelID].depositTo(this.owner, who.address, amount)
                let d = utils.web3.utils.fromWei(BigNumber(amount).toString(), 'ether')
                this.log(`${who.address} has deposited ${d} ETH.`)
                resolve(true)
            }
            catch (e) {
                this.log('ERROR: Unable to make deposit.')
                resolve(false)
            }
        })
    }

    async update_preimage(channelID) {
        let preimage = await generate_preimage()
        return this.preimage =  preimage
    }

    get_preimage_hash(channelID) {
        return new Promise( async(resolve, reject) => {
            try {
                assert(channelID >= 0)

                await this.update_preimage(channelID)

                resolve(utils.web3.utils.sha3(this.preimage))
            }
            catch (e) {
                reject('Invalid request')
            }
        })
    }

    otherPlayer(channelID) {
        return this.channels[channelID].left == this.owner.address? this.channels[channelID].right : this.channels[channelID].left
    }

    make_uncoditional_payment(channelID) {
        let targetAddress = this.otherPlayer(channelID)
        this.channelStates[channelID].complete_payment() // now I complete payment
        let s = this.channelStates[channelID].sign(this.owner.private_key)
        this.publish_unconditional_payment(targetAddress, this.preimage, s)
    }

    publish_unconditional_payment(recipient,preimage, signedState) {
        this.pubnub.publish({
            message: {
                type: 'unconditional-payment',
                sender: this.owner.address,
                recipient: recipient,
                preimage: preimage,
                signedState: signedState.serialize()
            },
            channel: 'sprites+' + recipient + "2"
        })
    }

    // receive payment from customer,
    // recipient can be unikey or merchant
    // if it is unikey, can just complete payment and update channel
    // if it is merchant, will require to look up channel of merchant,
    // and create condtional payment from UniKey to merchant
    async receive_conditional_payment(who, recipient, signed_state) {
        this.log(`Receive Conditional Payment from ${who.address} to ${recipient}`)
        return new Promise(async ( resolve, reject) => {

            let channelID = signed_state.channelID
            try {
                assert(this.channels[channelID])
            }
            catch (e) { reject('channel not exist') }
            if (signed_state.verify_signature(who.address)) {
                this.log("Signature OK")
                if (recipient == this.owner.address) { // just pay to unikey?
                    this.log(`Owner address matches recipient address.  Verifying preimage hash.`)
                    // owner must know the preimage...
                    // skipped for the demo
                    let preimage = this.preimage

                    let preimage_hash = signed_state.payment.preimage_hash
                    if (utils.web3.utils.sha3(preimage) == preimage_hash) { // verify the hash
                        this.log(`Preimage Hash OK.  Publish Secret to Sender`)
                        this.publish_preimage(who, preimage, channelID )
                        resolve({ cmd: 'revealed', channelID: channelID, preimage: preimage })
                    }
                    else {
                        this.log(`Error: Preimage Hash not matched.`)
                        reject('hash not match')
                    }
                }
                else {
                    this.log(`Create Link payment from ${who.address} to ${recipient}`)
                    // create condtional payment
                    let other_channelID = this.search_channelID(recipient)
                    assert(other_channelID >= 0)
                    let payment = signed_state.payment
                    assert(other_channelID)  // not on dictionary?
                    // need to depoist, and let's deposit 10 time of amount
                    let owner_deposit = await this.channels[other_channelID].get_deposit(this.owner)
                    let owner_credit = await this.channels[other_channelID].get_credit(this.owner)
                    let owner_balance = BigNumber(owner_deposit).plus(owner_credit)
                    if (BigNumber(owner_balance).isLessThan(BigNumber(payment.amount))) {
                        await this.deposit(this.owner, payment.amount * 2, other_channelID)
                    }
                    let s = await this.channels[other_channelID].conditional_payment_with_preimage_hash(this.owner, recipient, payment.amount, payment.preimage_hash)
                    this.channelStates[other_channelID] = s.to_unsigned() //
                    // now need to make payment
                    resolve( {cmd: 'open', signed_state: s.serialize()})
                }
            }
            else {
                this.log(`Signature not matches with ${who.address}`)
                reject('signature not matches')
            }

        })
    }

    publish_preimage(target, preimage, channelID) {
        this.pubnub.publish({
            message: {
                type: 'receipt-preimage',
                preimage: preimage,
                channelID: channelID
            },
            channel: 'sprites+' + target.address + "2"
        })
    }

    createChannel(targetAddress) {
        return new Promise(async(resolve, reject) => {
            this.registry.createChannel(targetAddress).send( {
                "from" : this.owner.address,
                "gas" : 4000000
            }).on('receipt', async (receipt) => {
                try {
                    let channelID = receipt.events.EventInit.returnValues.channelID
                    this.channels[channelID] = new Channel(this.pm, this.registry, channelID, this.owner.address, targetAddress)
                    this.channelStates[channelID] = await this.channels[channelID].get_state(this.owner)
                    this.log(`Channel ${channelID} is created with ${targetAddress}`)
                    resolve(channelID)
                }
                catch (e) {
                    reject('error')
                }
            })
        })
    }

    getBalance(targetAddress, channelID = -1) {

        const ret = (_on, _off) => { return { onchain: _on, offchain: _off }}
        return new Promise(async(resolve, reject) => {
            try {
                channelID = (channelID == -1) ? this.search_channelID(targetAddress) : channelID
                assert(channelID >= 0)
                let deposit = await this.channels[channelID].get_deposit({ address: targetAddress})
                let credit = await this.channels[channelID].get_credit({address: targetAddress})
                let withdrawn = await this.channels[channelID].get_withdrawn({address: targetAddress})
                let onchain = await utils.web3.eth.getBalance(targetAddress)

                resolve (ret(BigNumber(onchain),BigNumber(deposit).plus(credit).minus(withdrawn)))


            }
            catch (e) {
                // just return 0
                this.log(`fail to get Balance for ${targetAddress}`)
                resolve(ret(0, 0))
            }
        })
    }

    // channel is created and use channel ID to init the channel
    initChannel(targetAddress, channelID) {
        return new Promise(async( resolve, reject) => {
            try {
                this.channels[channelID] = new Channel(this.pm, this.registry, channelID, this.owner.address,targetAddress)
                this.channelStates[channelID] = await this.channels[channelID].get_state(this.owner)
                resolve(channelID)
            }
            catch (e) {
                reject('error')
            }
        })
    }

    search_channelID(address) {
        let _ = utils.web3.utils._
        let ch =  _.last(_.filter(this.channels,  (channel) => {
            return (channel.left == address && channel.right == this.owner.address) || (
                channel.left == this.owner.address && channel.right == address
            )
        }))
        return ch ? ch.channelID : -1
    }

    log(msg) {
        let timestamp = new Date().toISOString();
        console.log(`[${timestamp}][Sprites] : ${msg}`)
    }

    makeWithdrawState(targetAddress, channelID) {
        this.log(`${targetAddress} requests withdraw. Creating signed State for withdrawal.`)
        return new Promise(async(resolve, reject) => {
            try {
                assert(channelID >= 0)
                this.channelStates[channelID] = await this.channels[channelID].get_state(this.owner)
                this.channelStates[channelID].withdrawToOther()
                let signedState = this.channelStates[channelID].sign(this.owner.private_key)
                resolve(signedState.serialize())
            }
            catch(e) {
                this.log(`fail to create signed state for ${targetAddress}`)
                reject("Cannot withdraw")
            }

        })

    }

    updateAndWithdraw(targetAddress, s) {
        this.log(`${this.owner.address} received requests update and withdraw on Chain`)
        return new Promise(async(resolve, reject) => {
            try {
                let signedState = SignedState.deserialze(s)
                if (signedState.verify_signature(targetAddress)) {
                    this.log("Signature ok.  Update and Withdraw on Chain.")
                    let deposit = await this.channels[signedState.channelID].get_deposit(this.owner)
                    let credit = await this.channels[signedState.channelID].get_credit(this.owner)
                    let withdrawn = await this.channels[signedState.channelID].get_withdrawn(this.owner)
                    let toWithdraw = BigNumber(deposit).plus(BigNumber(credit)).minus(BigNumber(withdrawn))
                    let txhash = await this.channels[signedState.channelID].updateAndWithdraw(this.owner, signedState)
                    this.channelStates[signedState.channelID] = signedState.to_unsigned()
                    resolve( {toWithdraw: toWithdraw, txhash: txhash })
                }
                else {
                    this.log("Signature not matched!")
                    reject("Signature not matched!")
                }
            }
            catch (e) {
                console.log(e)
                reject("Error withdraw and update")
            }

        })
    }

    reset() {
        this.channels = {}
        this.channelStates = {}
    }

}

module.exports = Application