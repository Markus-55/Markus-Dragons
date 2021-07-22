// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.6;

import "./Dragoncontract.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/escrow/Escrow.sol";
import "./IDragonMarketplace.sol";

contract DragonMarketplace is Ownable, IDragonMarketplace {
  Dragoncontract private _dragonContract;
  Escrow private _escrowContract;

  struct Offer {
    address payable seller;
    uint256 price;
    uint256 index;
    uint256 tokenId;
    bool active;
  }

  constructor(address dragonContract) {
    _escrowContract = new Escrow();
    setDragonContract(dragonContract);
  }

  Offer[] offers;

  mapping(uint256 => Offer) tokenIdToOffer;

  function setDragonContract(address _dragonContractAddress) override public onlyOwner {
    _dragonContract = Dragoncontract(_dragonContractAddress);
  }

  function getOffer(uint256 _tokenId) override external view returns (address seller, uint256 price, uint256 index, uint256 tokenId, bool active) {
    return (tokenIdToOffer[_tokenId].seller, tokenIdToOffer[_tokenId].price, tokenIdToOffer[_tokenId].index, tokenIdToOffer[_tokenId].tokenId, tokenIdToOffer[_tokenId].active);
  }

  function getActiveStatus(uint256 _tokenId) external view returns (bool active) {
    return tokenIdToOffer[_tokenId].active;
  }

  function getAllTokenOnSale() override external view returns(uint256[] memory listOfOffers) {
    uint256[] memory tokensForSale = new uint256[](offers.length);
    uint256 counter = 0;
    for(uint256 i = 0; i < offers.length; i++) {
      if(offers[i].active) {
        tokensForSale[counter] = offers[i].tokenId;
        counter++;
      }
    }
    return tokensForSale;
  }

  function setOffer(uint256 _price, uint256 _tokenId) override external {
    require(_dragonContract._owns(msg.sender, _tokenId), "You are not the token owner");
    require(!tokenIdToOffer[_tokenId].active, "You cannot have more then one offer for a token at a time");
    require(_dragonContract.isApprovedForAll(msg.sender, address(this)), "Marketplace contract is not an approved operator");

    Offer memory _newOffer = Offer(payable(msg.sender), _price, offers.length, _tokenId, true);
    tokenIdToOffer[_tokenId] = _newOffer;
    offers.push(_newOffer);

    emit MarketTransaction("Offer Created", msg.sender, _tokenId);
  }

  function removeOffer(uint256 _tokenId) override external {
    Offer memory offer = tokenIdToOffer[_tokenId];

    require(offer.seller == msg.sender, "Only the token seller can remove an offer");

    _offerRemove(_tokenId);

    emit MarketTransaction("Offer removed", msg.sender, _tokenId);
  }

  function buyDragon(uint256 _tokenId, address payable _seller) override external payable {
    Offer memory offer = tokenIdToOffer[_tokenId];

    require(offer.price == msg.value, "The price of the offer is incorrect");
    require(offer.active, "There is no offer for this token");

    _offerRemove(_tokenId);

    sendPayment(_seller, msg.value);
    _dragonContract.transferFrom(offer.seller, msg.sender, _tokenId);

    emit MarketTransaction("Token purchased", msg.sender, _tokenId);
  }

  function sendPayment(address payable _payee, uint256 _amount) public payable {
    _escrowContract.deposit{value: _amount}(_payee);
  }

  function withdraw(address payable _payee) external {
    _escrowContract.withdraw(_payee);
  }

  function balance(address _payee) external view returns (uint256 userBalance) {
    return _escrowContract.depositsOf(_payee);
  }

  function _offerRemove(uint256 _tokenId) private {
    offers[tokenIdToOffer[_tokenId].index].active = false;
    delete tokenIdToOffer[_tokenId];
  }
}
