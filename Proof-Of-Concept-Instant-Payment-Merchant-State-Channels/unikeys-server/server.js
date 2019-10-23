/**
 * Copyright by xxxx xxxx
 */
const express = require('express')
const app = express()
const assert = require('assert')
const bodyparser = require('body-parser')
const request = require('request')
const BigNumber = require('bignumber.js')
const cors = require('cors')
const { deploy_pm_contract, deploy_sprite_contract} = require('./sprites/contract')
const { owner, pubnub_config } = require('./config')
const { SpriteRegistry, PreimageManager, SignedState,
       utils} = require('./sprites')
const Application = require('./sprites/application')
const Pubnub = require('pubnub')

var httpServer = require('http').createServer(app);
var MERCHANT_SERVER = 'http://localhost:3000';


var pubnub = new Pubnub({
    subscribeKey: pubnub_config.subKey,
    publishKey: pubnub_config.pubKey
})

var contract_deployed = false

// deploy contract before running the server
const sprite_app = new Promise( async( resolve, reject) =>  {
    deploy_pm_contract(owner).then(pm_contract => {
        deploy_sprite_contract(owner, [pm_contract.options.address]).then( sprite_contract => {
            contract_deployed = true
            resolve( new Application(owner, new SpriteRegistry(sprite_contract), new PreimageManager(pm_contract), pubnub))
        })
    })
});



app.use(cors())
app.use(bodyparser.json())
app.use( (req, res, next) => {
    if (!contract_deployed) {
        next('Server is not ready')
    }
    next()

})
// To retrieve current balance from the state
app.get('/balance', async (req, res) => {

    try {
        assert(req.query.address)
        let s_app = await sprite_app
        s_app.getBalance(req.query.address).then( (balance) => res.json(balance))

    }
    catch (e) {
        res.sendStatus(400);
    }
});

// just for test use
app.get('/state', async( req, res) => {
    try {
        let s_app = await sprite_app
        let state = await s_app.channels[req.query.channelID].get_state(s_app.owner)
        res.json(state)
    }
    catch (e) {
        res.sendStatus(400)
    }
})

app.get('/channel', async (req, res) => {
    try {
        let address = req.query.address
        assert(address)
        assert(utils.web3.utils.isAddress(address))

        let s_app = await sprite_app
        let channelID = s_app.search_channelID(address)
        if (channelID == -1) {
            channelID = await s_app.createChannel(address)
        }

        res.json({  channelID: channelID,
                    registry: s_app.registry._contract.options.address,
                    pm: s_app.pm._contract.options.address
        })
    }
    catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})

// let customer create mock deposit
// this should be done within client itself in production since
// every deposit is transaction on chain and will require gas fee
// demo Only UNLESS CHANGING INTERNAL API channel.deposit()
app.post('/deposit', async (req, res) => {
    try {
        let body = req.body
        assert(body.deposit > 0); // no negative or zero deposi

        let s_app = await sprite_app
        let channelID = s_app.search_channelID(body.address)
        assert(channelID != -1)
        s_app.depositTo({address: body.address}, body.deposit, channelID).then( (status) => {
                // only update balance if status is ok
                if (status) {
                    res.status(200).end();
                }
                else {
                    res.status(400).end();
                }
            })

    }
    catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});


// customer submit a condtional payment (signedState)
// body = { address, recipient, signedState }
app.post('/conditional_payment', async (req, res) => {

    let { sig, channelID, deposits, credits, withdrawals, round, preimage_hash, recipient, amount, expiry} = { ...req.body.signedState, ...req.body.signedState.payment }
    try {
        assert(sig)
        assert(channelID >= 0)
        assert(credits)
        assert(deposits)
        assert(withdrawals)
        assert(round >= 0)
        assert(preimage_hash)
        assert(recipient)
        assert(amount > 0)
        assert(expiry > 0)

        let s_state = SignedState.deserialze(req.body.signedState)
        let s_app = await sprite_app
        s_app.receive_conditional_payment({address: req.body.address}, req.body.recipient, s_state).then( result => {
            if (result.cmd == 'revealed') { // 1-1 channel
                res.json( { preimage: result.preimage, channelID: result.channelID})
            }
            else if (result.cmd == 'open') { // linked channel
                let options = {
                    method: 'post',
                    body: {
                        address: s_app.owner.address,
                        recipient: req.body.recipient,
                        signedState: result.signed_state
                    },
                    json: true,
                    url: `${MERCHANT_SERVER}/conditional_payment`
                }
                request(options, (err, response, b) => {
                    if (err) return res.sendStatus(400)
                    s_app.publish_preimage({address: req.body.address}, b.preimage, b.channelID)
                    s_app.preimage =  b.preimage
                    res.json( { preimage: b.preimage, channelID: b.channelID })
                })
            }

        }).catch( (e) => {
            console.log(e)
            return res.sendStatus(400)
        })
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(400)
    }
})

// cooperate withdrawal
// 1. player post request for withdraw with signedState
// 2. Unikeys verifies state is ok to withdraw
// 3. Unikeys updates state on chain
// 4. User should call withdraw or Unikeys should call withdraw (currently contract not support)
app.get("/withdraw", async (req, res) => {
    let s_app = await sprite_app
    let channelID = s_app.search_channelID(req.query.address)
    s_app.makeWithdrawState(req.query.address, channelID).then( state => {
        res.json(state)
    }).catch( (e) => {
        console.log(e)
        return res.sendStatus(400)
    })
})

app.post("/reset", async (req, res) => {
    let s_app = await sprite_app
    s_app.reset()
    return res.sendStatus(200)
})

console.log('Unikey mock server running at port 3001');
module.exports = httpServer.listen(3001)

