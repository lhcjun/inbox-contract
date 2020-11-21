require('dotenv').config(); // get .env variables
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3'); // Web3 constructor (Eth JS API)
const { abi, evm } = require('./compile');
const mnemonic = process.env.MNEMONIC;
const network = process.env.RINKEBY_ENDPOINT;

/* config provider
    → unlock account with mnemonic (to pay ETH for deploying contract)
    → connect to a specific outside API/node (Infura node on Rinkeby network)
*/
const provider = new HDWalletProvider(mnemonic, network);
// create instance of web3 library & connect to eth network with provider
const web3 = new Web3(provider);
const message = 'Hi there!';

const deploy = async () => {
  // generate a list of accounts with mnemonic
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  // use the account to deploy the contract (need abi & bytecode to create a contract)
  const contract = await new web3.eth.Contract(abi) // interact with existed contract / deploy new contract
    .deploy({ data: '0x' + evm.bytecode.object, arguments: [message] })
    .send({ from: accounts[0] }); // send transaction

  console.log('Contract deployed to', contract.options.address);

  provider.engine.stop();
};
deploy();
