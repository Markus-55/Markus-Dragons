pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./Safemath.sol";
import "./Ownable.sol";

contract Dragoncontract is IERC721, Ownable {

  using SafeMath for uint256;

  uint256 public constant gen0CreationLimit = 10;
  string private constant nameOfToken = "MarkusDragons";
  string private constant symbolOfToken = "MD";

  event Birth(
    address owner,
    uint256 dragonId,
    uint256 genes,
    uint256 dadId,
    uint256 momId
  );

  struct Dragon {
    uint256 genes;
    uint64 birthTime;
    uint32 dadId;
    uint32 momId;
    uint16 generation;
  }

  Dragon[] private dragons;

  mapping(uint256 => address) private dragonOwners;
  mapping(address => uint256) private tokenBalances;

  uint256 public gen0Total;

  function getDragon(uint256 _tokenId) external view returns (
    uint256 genes,
    uint256 birthTime,
    uint256 dadId,
    uint256 momId,
    uint256 generation,
    address owner) {
      require(_tokenId < dragons.length, "Token does not exist");
      return (
        dragons[_tokenId].genes,
        dragons[_tokenId].birthTime,
        dragons[_tokenId].dadId,
        dragons[_tokenId].momId,
        dragons[_tokenId].generation,
        dragonOwners[_tokenId]
      );
    }

  function createDragonGen0(uint256 _genes) external onlyOwner {
    require(gen0Total < gen0CreationLimit, "The limit of generation 0 dragons is: 10");

    gen0Total++;

    _createDragon(_genes, 0, 0, 0, msg.sender);
  }

  function _createDragon(
    uint256 _genes,
    uint256 _dadId,
    uint256 _momId,
    uint256 _generation,
    address _owner
  ) private returns (uint256) {
      Dragon memory _dragon = Dragon(_genes, uint64(now), uint32(_dadId), uint32(_momId), uint16(_generation));

      uint256 newDragonId = dragons.length;
      dragons.push(_dragon) - 1;

      emit Birth(_owner, newDragonId, _genes, _momId, _dadId);

      _transfer(address(0), _owner, newDragonId);

      return newDragonId;
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
    require(_tokenId < dragons.length, "Token does not exist");
    return dragonOwners[_tokenId];
  }

  function transfer(address _to, uint256 _tokenId) external {
    require(_to != address(0), "cannot transfer to the zero address");
    require(_to != address(this), "cannot transfer to the contract address");
    require(_owns(msg.sender, _tokenId), "token must be owned by sender");

    _transfer(msg.sender, _to, _tokenId);
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    tokenBalances[_to] = tokenBalances[_to].add(1);

    dragonOwners[_tokenId] = _to;

    if (_from != address(0)) {
      tokenBalances[_from] = tokenBalances[_from].sub(1);
    }

    emit Transfer(_from, _to, _tokenId);
  }

  function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
    return _claimant == dragonOwners[_tokenId];
  }
}
