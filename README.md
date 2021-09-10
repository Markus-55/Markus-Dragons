# Markus-Dragons

 My project is based on the [template](https://github.com/Ivan-on-Tech-Academy/academy-kitties-template) of the Bootcamp of [Ivan On Tech Blockchain Academy](https://academy.ivanontech.com/).

 My ERC-721 project is an NFT game where you can collect, create, breed and buy/sell your non-fungible dragon tokens.
 To improve the security, Markus-Dragons uses [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) smart contracts to prevent hackers from intercepting the users funds, by using the [Escrow Contract](https://docs.openzeppelin.com/contracts/2.x/api/payment#Escrow) to store the ETH and the users can securely withdraw their funds in their gallery, with their [MetaMask](https://metamask.io/) account.

 ### Built With

* [jQuery](https://jquery.com/) v3.6.0
* [Bootstrap](https://getbootstrap.com/) v4.3.1
* [web3](https://web3js.readthedocs.io/en/v1.3.4/) v1.4.0

# Getting Started

### Using Markus-Dragons on testnet

1. Install the [MetaMask](https://metamask.io/) wallet and choose the Ropsten Test Network.

2. To interact with Markus-Dragons you need some ETH, you can get 1 test ETH by entering the address of your MetaMask account to this [faucet](https://faucet.ropsten.be/).

3. You can now start interacting with the project, by clicking on [Markus-Dragons](https://markus-dragons.netlify.app/).

### Using Markus-Dragons locally

1. You need to install [Node.js](https://nodejs.org/en/).

2. Enter `npm install -g truffle` into the command line to install it globally.

3. Install the local Ethereum node [Ganache](https://www.trufflesuite.com/ganache).

4. Open Ganache, create a new workspace, click add project and select `truffle-config.js` in the project files.

5. To deploy the contracts type `truffle console` and then `migrate` into the command line.

6. Copy the contract address of Dragoncontract and DragonMarketplace. Paste them into the variables `dragonContractAddress` and `marketplaceAddress` in `/assets/js/components.js`.

7. Use a localhost with [python 3](https://www.python.org/downloads/), add the directory of the client folder `cd .../client` into the command line and then enter `python -m http.server`. In your web browser enter `http://localhost:8000`.

# Usage

### Creating Dragons

Choose between 82 different colors, 7 different eye shapes and 5 different horn shapes & animations. When you create dragons, you can choose to generate a random dragon or customize your own. Every dragons cost 0.05 ETH and every users can create max 5 dragons.

### Breeding Dragons

Select the dad and mom dragon that you want to breed and get a new baby dragon that gets the mixed DNA from its parents. One color or attribute will change randomly, inherited from the dragon ancestors.
When you have reached the maximum of 5 created dragons, you can breed your dragons to get more.

### Dragon Gallery

View all your dragons and check their information. In your gallery you can also sell your dragons for ETH, you can view or remove your offers and withdraw your funds when your offer has been sold.

Before you sell your dragons you will get a pop-up that will ask if you accept to set the marketplace as an approved operator, you will need to confirm in order to sell them. If you don't want to sell your dragons anymore, you can always remove the operator approval when you want.

### Marketplace

In the marketplace you can buy active offers. When you have bought a dragon, the Dragon Token will be transferred to your gallery and the seller will be able to withdraw their funds in their gallery.
When you have created your 5 dragons, buying dragons is another way to collect more dragons.

# License

[MIT](https://github.com/Markus-55/Markus-Dragons/blob/master/LICENSE)

# Contact

Markus Bielaszka - markus.bielaszka@gmail.com
