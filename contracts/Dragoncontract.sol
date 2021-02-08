pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./Safemath.sol";

contract Dragoncontract is IERC721 {

  using SafeMath for uint256;

  // Make an event that emits when a token has been stranfered from sender to recipient with a tokenId
  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
  // Make an event that emits when the owner enables the approved address to manage the token id
  event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

  // Make a string tokenName = MarkusDragons
  string private tokenName = "MarkusDragons";
  // Make a string tokenSymbol = MD
  string private tokenSymbol = "MD";

  // Make a uint256 tokenTotalSupply
  uint256 private tokenTotalSupply;

  // Make mapping of the dragonOwners with a uint256 that points to an address
  mapping(uint256 => address) private dragonOwners;
  // Make mapping of the tokenBalances with an address that points to a uint256
  mapping(address => uint256) private tokenBalances;

  // Make a dragons array with the Dragon struct
  Dragon[] private dragons;

  struct Dragon {
    // The unique gene features of the dragon
    uint256 genes;
    // The timestamp of when the dragon has been created
    uint64 birthTime;
    // The id of the male
    uint32 maleId;
    // The id of the female
    uint32 femaleId;
    // The generation number of the dragon
    uint16 generation;
  }

  // Make a function to get the name
  function name() external view returns (string memory) {
    // returns the token name
    return tokenName;
  }

  // Make a function to get the symbol
  function symbol() external view returns (string memory) {
    // returns the token symbol
    return tokenSymbol;
  }

  // Make a function to get the balance of owner
  function balanceOf(address _owner) external view returns (uint256) {
    // returns the token balances with the owners address
    return tokenBalances[_owner];
  }

  // Make a function to get the total supply
  function totalSupply() external view returns (uint256) {
    // returns the token total supply
    return tokenTotalSupply;
  }

  // Make a function to get owner off the token id
  function ownerOf(uint256 _tokenId) external view returns (address) {
    // returns the dragon owners with a token id
    return dragonOwners[_tokenId];
  }

  // Make a function to tranfer to the address with the token id
  function transfer(address _to, uint256 _tokenId) external {
    // Require so that reciepient cannot transfer to the zero address
    require(_to != dragonOwners[0], "cannot transfer to the zero address");
    // Require so that reciepient cannot transfer to the contract address
    require(_to != address(this), "cannot transfer to the contract address");
    // Require so that token id must be owned by user
    require(_tokenId == tokenBalances[msg.sender], "token must be owned by user");

    // users token balance = users token balance subtracted by the token id
    tokenBalances[msg.sender] = tokenBalances[msg.sender].sub(_tokenId);
    // recipients token balance = recipients token balance + the token id
    tokenBalances[_to] = tokenBalances[_to].add(_tokenId);

    // emits when a token has been stranfered from sender to recipient with a token id
    emit Transfer(msg.sender, _to, _tokenId);
    // emits when the owner enables the approved address to manage the token id
    emit Approval(msg.sender, _to, _tokenId);
  }
}
