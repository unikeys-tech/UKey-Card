/**
 * Copyright by xxxx xxxx
 */
class SpriteRegistry {

    constructor(contract) {
        this._contract = contract;
    }

    channels(args) {
        return this._contract.methods.channels(args)
    }

    createChannel(other) {
        return this._contract.methods.createChannel(other)
    }

    deposit(channelID) {
        return this._contract.methods.deposit(channelID)
    }

    depositTo(channelID, benefincient) {
        return this._contract.methods.depositTo(channelID, benefincient)
    }

    finalize(channelID) {
        return this._contract.methods.finalize(channelID)
    }

    getCredit(channelID) {
        return this._contract.methods.getCredit(channelID)
    }

    getDeadline(channelID) {
        return this._contract.methods.getDeadline(channelID)
    }

    getDeposit(channelID) {
        return this._contract.methods.getDeposit(channelID)
    }

    getState(channelID) {
        return this._contract.methods.getState(channelID)
    }

    getStatus(channelID) {
        return this._contract.methods.getStatus(channelID)
    }

    getWithdrawn(channelID) {
        return this._contract.methods.getWithdrawn(channelID)
    }

    isSignatureOkay(pub, messageHash, sig) {
        return this._contract.methods.isSignatureOkay(pub, messageHash, sig)
    }

    recoverAddress(messageHash, sig) {
        return this._contract.methods.recoverAddress(messageHash, sig)
    }

    sha3int(r) {
        return this._contract.methods.sha3int(r)
    }

    trigger(channelID) {
        return this._contract.methods.trigger(channelID)
    }

    update(channelID, sig, credits, withdrawals, round, preimageHash, recipient, amount, expiry) {
        return this._contract.methods.update(channelID, sig, credits, withdrawals, round, preimageHash, recipient, amount, expiry)
    }

    updateAndWithdraw(channelID, sig, credits, withdrawals, round, preimageHash, recipient, amount, expiry) {
        return this._contract.methods.updateAndWithdraw(channelID, sig, credits, withdrawals, round, preimageHash, recipient, amount, expiry)
    }

    verifyUpdate(channelID, sig, credits, withdrawals, round, preimageHash, recipient, amount, expiry) {
        return this._contract.methods.verifyUpdate(channelID, sig, credits, withdrawals, round, preimageHash, recipient, amount, expiry)
    }

    withdraw(channelID) {
        return this._contract.methods.withdraw(channelID)
    }

    computeHash(channelID, credits, withdrawals, round, preimageHash, recipient, amount, expiry) {
        return this._contract.methods.compute_hash(channelID, credits, withdrawals, round, preimageHash, recipient, amount, expiry)
    }
}

module.exports = SpriteRegistry;