const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3'); // Web3 constructor (Eth JS API)
const { abi, evm } = require('../compile.js');

// unlock account with mnemonic (to get ETH for deploying contract) & connect to Rinkeby network
const provider = new HDWalletProvider(mnemonic, network);
// create instance of web3 library & connect to eth network with provider
const web3 = new Web3(provider);
// connect to a specific outside API / node
