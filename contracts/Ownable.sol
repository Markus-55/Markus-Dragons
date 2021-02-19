pragma solidity ^0.5.12;

contract Ownable {

  address internal owner;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  constructor() public{
    owner = msg.sender;
  }

}
