// Define how to deploy the smart contract using an async function using deployer
var MyToken = artifacts.require("./MyToken.sol");

module.exports = async function(deployer) {
  await deployer.deploy(MyToken,1000000);
  }