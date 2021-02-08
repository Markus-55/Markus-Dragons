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

  // Make a dragons array with the Dragon struct
  Dragon[] private dragons;

  // Make mapping of the dragonOwners with a uint256 that points to an address
  mapping(uint256 => address) private dragonOwners;
  // Make mapping of the tokenBalances with an address that points to a uint256
  mapping(address => uint256) private tokenBalances;

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
  function totalSupply() public view returns (uint256) {
    // returns the token total supply
    return dragons.length;
  }

  // Make a function to get owner off the token id
  function ownerOf(uint256 _tokenId) external view returns (address) {
    // returns the dragon owners with a token id
    return dragonOwners[_tokenId];
  }

  // Make a function to tranfer to the address with the token id
  function transfer(address _to, uint256 _tokenId) external {
    // Require so that recipient cannot transfer to the zero address
    require(_to != address(0), "cannot transfer to the zero address");
    // Require so that recipient cannot transfer to the contract address
    require(_to != address(this), "cannot transfer to the contract address");
    // Require that the user owns the token
    require(_owns(msg.sender, _tokenId), "token must be owned by user");

    // call function tranfer with from, to and token id as arguments
    _transfer(msg.sender, _to, _tokenId);
  }

  // Make a function to tranfer from the address to the address with the token id
  function _transfer(address _from, address _to, uint256 _tokenId) internal {
    // increase the token balance of the recipient
    tokenBalances[_to]++;

    // the dragon owner of the token is = to the recipient
    dragonOwners[_tokenId] = _to;

    // if the sender is != to the zero address
    if (_from != address(0)) {
      // decrease the token balance of the sender
      tokenBalances[_from]--;
    }

    // emits when a token has been stranfered from sender to recipient with a token id
    emit Transfer(_from, _to, _tokenId);
    // emits when the owner enables the approved address to manage the token id
    emit Approval(_from, _to, _tokenId);
  }

  // Make a function that checks if the token is the owners token
  function _owns(address _owner, uint256 _tokenId) internal view returns (bool) {
    // returns owner is the tokenId dragon owner
    return _owner == dragonOwners[_tokenId];
  }
}
