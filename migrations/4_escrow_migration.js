const PaymentGateway = artifacts.require("PaymentGateway");

module.exports = (deployer, network, accounts) => {
  deployer.deploy(PaymentGateway, accounts[0]);
};
