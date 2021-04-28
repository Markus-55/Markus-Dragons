pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./IERC721Receiver.sol";
import "./Safemath.sol";
import "./Ownable.sol";

contract Dragoncontract is IERC721, Ownable {

  using SafeMath for uint256;

  uint256 public constant gen0CreationLimit = 10;
  string private constant nameOfToken = "MarkusDragons";
  string private constant symbolOfToken = "MD";

  bytes4 private constant ERC721VerificationNum = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));

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

  mapping(uint256 => address) private approvedByDragonIndex;
  mapping(address => mapping(address => bool)) private operatorApproval;

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

    function allOwnedDragons() external view returns(uint256[] memory) {
        uint256[] memory ownedDragons = new uint256[](tokenBalances[msg.sender]);
        for(uint256 i = 0; i < dragons.length; i++) {
          if(dragonOwners[i] == msg.sender) {
            ownedDragons[i] = i;
          }
        }
        return ownedDragons;
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
    require(_owns(msg.sender, _tokenId), "Token must be owned by sender");

    _transfer(msg.sender, _to, _tokenId);
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    tokenBalances[_to] = tokenBalances[_to].add(1);

    dragonOwners[_tokenId] = _to;

    if (_from != address(0)) {
      tokenBalances[_from] = tokenBalances[_from].sub(1);
      delete approvedByDragonIndex[_tokenId];
    }

    emit Transfer(_from, _to, _tokenId);
  }

  function approve(address _approved, uint256 _tokenId) external {
    require(_approved != address(0), "The approved cannot be the 0 address");
    require(_tokenId < dragons.length, "Token does not exist");
    require(_owns(msg.sender, _tokenId), "You are not the owner of this token ID");

    _approve(_approved, _tokenId);
  }

  function _approve(address _approved, uint256 _tokenId) private {

    approvedByDragonIndex[_tokenId] = _approved;

    emit Approval(msg.sender, _approved, _tokenId);
  }

  function setApprovalForAll(address _operator, bool _approved) external onlyOwner {
    require(_operator != msg.sender, "You cannot set yourself as operator");
    require(_operator != address(0), "Operator cannot be the 0 address");
    require(_operator != address(this), "Operator cannot be the contract address");

    _setApprovalForAll(_operator, _approved);
  }

  function _setApprovalForAll(address _operator, bool _approved) private {
    operatorApproval[msg.sender][_operator] = _approved;

    emit ApprovalForAll(msg.sender, _operator, _approved);
  }

  function getApproved(uint256 _tokenId) external view returns (address) {
    require(_tokenId < dragons.length, "Token does not exist");

    return approvedByDragonIndex[_tokenId];
  }

  function isApprovedForAll(address _owner, address _operator) external view returns (bool) {
    return operatorApproval[_owner][_operator];
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes calldata _data) external {
    _safeTransferRequire(_from, _to, _tokenId);

    _safeTransfer(_from, _to, _tokenId, _data);
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId) external {
    _safeTransferRequire(_from, _to, _tokenId);

    _safeTransfer(_from, _to, _tokenId, "");
  }

  function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) private {
    _transfer(_from, _to, _tokenId);
    require(_checkERC721Support(_from, _to, _tokenId, _data), "Contract does not support ERC721 tokens");
  }

  function transferFrom(address _from, address _to, uint256 _tokenId) external {
    require(_to != address(0), "Cannot transfer to zero address");
    require(_tokenId < dragons.length, "Token does not exist");
    require(msg.sender == _from || _isApproved(msg.sender, _tokenId) || _isApprovedForAll(_from, msg.sender), "The owner must be the address from, approved or an operator of the owner");
    require(_owns(_from, _tokenId), "Token must be owned by address from");

    _transfer(_from, _to, _tokenId);
  }

  function _isApproved(address _claimant, uint256 _tokenId) private view returns (bool) {
    return _claimant == approvedByDragonIndex[_tokenId];
  }

  function _isApprovedForAll(address _owner, address _operator) private view returns (bool) {
    return operatorApproval[_owner][_operator];
  }

  function _checkERC721Support(address _from, address _to, uint256 _tokenId, bytes memory _data) private returns (bool) {
    if(!_isContract(_to)) {
      return true;
    }
    else {
      bytes4 returnData = IERC721Receiver(_to).onERC721Received(msg.sender, _from, _tokenId, _data);
      return returnData == ERC721VerificationNum;
    }
  }

  function _isContract(address _to) private view returns (bool) {
    uint32 size;
    assembly{
      size := extcodesize(_to)
    }
    return size > 0;
  }

  function _safeTransferRequire(address _from, address _to, uint256 _tokenId) private view {
    require(_to != address(0), "Cannot transfer to 0 address");
    require(_tokenId < dragons.length, "Token does not exist");
    require(msg.sender == _from || _isApproved(msg.sender, _tokenId) || _isApprovedForAll(_from, msg.sender), "The owner must be the address from, approved or an operator of the owner");
    require(_owns(_from, _tokenId), "Token must be owned by the address from");
  }

  function _owns(address _claimant, uint256 _tokenId) private view returns (bool) {
    return _claimant == dragonOwners[_tokenId];
  }
}
