const Dragoncontract = artifacts.require("Dragoncontract");
const Marketplace = artifacts.require("DragonMarketplace");

module.exports = deployer => {
  deployer.deploy(Marketplace, Dragoncontract.address);
};
