/* dragonCreation.js is calling the smart contract with the given information
  to create the unique dragon token and store it */

let web3 = new Web3(Web3.givenProvider);

let dragonContractInstance;
let user;

$(document).ready(async () => {
  // asks user if they allow the website
  // to use their MetaMask account to interact with the blockchain
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  user = accounts[0];

  //console.log(dragonContractInstance);
  birthEvent();
});

function birthEvent() {
  dragonContractInstance.events.Birth().on("data", event => {
    $("#createdDragon > .createdDragonTitle, .addedTokenText, .ownerDetail, .geneDetail, .idDetail").remove();
    $("#createdDragon").css("display", "block");
    $("#createdDragon").prepend(
     `<span class="createdDragonTitle"><h5>Dragon successfully created!</h5></span>
      <span class="addedTokenText">The MD token has been added to your account!</span>
      <span class="ownerDetail">Owner: ${event.returnValues.owner}</span>
      <span class="geneDetail">Genes: ${event.returnValues.genes}</span>
      <span class="idDetail">Token Id: ${event.returnValues.dragonId}</span>`
    );
  }).on("error", (error, receipt) => {
      console.log(error, receipt);
    });
}

$("#createDragonBtn").click(async() => {

  $("#createdDragon").css("display", "none");

  let dnaStr = getDragonDna();

  let price = 0.05;
  let dragonPrice = web3.utils.toWei(price.toString(), "ether");

  await dragonContractInstance.methods.createDragonGen0(dnaStr).send({value: dragonPrice}, (error, txHash) => {
    if(error && error.code === -32603) {
      $("#txHashModalTitle").text("Creation of dragon was not successful").css("color", "black");
      $(".txHashModalBody").text("You cannot create more then 5 dragons").css("color", "black");
      //console.log(error);
    }
    else if(error) {
      $("#txHashModalTitle").text("Transaction was not successful").css("color", "black");
      $(".txHashModalBody").text("Failed to send transaction: " + error.message).css("color", "black");
      console.log(error);
    }
    else {
      $("#txHashModalTitle").text("Transaction successfully sent!").css("color", "#007400");
      $(".txHashModalBody").html(`<p>Transaction hash: <br>${txHash}</p>`).css("color", "#007400");
      //console.log(txHash);
    }
    $("#txHashModal").modal();
  });
});

$('.close').click(() => $("#createdDragon").css("display", "none"));
