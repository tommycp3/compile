const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');


const provider = new HDWalletProvider(
    "pig whale mutual zebra close spice stool attack bench emerge away sadness",
    "https://rinkeby.infura.io/Ps1oGaFu5kT2WkgVGLq9"
);

const web3 = new Web3(provider);

const call = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to call message variable from ' + accounts[0]);

    const restlt = await new web3.eth.Contract

}

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ' + accounts[0]);

//    const result = await new web3.eth.Contract(JSON.parse(interface))
//        .deploy({ data: bytecode, arguments: ['Hi there!']})
//        .send({ from: accounts[0], gas: '1000000'});

        console.log('Contract deployed to ', result.options.address)
};
deploy();
