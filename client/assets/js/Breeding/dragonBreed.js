/* dragonBreed.js is calling the smart contract with the given information
  to breed the dragons and displaying all the errors and notifications */

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xC3d03056a6806E6eef7BCEf3875387359638C3a6";

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

      newDragonHtml(event.returnValues.dragonId);
  }).on("error", (error, receipt) => {
      console.log(error, receipt);
  });
}


// $(".breedBtn").click(() => {
//     return dadId == undefined || momId == undefined ?
//       // $("#errorModal").modal();
//       // $(".errorModalBody").html("Please choose the dad & mom dragon to breed")
//
//       console.log("You csaweeeeon together")
//
//     : dadId != momId ?
//         instance.methods.breed(dadId, momId).send({}, (error, txHash) => {
//           return (error ? console.log(error) : console.log(txHash));
//         })
//     : alert("You cannot breed the same dragon together");
// });

// √ DISPLAY box for mom & dad dragons (dragonBreed.html)
// √ CLICK button to CHOOSE dad dragon & other button for mom dragon

  // √ OPEN modal with all owned dragons dragons
  // √ SELECT dad and mom dragon
    // √ DISPLAY selected dragons
      // √ DISABLE already selected dad or mom dragon
  // DISABLE breed button before mom & dad dragons are selected
  // ENABLE breed button if both mom & dad dragons are selected
    // CLICK breed button
      // Call instance.methods.getDragon(dadId) and getDragon(momId) (dragonBreed.js)
        // CALL instance.methods.breed(dadId, momId);

// CALL instance.events.Birth().on("data", event => {})
// MESSAGE with LINK to myDragons.html to check new dragon
