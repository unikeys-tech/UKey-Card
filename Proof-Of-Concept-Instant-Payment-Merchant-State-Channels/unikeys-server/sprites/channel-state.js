/**
 * Copyright by xxxx xxxx
 */
const Payment = require('./payment')
const utils = require('./utils')
const web3 = utils.web3
const D = require('bignumber.js')
const COMMANDS = require('./constant').COMMANDS

class ChannelState {



    constructor(channelID = 0, deposits = [0, 0], credits = [0, 0], withdrawals = [0, 0], round = 0, payment = new Payment() ) {
        this.channelID = channelID
        this.deposits = deposits
        this.credits = credits
        this.withdrawals = withdrawals
        this.round = round
        this.payment = payment
    }

    message() {
        // const asUint = (value) => {return {t: 'uint', v: value}}
        // const asInt = (value) => {return { t: 'int', v: value}}
        // const asByte32 = (value) => {return { t: 'bytes32', v: value}}
        let state_data = {...this, ...this.payment}

        const { channelID, credits, withdrawals, round, expiry, preimage_hash, amount, recipient } = state_data

        const h2b = (m) => web3.utils.hexToBytes(m)
        const to2 = (m) => h2b(web3.utils.toTwosComplement(m))
        const pad = (m) => h2b(web3.utils.padLeft(m, 64))
        const merged = (arr) => [].concat.apply([], arr)

        return web3.utils.bytesToHex(merged([
            to2(channelID),  // 1
            ...credits.map(to2),  // [ -100, 0]
            ...withdrawals.map(to2),  // [0, 0]
            to2(round),  // 0
            h2b(preimage_hash),// 0xXXXXXXX (32bytes)
            pad(recipient), // 0xXX  (20 bytes)
            to2(amount), // 0
            to2(expiry) // 0
        ]))
    }


    make_payment(recipient, amount, expiry, preimage) {
        let preimage_hash = web3.utils.sha3(preimage)
        return new Payment(recipient, preimage_hash, amount, expiry, 'open')
    }

    make_payment_with_preimage_hash(recipient, amount, expiry, preimage_hash) {
        return new Payment(recipient, preimage_hash, amount, expiry, 'open')
    }

    conditional_payment(recipient, amount, expiry, preimage) {
        let payment = this.make_payment(recipient, amount, expiry, preimage)
        let new_credits = [D(this.credits[0]).minus(D(amount)), this.credits[1]]
        let new_state = Object.assign(new ChannelState(), this, {payment: payment, round: this.round + 1, credits: new_credits})
        this.validate(new_state, new_state.payment.cmd)
        return new_state
    }

    conditional_payment_with_preimage_hash(recipient, amount, expiry, preimage_hash) {
        let payment = this.make_payment_with_preimage_hash(recipient, amount, expiry, preimage_hash)
        let new_credits = [D(this.credits[0]).minus(D(amount)), this.credits[1]]
        let new_state = Object.assign(new ChannelState(), this, { payment: payment, round: this.round + 1, credits: new_credits})
        this.validate(new_state, new_state.payment.cmd)
        return new_state
    }

    complete_payment() {
        this.credits = [this.credits[0], D(this.credits[1]).plus(D(this.payment.amount))]
        Object.assign(this, {credits: this.credits, round: this.round + 1, payment: new Payment()})
    }

    withdrawToOther() {
        this.withdrawals = [this.withdrawals[0], D(this.credits[1]).plus(D(this.deposits[1]))]
        Object.assign(this, {withdrawals: this.withdrawals, round: this.round + 1})
    }

    sign(private_key) {
        let signature = utils.sign(this.message(), private_key)
        let sig = [ signature.v, signature.r, signature.s]
        return new SignedState(sig, this.channelID, this.deposits, this.credits, this.withdrawals, this.round, this.payment)
    }

    _check_credit(new_state) {
        if (new_state.credits[0] != this.credits[0]) {
            throw "Their credits changed"
        }

        if (new_state.credits[1] != this.credits[1]) {
            throw "Our credits changed"
        }
    }

    _check_deposit(nw_state) {
        if (new_state.deposits[0] != this.deposits[0]) {
            throw "Their deposit changed"
        }

        if (new_state.deposits[1] != this.deposits[1]) {
            throw "Our deposit changed"
        }
    }

