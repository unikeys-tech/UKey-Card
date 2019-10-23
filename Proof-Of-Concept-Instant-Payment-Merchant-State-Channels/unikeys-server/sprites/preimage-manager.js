/**
 * Copyright by xxxx xxxx
 */
const web3 = require('./utils').web3;

class PreimageManager {
    
    constructor(contract) { // contract instance
        this._contract = contract
    }

    revealedBefore(h, T) {
        return this._contract.methods.revealedBefore(h, T)
    }

    submitPreimage(x) {
        return this._contract.methods.submitPreimage(x)
    }
}

module.exports = PreimageManager