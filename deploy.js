const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3 = require('web3')
const {interface,bytecode}= require('./compile')

const provider = new HDWalletProvider(
    'check stable rug unable spread embark rhythm unable mean chef adapt inhale',
    'https://goerli.infura.io/v3/61552e2764a84fd2a607a44aa65f8526'
)

const web3 =new Web3(provider)

const deploy =async()=>{
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x' + bytecode,arguments:['hi there']})
        .send({gas:'1000000',from:accounts[0]})
    console.log('deployed to: ', result.options.address)
}

deploy()