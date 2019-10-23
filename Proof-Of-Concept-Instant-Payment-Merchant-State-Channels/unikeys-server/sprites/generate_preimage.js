/**
 * Copyright by xxxx xxxx
 */
const crypto = require('crypto')
const web3 = require('./utils').web3;

module.exports = async () => {
    let x = await crypto.randomBytes(32)
    return web3.utils.bytesToHex(x)
}