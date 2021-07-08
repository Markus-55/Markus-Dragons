const PaymentGateway = artifacts.require("PaymentGateway");
const Marketplace = artifacts.require("DragonMarketplace");

module.exports = deployer => {
  deployer.deploy(PaymentGateway, Marketplace.address);
};
