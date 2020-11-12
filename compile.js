const path = require('path');
const fs = require('fs');
const solc = require('solc'); // solidity compiler

// get the absolute path of .sol file (contract source code)
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// read the contract source code
const source = fs.readFileSync(inboxPath, 'utf8');

// compile with solc - JSON-input-output interface (ABI)
const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log(output);

// export compiled source code
module.exports = output.contracts['Inbox.sol'].Inbox;
