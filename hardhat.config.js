require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    coinmarketcap: "82c3ceca-d368-4e32-9296-e0ee96c95272",
    currency: 'EUR',
    gasPrice: 100,
    gasPriceApi: process.env.GAS_API,
    token: 'ETH',
    onlyCalledMethods: true,
    src: 'contracts',
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: false,
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      gas: "auto",
      gasPrice: "auto",
      accounts: {
        mnemonic: `${process.env.MNEMONIC}`,
        accountsBalance: "10000000000000000000000"
      },
    },
    hardhat: {
      gas: "auto",
      gasPrice: "auto",
      accounts: {
        mnemonic: `${process.env.MNEMONIC}`,
        accountsBalance: "10000000000000000000000"
      },
    },
    // goerli: {
    //   url: `${process.env.ALCHEMY_APIKEY_GOERLI}`,
    //   chainId: 5,
    //   accounts: [`${process.env.ACCOUNT_TEST_PRIVATE_KEY}`]
    // },
    // mumbai: {
    //   url: `${process.env.ALCHEMY_APIKEY_MUMBAI}`,
    //   chainId: 80001,
    //   accounts: [`${process.env.ACCOUNT_TEST_PRIVATE_KEY}`]
    // }
    /*
    mainnet: {
      url: ${process.env.ALCHEMY_ETH_API_KEY},
      chainId: 1,
      accounts: [${process.env.MAIN_ACCOUNT_PRIVATE_KEY}]
    },
    */
  }, 
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
