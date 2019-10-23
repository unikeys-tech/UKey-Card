/**
 * Copyright by xxxx xxxx
 */
const Web3 = require('web3')
const assert = require('assert')
const D = require('bignumber.js')

const TEST_NET=  process.env.TEST_NET ? process.env.TEST_NET : "http://localhost:8434";

class EthUtils {
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider(TEST_NET));
    }

    isAddress(address) {
        return this.web3.utils.isAddress(address)
    }

    toChecksumAddress(address) {
        assert(this.isAddress(address))
        return this.web3.utils.toChecksumAddress(address)
    }

    sign(data, privateKey) {
        return this.web3.eth.accounts.sign(data, privateKey)
    }

    verify(address, signMessage) {
        return this.web3.eth.accounts.recover(signMessage) == this.toChecksumAddress(address)
    }

    verifyHash(sig, data){
        let h = this.web3.eth.accounts.hashMessage(data)
        return sig.messageHash == h
    }

    getBalance(address) {
        return this.web3.eth.getBalance(address)
    }

    s_i(arr) {
        return arr.map( i => new D(i).toNumber())
    }

    bn(number) {
        return D(number).toNumber()
    }
}

module.exports = new EthUtils();