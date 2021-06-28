/* dragonBreed.js is calling the smart contract with the given information
  to breed the dragons and displaying all the errors and notifications */

var web3 = new Web3(Web3.givenProvider);

var dragonContractInstance;
var user;
var dragonContractAddress = "0xfaEbC4812e22C7623DB21b5aDf8b71a91369A250";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(dragonContractInstance);

  ownedDragons();
  birthEvent();
});

async function ownedDragons() {
  let ownedDragonIds = await dragonContractInstance.methods.allOwnedDragons().call();
  for(let i = 0; i < ownedDragonIds.length; i++) {
    let id = ownedDragonIds[i];
    getMyDragons(id).catch(error => console.log(error));
  }
}

async function getMyDragons(id) {
  let dragonData = await dragonContractInstance.methods.getDragon(id).call();
  ControlFunction(dragonData, id);
}

function ControlFunction(dragonData, id) {
  dragonHtml(id);

  let dnaObject = dragonObj(dragonData);

  renderOwnedDragons(dnaObject, id);
}

$(".breedBtn").click(() => {

  $("#dragonBirth").css("display", "none");

  if(dadId == undefined || momId == undefined) {
    $("#breedModal").modal();
    $("#breedModalTitle").html("Error!").css("color", "#ad2424");
    $(".breedModalBody").html("Please select both dad & mom dragons to breed").css("color", "#ad2424");
  }
  else if(dadId != momId) {
    dragonContractInstance.methods.breed(dadId, momId).send({}, (error, txHash) => {
      $("#breedModal").modal();
      if(error) {
        $("#breedModalTitle").html("Error: transaction failed!").css("color", "#ad2424");
        $(".breedModalBody").html("Failed to send transaction: " + error.message).css("color", "#ad2424");
      }
      else {
        $("#breedModalTitle").html("Transaction successfully sent!").css("color", "#007400");
        $(".breedModalBody").html(`<p>Transaction hash: <br>${txHash}</p>`).css("color", "#007400");
      }
    });
  }
  else {
    $("#breedModal").modal();
    $("#breedModalTitle").html("Error!").css("color", "#ad2424");
    $(".breedModalBody").html("<p>Please choose another dragon,<br>the dragon has already been selected</p>").css("color", "#ad2424");
  }
});

$('.close').click(() => $("#dragonBirth").css("display", "none"));

function birthEvent() {
  dragonContractInstance.events.Birth().on("data", event => {
    $("#dragonBirth > p, h5").remove();
    $("#dragonBirth").css("display", "block");
    $("#dragonBirth").prepend(
      `<h5 id="createdDragonTitle">Dragons successfully bred!</h5>
      <p id="addedTokenText">&nbsp; &nbsp;The MD token has been added to your account!
      &nbsp; &nbsp; &nbsp; &nbsp; <button type="button" class="btn btn-info babyDragonBtn">Show baby dragon</button></p>
      <p>Owner: ${event.returnValues.owner} &nbsp; &nbsp; &nbsp; &nbsp;
      Genes: ${event.returnValues.genes} &nbsp; &nbsp; &nbsp; &nbsp;
      Token Id: ${event.returnValues.dragonId}</p>`);

      $('.babyDragonBtn').click(() => $(`.babyDragonBtn`).remove());

      newDragonHtml(event.returnValues.dragonId);
  }).on("error", (error, receipt) => {
      console.log(error, receipt);
  });
}
