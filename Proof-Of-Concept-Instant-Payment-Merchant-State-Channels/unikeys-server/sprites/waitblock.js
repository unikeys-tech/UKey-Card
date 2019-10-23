/**
 * Copyright by xxxx xxxx
 */
let web3 = require('./utils').web3
let deployer  = '0xd124b979f746be85706daa1180227e716eafcc5c';
const GAS = require('../sprites/constant').GAS

module.exports = async (num_block) => {
    for (var i=0; i < num_block; i++) {
        await web3.eth.sendTransaction({
            "from" : deployer,
            "to" : deployer,
            "gas" : GAS
        })
       // console.log(await web3.eth.getBlockNumber())
    }
}