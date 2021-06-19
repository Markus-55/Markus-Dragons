pragma solidity ^0.5.12;

contract Ownable {

  address internal owner;

  modifier onlyOwner() {
    require(owner == msg.sender, "You are not the owner of this contract");
    _;
  }

  constructor() public{
    owner = msg.sender;
  }
}
