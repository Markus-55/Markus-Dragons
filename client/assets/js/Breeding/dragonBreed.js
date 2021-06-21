/* dragonBreed.js is calling the smart contract with the given information
  to breed the dragons and displaying all the errors and notifications */

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x71c1159258925705988D8f7dFf15A14101f9F8EC";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(instance);

  ownedDragons();
  birthEvent();
});

async function ownedDragons() {
  let ownedDragonIds = await instance.methods.allOwnedDragons().call();
  for(let i = 0; i < ownedDragonIds.length; i++) {
    let id = ownedDragonIds[i];
    getMyDragons(id).catch(error => console.log(error));
  }
}

async function getMyDragons(id) {
  let dragonData = await instance.methods.getDragon(id).call();
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
    instance.methods.breed(dadId, momId).send({}, (error, txHash) => {
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
  instance.events.Birth().on("data", event => {
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
