const path = require('path');
const fs = require('fs');
const solc = require('solc')

// Create a varialbe that is the parth to the smart contract that is to be compiled.
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Get the raw source of the file.
const source = fs.readFileSync(inboxPath, 'utf8');

// use compiler to compile the solidity file by passing in the soruce code and ....


const contractObject = solc.compile(source, 1);

console.log(contractObject);

module.exports = contractObject.contracts[':Inbox'];




