/**
 * Copyright by xxxx xxxx
 */
const constant = require('./constant')

class Payment {

    constructor(recipient = constant.ZERO_ADDRESS, preimageHash = constant.ZERO_PREIMAGE_HASH, amount=0, expiry=0, cmd=null ) {
        this.recipient = recipient;
        this.preimage_hash = preimageHash;
        this.amount = amount;
        this.expiry = expiry;
        this.cmd = cmd;
    }

    serialize() {
        return {
            recipient: this.recipient,
            preimage_hash: this.preimage_hash,
            amount: this.amount,
            expiry: this.expiry,
            cmd: this.cmd
        }
    }

    static deserialize(data) {
        return new Payment(data.recipient, data.preimage_hash, data.amount, data.expiry, data.cmd)
    }
}
module.exports = Payment;