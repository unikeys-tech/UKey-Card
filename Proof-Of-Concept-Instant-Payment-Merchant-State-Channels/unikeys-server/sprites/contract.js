/**
 * Copyright by xxxx xxxx
 */
const web3 = require('./utils').web3
const fs = require('fs')

const deploy_sprite_contract = (deployer, args) => {
    return   deploy_contract(deployer, 'contractSprite.sol', 'SpritesRegistry', args)

}
const deploy_pm_contract =   (deployer) => {
        return  deploy_contract(deployer, 'PreimageManager.sol', 'PreimageManager')
    }

const deploy_contract = async (deployer, contract_name, name, args= []) => {
        let source = fs.readFileSync( '../out/contracts.json')
        let contracts = JSON.parse(source)["contracts"]
        let abi = JSON.parse(contracts[`contracts/${contract_name}:${name}`].abi)
        let code = '0x' + contracts[`contracts/${contract_name}:${name}`].bin

        let newContract = new web3.eth.Contract(abi)

        console.log('Deploying the contract')
        let contract = await newContract.deploy({ data: code, arguments:args}).send({ from: deployer.address, gas: 4000000})
        console.log('Contract Deployed: ' + contract.options.address)

        return contract
    }

module.exports = {
    deploy_sprite_contract: deploy_sprite_contract,
    deploy_pm_contract: deploy_pm_contract,
    deploy_contract: deploy_contract
}
