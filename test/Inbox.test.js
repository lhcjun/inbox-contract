const assert = require('assert');
const ganache = require('ganache-cli'); // local ethereum test network
const Web3 = require('web3'); // Web3 constructor (Eth JS API)

// create instance of web3 library & connect to ganache test network with provider
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  // get a list of all accounts from ganache
  accounts = await web3.eth.getAccounts();
  // use one of those accounts to deploy the contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
  });
});
