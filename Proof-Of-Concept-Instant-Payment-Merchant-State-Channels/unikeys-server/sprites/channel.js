
/**
 * Copyright by xxxx xxxx
 */
const GAS = require('./constant').GAS
const DELTA = require('./constant').DELTA
const utils = require('./utils')
const web3 = utils.web3
const Payment = require('./payment')
const {ChannelState} = require('./channel-state')
const D = require('bignumber.js')
const assert = require('assert')

class Channel {
    constructor(PM, registry, channelID, left, right) {
        this.PM = PM;
        this.registry = registry;
        this.channelID = channelID;
        this.left = left;
        this.right = right;
    }

    async check_tx(receipt) {
        let r = await web3.eth.getTransactionReceipt(receipt.transactionHash)
        return r.status ? r : nil // nil for error transaction
    }

    async deposit(sender, amt) {
        let tx_args = { "from": sender.address, "gas" : GAS, "value" : amt }
        let receipt = await this.registry.deposit(this.channelID).send(tx_args)
        return this.check_tx(receipt)
    }

    async depositTo(sender, beneficient, amt) {
        let tx_args = { "from": sender.address, "gas" : GAS, "value": amt }
        let receipt = await this.registry.depositTo(this.channelID, beneficient).send(tx_args)
        return this.check_tx(receipt)
    }

    get_deposit(who) {
        return this.registry.getDeposit(this.channelID).call({"from": who.address})
    }

    get_credit(who) {
        return this.registry.getCredit(this.channelID).call({"from": who.address})
    }

    get_status() {
        return this.registry.getStatus(this.channelID).call({"from": who.address})
    }

    get_deadline() {
        return this.registry.getDeadline(this.channelID).call({"from": who.address})
    }

    get_withdrawn(who) {
        return this.registry.getWithdrawn(this.channelID).call({"from": who.address})
    }

    async withdraw(who) {
        let tx_args = {
            "from" : who.address,
            "gas" : GAS
        }
        let receipt = await this.registry.withdraw(this.channelID).send(tx_args)
        return this.check_tx(receipt)
    }

    async trigger(who) {
        let tx_args = {
            "from" : who.address,
            "gas" : GAS
        }
        let receipt = await this.registry.trigger(this.channelID).send(tx_args)
        return this.check_tx(receipt)
    }

    async finalize(who) {
        let tx_args = {
            "from" : who.address,
            "gas" : GAS
        }
        let receipt = await this.registry.finalize(this.channelID).send(tx_args)
        return this.check_tx(receipt)
    }

    async get_state(who) {
        let state = await this.registry.getState(this.channelID).call({"from": who.address} )
        let payment = new Payment(state.recipient, state.preimageHash, utils.bn(state.amount), utils.bn(state.expiry))
        return new ChannelState(utils.bn(this.channelID), utils.s_i(state.deposits), utils.s_i(state.credits), utils.s_i(state.withdrawals), utils.bn(state.bestRound), payment)
    }

    async conditional_payment(sender, recipient, amount, preimage) {
        let channel_state = await this.get_state(sender)
        let expiry = await web3.eth.getBlockNumber() + DELTA * 2
        let new_state = channel_state.conditional_payment(recipient, amount, expiry, preimage)
        let signed_state = new_state.sign(sender.private_key)
        return signed_state
    }

    async conditional_payment_with_preimage_hash(sender, recipient, amount, preimage_hash) {
        let channel_state = await this.get_state(sender)
        let expiry = await web3.eth.getBlockNumber() + DELTA * 2
        let new_state = channel_state.conditional_payment_with_preimage_hash(recipient, amount, expiry,preimage_hash)
        let signed_state = new_state.sign(sender.private_key)
        return signed_state
    }

    async update(who, args) {
        // flatten state
        let { sig, channelID, credits, withdrawals, round, preimage_hash, recipient, amount, expiry} = { ...args, ...args.payment}
        assert(this.channelID == channelID)
        await this.registry.update(
            this.channelID,
            sig,
            credits,
            withdrawals,
            round,
            preimage_hash,
            recipient,
            amount,
            expiry ).send({
                "from": who.address,
                "gas": GAS
            })

    }

    async updateAndWithdraw(who, args) {

        let { sig, channelID, credits, withdrawals, round, preimage_hash, recipient, amount, expiry} = { ...args, ...args.payment}
        assert(this.channelID == channelID)
        return await this.registry.updateAndWithdraw(
            this.channelID,
            sig,
            credits,
            withdrawals,
            round,
            preimage_hash,
            recipient,
            amount,
            expiry ).send({
                "from": who.address,
                "gas": GAS
            })
    }

    async submit_preimage(who, preimage) {
        await this.PM.submitPreimage(preimage).send({ "from" : who.address, "gas": GAS})
    }

    async revealedBefore(who, hash, b) {
        return await this.PM.revealedBefore(hash, b).call({"from": who.address})
    }


}

module.exports = Channel
