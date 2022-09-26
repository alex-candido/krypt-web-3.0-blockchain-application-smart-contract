// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ropsten: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/lLX_Hr4cPPb-KbLymbW4PlVH8YGsNXwF',
      accounts: ['8e4520ea2e0464b33f89c29cc52d8a188e5a7274ea5e6fff33c6d39a539c88d6'],
    },
  },
};
