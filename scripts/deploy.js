const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Migrations = await ethers.getContractFactory("Migrations");
  const migration = await Migrations.deploy();
  await migration.deployed();

  const Dragoncontract = await ethers.getContractFactory("Dragoncontract");
  const dragoncontract = await Dragoncontract.deploy();
  await dragoncontract.deployed();
  
  const Marketplace = await ethers.getContractFactory("DragonMarketplace");
  const marketplace = await Marketplace.deploy(dragoncontract.address);
  await marketplace.deployed();

  console.log("Dragoncontract address:", dragoncontract.address);
  console.log("Marketplace address:", marketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
