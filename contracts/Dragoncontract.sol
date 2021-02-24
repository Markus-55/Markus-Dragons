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
    uint256 femaleId,
    uint256 maleId,
    uint256 genes
  );

  struct Dragon {
    uint256 genes;
    uint64 birthTime;
    uint32 maleId;
    uint32 femaleId;
    uint16 generation;
  }

  Dragon[] private dragons;

  mapping(uint256 => address) private dragonOwners;
  mapping(address => uint256) private tokenBalances;

  uint256 public gen0Total;

  function getDragon(uint256 _tokenId) public view returns (
    uint256 femaleId,
    uint256 maleId,
    uint256 generation,
    uint256 birthTime,
    uint256 genes,
    address owner) {
      return (
        uint32(dragons[_tokenId].femaleId),
        uint32(dragons[_tokenId].maleId),
        uint16(dragons[_tokenId].generation),
        uint64(dragons[_tokenId].birthTime),
        dragons[_tokenId].genes,
        dragonOwners[_tokenId]
      );
    }

  function createDragonGen0(uint256 _genes) public onlyOwner returns (uint256) {
    require(gen0Total < gen0CreationLimit);

    gen0Total++;

    return _createDragon(0, 0, 0, _genes, msg.sender);
  }

  function _createDragon(
    uint256 _femaleId,
    uint256 _maleId,
    uint256 _generation,
    uint256 _genes,
    address _owner
  ) private returns (uint256) {
      Dragon memory _dragon = Dragon({
        genes: _genes,
        birthTime: uint64(now),
        femaleId: uint32(_femaleId),
        maleId: uint32(_maleId),
        generation: uint16(_generation)
      });

      uint256 newDragonId = dragons.push(_dragon) - 1;

      emit Birth(_owner, newDragonId, _femaleId, _maleId, _genes);

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

  function _transfer(address _from, address _to, uint256 _tokenId) internal {
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
