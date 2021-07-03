// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/utils/escrow/Escrow.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PaymentGateway is Ownable {
  Escrow private escrow;
  address payable wallet;

  constructor(address payable _wallet) {
    escrow = new Escrow();
    wallet = _wallet;
  }

  function sendPayment(address payable _payee, uint256 _price) external payable {
    escrow.deposit{value: _price}(_payee);
  }

  function withdraw(address payable _payee) external onlyOwner {
    escrow.withdraw(_payee);
  }

  function balance(address _payee) external view returns (uint256 balanceOf) {
    return escrow.depositsOf(_payee);
  }
}
