const Token = artifacts.require("Dragoncontract");

module.exports = deployer => {
  deployer.deploy(Token);
};
