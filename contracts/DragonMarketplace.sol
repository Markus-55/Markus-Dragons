// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.6;

import "./Dragoncontract.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IDragonMarketplace.sol";
import "./PaymentGateway.sol";

contract DragonMarketplace is Ownable, IDragonMarketplace {
  Dragoncontract private _dragonContract;

  struct Offer {
    address payable seller;
    uint256 price;
    uint256 index;
    uint256 tokenId;
    bool active;
  }

  constructor(address dragonContract) {
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
      if(offers[i].active == true) {
        tokensForSale[counter] = offers[i].tokenId;
        counter++;
      }
    }
    return tokensForSale;
  }

  function setOffer(uint256 _price, uint256 _tokenId) override external {
    require(_dragonContract._owns(msg.sender, _tokenId), "You are not the owner of the tokenId");
    require(!tokenIdToOffer[_tokenId].active, "You cannot have more then one offer for a token at a time");
    require(_dragonContract.isApprovedForAll(msg.sender, address(this)), "Marketplace contract is not an approved operator");

    Offer memory _newOffer = Offer(payable(msg.sender), _price, offers.length, _tokenId, true);
    tokenIdToOffer[_tokenId] = _newOffer;
    offers.push(_newOffer);

    emit MarketTransaction("Offer Created", msg.sender, _tokenId);
  }

    function removeOffer(uint256 _tokenId) override external {
      Offer memory offer = tokenIdToOffer[_tokenId];

      require(offer.seller == msg.sender, "Only the seller of the Token Id can remove an offer");

      _offerRemove(_tokenId);

      emit MarketTransaction("Offer removed", msg.sender, _tokenId);
    }

    function buyDragon(uint256 _tokenId) override external payable {
      Offer memory offer = tokenIdToOffer[_tokenId];

      require(offer.price == msg.value, "The price needs to be equal to the offer of Token ID");
      require(offer.active, "There is no offer for this token ID");

      _offerRemove(_tokenId);

      if(offer.price > 0) {
        offer.seller.transfer(offer.price);
      }

      _dragonContract.safeTransferFrom(offer.seller, msg.sender, _tokenId);

      emit MarketTransaction("Token ID purchased", msg.sender, _tokenId);
    }

    function _offerRemove(uint256 _tokenId) private {
      offers[tokenIdToOffer[_tokenId].index].active = false;
      delete tokenIdToOffer[_tokenId];
    }
}
