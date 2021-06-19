const Dragoncontract = artifacts.require("Dragoncontract");

module.exports = deployer => {
  deployer.deploy(Dragoncontract);
};
