const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider())
const { interface, bytecode}= require('../compile')
const variable = "blaaa"
let accounts
let inbox

beforeEach(async()=>{
   accounts = await web3.eth.getAccounts()
   inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:[variable]})
    .send({from: accounts[0],gas:'1000000'})
})

describe('inbox',()=>{
    it('deploys a contract',()=>{
        assert.ok(inbox.options.address)
    })
    it('has a default massage',async()=>{
        const message = await inbox.methods.message().call()
        assert.equal(message,variable)
    })
    it('can update massage',async()=>{
        await inbox.methods.setMessage('bl1').send({from: accounts[0]})
        const message = await inbox.methods.message().call()
        assert.equal(message,'bl1')
    })
})
