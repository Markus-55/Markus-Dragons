// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/utils/escrow/Escrow.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./DragonMarketplace.sol";

contract PaymentGateway is Ownable {
  Escrow private _escrowContract;
  DragonMarketplace private _dragonMarketplace;

  constructor(address dragonMarketplaceAddress) {
    _escrowContract = new Escrow();
    setMarketplaceContract(dragonMarketplaceAddress);
  }

  function setMarketplaceContract(address _dragonMarketplaceAddress) public onlyOwner {
    _dragonMarketplace = DragonMarketplace(_dragonMarketplaceAddress);
  }

  function sendPayment(address payable _payee, uint256 _tokenId) external payable {
    _dragonMarketplace.buyDragon(_tokenId, msg.value);
    _escrowContract.deposit{value: msg.value}(_payee);
  }

  function withdraw(address payable _payee) external {
    _escrowContract.withdraw(_payee);
  }

  function balance(address _payee) external view returns (uint256 balanceOf) {
    return _escrowContract.depositsOf(_payee);
  }
}
