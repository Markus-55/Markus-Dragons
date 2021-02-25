var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xdf1DDDd40d256Ef9039d171771996d7F2ed19526";

$(document).ready( async () => {
  // asks user if they allow the website
  // to use their MetaMask account to interact with the blockchain
  let accounts = await window.ethereum.enable();
  instance = await new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = await accounts[0];

  console.log(instance);
});
