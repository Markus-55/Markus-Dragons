/* dragonCreation.js is using functions from Dragoncontract.sol to send the transaction txHash
   and also shows the birth event of when a dragon has been created with their informations */

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x90eA32b62E5015b855c3D276A4a8A6036ef45463";

$(document).ready(async () => {
  // asks user if they allow the website
  // to use their MetaMask account to interact with the blockchain
  let accounts = await window.ethereum.enable();
  instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = accounts[0];

  //console.log(instance);
  birthEvent();
});

$("#createDragonBtn").click(() => {

  $("#createdDragon").css("display", "none");

  let dnaStr = getDragonDna();

  instance.methods.createDragonGen0(dnaStr).send({}, (error, txHash) => {
    $("#txHashModal").modal();
    if(error && error.code === -32603) {
      $("#txHashModalTitle").html("Error: transaction failed!").css("color", "#ad2424");
      $("#txHashModalBody").html("There cannot be more then 10 gen0Dragons").css("color", "#ad2424");
      console.log(error);
    }
    else if(error) {
      $("#txHashModalTitle").html("Error: transaction failed!").css("color", "#ad2424");
      $("#txHashModalBody").html("Failed to send transaction: " + error.message).css("color", "#ad2424");
      console.log(error);
    }
    else {
      $("#txHashModalTitle").html("Transaction successfully sent!").css("color", "#007400");
      $("#txHashModalBody").html(`<p>Transaction hash: <br>${txHash}</p>`).css("color", "#007400");
      console.log(txHash);
    }
  });
});

$('.close').click(() => {
  $("#createdDragon").css("display", "none");
});

function birthEvent() {
  instance.events.Birth().on("data", event => {
    $("#createdDragon > p, h5").remove();
    $("#createdDragon").css("display", "block");
    $("#createdDragon").prepend(
      `<h5 id="createdDragonTitle">Dragon successfully created!</h5>
      <p id="addedTokenText">&nbsp; &nbsp;The MD token has been added to your account!</p>
      <p>Owner: ${event.returnValues.owner} &nbsp; &nbsp; &nbsp; &nbsp;
      Genes: ${event.returnValues.genes} &nbsp; &nbsp; &nbsp; &nbsp;
      Token Id: ${event.returnValues.dragonId}</p>`);
  }).on("error", (error, receipt) => {
      console.log(error, receipt);
    });
}
