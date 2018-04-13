const assert = require('assert');
const ganache = require('ganache-cli');
// I import interface and bytecode below as follows 
//because it's not the main exported object on the 
// page but a sub object of ':Inbox'.
const { interface, bytecode } = require('../compile');
// Importing a constructor function,
// used to create instances of the the web3 library.
const Web3 = require('web3');

// create an instance of Web3
const web3 = new Web3(ganache.provider());


let accounts
let inbox

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // console.log(accounts);


    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000' })

});

describe('Inbox', () => {
    it('deploys a contract', () => {

        console.log("Here is the address of the deployed contract " + inbox.options.address)
        assert.ok(inbox.options.address);
    });

    it('checks there is a default message saved in the newly deployed contract', async () => {
        // console.log(inbox.contract)
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    it('can change the messsage', async () => {
        await inbox.methods.setMessage('Hello Everybody').send({ from: accounts[0], gas: '1000000'});
        var message = await inbox.methods.message().call();
        assert.equal(message, 'Hello Everybody')
    });
});