    _check_withdrawal(new_state) {
        if (new_state.withdrawals[1] != this.withdrawals[1]) {
            throw "Our withdrawal changed"
        }

        let new_withdrawal = new_state.withdrawals[0]
        let new_deposit = new_state.deposits[0]
        let new_credit = new_state.credits[0]

        if (new_withdrawal > new_deposit + new_credit) {
            raise `withdrawal=${new_withdrawal} > deposit=${new_deposit} + credit=${new_deposit}`
        }
    }

    _check_round_number(new_state) {
        if (new_state.round <= this.round) {
            throw "Round not advanced"
        }
    }

    _validate_open(new_state) {
        let new_amount = new_state.payment.amount
        let old_amount = this.payment.amount

        if (old_amount != 0) {
            throw "Payment already in process"
        }
        else if (new_amount <= 0) {
            throw "Amount need to be positive, got " + new_amount
        }
        else if (new_amount > this.deposits[0] + this.credits[0]) {
            throw `amount=${new_amount} > deposit=${this.deposits[0]} + credits=${this.credits[0]}`
        }
    }

    _validate_complete(new_state) {
        let new_amount = new_state.payment.amount
        let old_amount = this.payment.amount

        if (old_amount == 0) {
            throw "No payment to complete"
        }
        else if (new_amount != 0) {
            throw `Amount needs to be 0 to ocomplete, got ${new_amount}`
        }
        else if (this.credits[1] + old_amount != new_state.credits[1]) {
            throw "Payment not credited to recipient"
        }
        else if (this.credits[0] != new_state.credits[0]) {
            throw "opponenet changed his credits."
        }

        this._check_unchanged(new_state, ["deposits" , "withdrawals"])
    }


    _validate_cancel(new_state) {
        let new_amount = new_state.payment.amount
        let old_amount = this.payment.amount
        if (old_amount == 0) {
            throw "No payment to cancel"
        }
        else if (new_amount != 0) {
            throw `Amount should be 0 after cancel, get ${new_amount}`
        }

        if (this.credits[0] + old_amount != new_state.credits[0]) {
            throw "Payment amount wrongly credited"
        }
     }

     _validate_update(new_state) {
         this._check_credit(new_state)
         this._check_deposit(new_state)
         this._check_withdrawal(new_state)
     }

     _check_unchanged(new_state, attributes) {
        attributes.forEach(attr => {
            if (this[attr].every(((v, i) => v != new_state[attr][i]))) {
                throw `${attr} changed`
            }
        });
     }

     validate(new_state, command=null) {
         this._check_round_number(new_state)

         if (command != null && COMMANDS.indexOf(command) == -1) {
             throw `${command} not in Command List`
         }

         if (command == "open") {
             this._validate_open(new_state)
         }
         else if (command == "complete") {
             this._validate_complete(new_state)
         }
         else if (command == "cancel") {
             this._validate_cancel(new_state)
         }
         else {
             this._validate_update(new_state)
         }
     }

     serialize() {
         return {
            channelID : this.channelID,
            deposits : this.deposits,
            credits: this.credits,
            withdrawals: this.withdrawals,
            round: this.round,
            payment: this.payment.serialize()
         }
     }

    static deserialze(data) {
        return new ChannelState(data.channelID, data.deposits, data.credits, data.withdrawals, data.round, Payment.deserialze(data.payment))
    }


}

class SignedState extends ChannelState  {
    constructor(sig, channelID = 0, deposits = [0, 0], credits = [0, 0], withdrawals = [0, 0], round = 0, payment = new Payment() ) {
        super(channelID, deposits, credits, withdrawals, round, payment)
        this.sig = sig
    }

    to_unsigned() {
        return new ChannelState(this.channelID, this.deposits, this.credits, this.withdrawals, this.round, this.payment)
    }

    recover_address() {
        let msg_hash = this.message()
        return web3.eth.accounts.recover(msg_hash,this.sig[0], this.sig[1], this.sig[2])
    }

    verify_signature(address) {
        return this.recover_address() == web3.utils.toChecksumAddress(address)
    }

    serialize() {
        return {
            ...super.serialize(),
            sig: this.sig
        }
    }

    static deserialze(data) {
        return new SignedState(data.sig, data.channelID, data.deposits, data.credits, data.withdrawals, data.round, Payment.deserialize(data.payment))

    }
}

module.exports = { ChannelState: ChannelState,
                   SignedState: SignedState }