# Markus-Dragons

My ERC-721 project is an NFT game where you can collect, create, breed and buy/sell your non-fungible dragon tokens.
To improve the security, Markus-Dragons uses [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) smart contracts to prevent hackers from intercepting the users funds, by using the [Escrow Contract](https://docs.openzeppelin.com/contracts/2.x/api/payment#Escrow) to store the ETH and the users can securely withdraw their funds in their gallery, with their [MetaMask](https://metamask.io/) account.

 ### Built With

* [jQuery](https://jquery.com/) v3.6.0
* [Bootstrap](https://getbootstrap.com/) v4.3.1
* [web3](https://web3js.readthedocs.io/en/v1.3.4/) v1.4.0

# Getting Started

### Using Markus-Dragons on testnet (This is just a preview, for a full experience install the project locally)

Try the preview, by clicking on [Markus-Dragons](https://markus-dragons.netlify.app/).

### Using Markus-Dragons locally

1. You need to install [Node.js](https://nodejs.org/en/).

2. After you've cloned the project, run the commande `yarn` (it will run `yarn install`) to install all the dependencies.

3. Create `.env` file and add your `MNEMONIC`.

4. To deploy the contracts type `npx hardhat run --network localhost scripts/deploy.js` into the command line.

5. Copy the contract address of Dragoncontract and DragonMarketplace. Paste them into the variables `dragonContractAddress` and `marketplaceAddress` in `/assets/js/components.js`.

6. Use a localhost with [python 3](https://www.python.org/downloads/), add the directory of the client folder `cd .../client` into the command line and then enter `python -m http.server`. In your web browser enter `http://localhost:8000`.

# Usage

### Creating Dragons

Choose between 82 different colors, 7 different eye shapes and 5 different horn shapes & animations. When you create dragons, you can choose to generate a random dragon or customize your own.

### Breeding Dragons

Select the dad and mom dragon that you want to breed and get a new baby dragon that gets the mixed DNA from its parents. One color or attribute will change randomly, inherited from the dragon ancestors.

### Dragon Gallery

View all your dragons and check their information. In your gallery you can also sell your dragons for ETH, you can view or remove your offers and withdraw your funds when your offer has been sold.

Before you sell your dragons you will get a pop-up that will ask if you accept to set the marketplace as an approved operator, you will need to confirm in order to sell them. If you don't want to sell your dragons anymore, you can always remove the operator approval when you want.

### Marketplace

In the marketplace you can buy active offers. When you have bought a dragon, the Dragon Token will be transferred to your gallery and the seller will be able to withdraw their funds in their gallery.

## First look at the Project Markus-Dragons
![Screenshot 2023-02-03 at 17 03 24](https://user-images.githubusercontent.com/69858432/216655802-3fd2f108-be89-4cbd-b01b-5d2fb6d00907.png)

# License

[MIT](https://github.com/Markus-55/Markus-Dragons/blob/master/LICENSE)

# Contact

Markus Bielaszka - markus.bielaszka@gmail.com
