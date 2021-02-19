pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./Safemath.sol";

contract Dragoncontract is IERC721 {

  using SafeMath for uint256;

  string private nameOfToken = "MarkusDragons";
  string private symbolOfToken = "MD";

  Dragon[] private dragons;

  mapping(uint256 => address) private dragonOwners;
  mapping(address => uint256) private tokenBalances;

  struct Dragon {
    uint256 genes;
    uint64 birthTime;
    uint32 maleId;
    uint32 femaleId;
    uint16 generation;
  }

  function name() external view returns (string memory tokenName) {
    return nameOfToken;
  }

  function symbol() external view returns (string memory tokenSymbol) {
    return symbolOfToken;
  }

  function balanceOf(address _owner) external view returns (uint256 balance) {
    return tokenBalances[_owner];
  }

  function totalSupply() external view returns (uint256 total) {
    return dragons.length;
  }

  function ownerOf(uint256 _tokenId) external view returns (address owner) {
    require(_tokenId < dragons.length, "token does not exist");
    return dragonOwners[_tokenId];
  }

  function transfer(address _to, uint256 _tokenId) external {
    require(_to != address(0), "cannot transfer to the zero address");
    require(_to != address(this), "cannot transfer to the contract address");
    require(_owns(msg.sender, _tokenId), "token must be owned by user");

    _transfer(msg.sender, _to, _tokenId);
  }

  function _transfer(address _from, address _to, uint256 _tokenId) internal {
    tokenBalances[_to].add(1);

    dragonOwners[_tokenId] = _to;

    if (_from != address(0)) {
      tokenBalances[_from].sub(1);
    }

    emit Transfer(_from, _to, _tokenId);
  }

  function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
    return _claimant == dragonOwners[_tokenId];
  }
}
