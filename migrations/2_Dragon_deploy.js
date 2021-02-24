const DragonToken = artifacts.require("Dragoncontract");

module.exports = deployer => {
  deployer.deploy(DragonToken);
};
