const Dragoncontract = artifacts.require("Dragoncontract");
const Marketplace = artifacts.require("DragonMarketplace");
const PaymentGateway = artifacts.require("PaymentGateway");

module.exports = deployer => {
  deployer.deploy(Marketplace, Dragoncontract.address, PaymentGateway.address);
};
