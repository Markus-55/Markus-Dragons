const Dragoncontract = artifacts.require("Dragoncontract");
const Marketplace = artifacts.require("DragonMarketPlace");

module.exports = deployer => {
  deployer.deploy(Marketplace, Dragoncontract.address);
};
