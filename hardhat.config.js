require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const URL = process.env.URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
//0x089E18E69ac03885110Cfd875EEA788f90EC0ACF