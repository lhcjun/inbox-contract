const assert = require('assert');
const ganache = require('ganache-cli'); // local ethereum test network
const Web3 = require('web3'); // Web3 constructor (Eth JS API)
const { abi, evm } = require('../compile.js');

// create instance of web3 library & connect to ganache test network with provider
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async () => {
  // get a list of all accounts from ganache
  accounts = await web3.eth.getAccounts();
  // use one of those accounts to deploy the contract (need abi & bytecode to create a contract)
  inbox = await new web3.eth.Contract(abi) // interact with existed contract / deploy new contract
    .deploy({ data: '0x' + evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' }); // send transaction
});

describe('Inbox', () => {
  it('deploys a contract in beforeEach', () => {
    assert.ok(inbox.options.address);
  });
});
