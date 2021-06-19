pragma solidity ^0.5.0;

import "./Dragoncontract.sol";
import "./Ownable.sol";
import "./IDragonMarketplace.sol";

contract DragonMarketplace is Ownable, IDragonMarketplace {
  Dragoncontract private _dragonContract;

  struct Offer {
    address payable seller;
    uint256 price;
    uint256 index;
    uint256 tokenId;
    bool active;
  }

  constructor(address dragonContract) public {
    setDragonContract(dragonContract);
  }

  Offer[] offers;

  mapping(uint256 => Offer) tokenIdToOffer;

  function setDragonContract(address _dragonContractAddress) public onlyOwner {
    _dragonContract = Dragoncontract(_dragonContractAddress);
  }

  function getOffer(uint256 _tokenId) external view returns (address seller, uint256 price, uint256 index, uint256 tokenId, bool active) {
    Offer storage offer = tokenIdToOffer[_tokenId];
    return (offer.seller, offer.price, offer.index, offer.tokenId, offer.active);
  }

  function getAllTokenOnSale() external view returns(uint256[] memory listOfOffers) {
    uint256[] memory tokensForSale = new uint256[](offers.length);

    for(uint256 i = 0; i < offers.length; i++) {
      if(offers[i].active == true) {
        tokensForSale[i] = offers[i].tokenId;
      }
    }
    return tokensForSale;
  }

  function setOffer(uint256 _price, uint256 _tokenId) external {
    require(_dragonContract._owns(msg.sender, _tokenId), "You are not the owner of the tokenId");
    require(tokenIdToOffer[_tokenId].active != true, "You cannot have more then one offer for a token at a time");
    require(_dragonContract.isApprovedForAll(msg.sender, address(this)), "Marketplace contract is not an approved opperator");

    Offer memory _newOffer = Offer(msg.sender, _price, offers.length, _tokenId, true);
    tokenIdToOffer[_tokenId] = _newOffer;
    offers.push(_newOffer);

    emit MarketTransaction("Create offer", msg.sender, _tokenId);
  }

    function removeOffer(uint256 _tokenId) external {
      require(_dragonContract._owns(msg.sender, _tokenId), "You do not own the token ID");

      Offer memory offer = tokenIdToOffer[_tokenId];

      delete tokenIdToOffer[_tokenId];
      offers[offer.index].active = false;

      emit MarketTransaction("Remove offer", msg.sender, _tokenId);
    }

    function buyDragon(uint256 _tokenId) external payable {
      Offer memory offer = tokenIdToOffer[_tokenId];
      require(msg.value == offer.price, "msg.value must be equal to the price of tokenId");
      require(tokenIdToOffer[_tokenId].active == true, "Token ID is not for sale");

      delete tokenIdToOffer[_tokenId];
      offers[offer.index].active = false;

      if(offer.price > 0) {
        offer.seller.transfer(offer.price);
      }

      _dragonContract.safeTransferFrom(offer.seller, msg.sender, _tokenId);

      emit MarketTransaction("Buy", msg.sender, _tokenId);
    }
}
