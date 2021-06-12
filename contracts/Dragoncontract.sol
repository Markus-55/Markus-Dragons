pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./IERC721Receiver.sol";
import "./Safemath.sol";
import "./Ownable.sol";

contract Dragoncontract is IERC721, Ownable {

  using SafeMath for uint256;

  uint256 public constant gen0CreationLimit = 20;
  uint256 public constant userCreationLimit = 20;

  string private constant nameOfToken = "MarkusDragons";
  string private constant symbolOfToken = "MD";

  bytes4 private constant ERC721VerificationNum = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));

  bytes4 private constant interfaceIdERC721 = 0x80ac58cd;
  bytes4 private constant interfaceIdERC165 = 0x01ffc9a7;

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

  mapping(uint256 => address) private dragonIndexToApproved;
  mapping(address => mapping(address => bool)) private operatorApproval;

  uint256 public gen0Total;
  uint256 public userCreationTotal;

  function breed(uint256 _dadId, uint256 _momId) external returns (uint256) {
    require(_owns(msg.sender, _dadId), "You do not own the dad dragon");
    require(_owns(msg.sender, _momId), "You do not own the mom dragon");

    uint256 newDna = _mixDna(dragons[_dadId].genes, dragons[_momId].genes);
    uint256 newDragonGen = _newGeneration(dragons[_dadId].generation, dragons[_momId].generation);

    _createDragon(newDna, _dadId, _momId, newDragonGen, msg.sender);
  }

  function supportsInterface(bytes4 _interfaceId) external pure returns (bool) {
    return (_interfaceId == interfaceIdERC721 || _interfaceId == interfaceIdERC165);
  }

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

  function createDragonGen0(uint256 _genes) external {
    require(gen0Total < gen0CreationLimit || userCreationTotal < userCreationLimit, "The limit of generation 0 dragons is: 20");

    if(gen0Total < gen0CreationLimit && msg.sender == owner) {
      gen0Total++;

      _createDragon(_genes, 0, 0, 0, msg.sender);
    }
    else {
      userCreationTotal++;

      _createDragon(_genes, 0, 0, userCreationTotal, msg.sender);
    }
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
    require(_to != address(0), "Cannot transfer to 0 address");
    require(_to != address(this), "Cannot transfer to contract address");
    require(_owns(msg.sender, _tokenId), "Token must be owned by sender");

    _transfer(msg.sender, _to, _tokenId);
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    tokenBalances[_to] = tokenBalances[_to].add(1);

    dragonOwners[_tokenId] = _to;

    if (_from != address(0)) {
      tokenBalances[_from] = tokenBalances[_from].sub(1);
      delete dragonIndexToApproved[_tokenId];
    }

    emit Transfer(_from, _to, _tokenId);
  }

  function approve(address _approved, uint256 _tokenId) external {
    require(_owns(msg.sender, _tokenId) || operatorApproval[dragonOwners[_tokenId]][msg.sender], "You are not the owner or the operator of this token ID");

    dragonIndexToApproved[_tokenId] = _approved;

    emit Approval(msg.sender, _approved, _tokenId);
  }

  function setApprovalForAll(address _operator, bool _approved) external {
    require(_operator != msg.sender, "You cannot set yourself as operator");

    operatorApproval[msg.sender][_operator] = _approved;

    emit ApprovalForAll(msg.sender, _operator, _approved);
  }

  function getApproved(uint256 _tokenId) external view returns (address) {
    require(_tokenId < dragons.length, "Token does not exist");

    return dragonIndexToApproved[_tokenId];
  }

  function isApprovedForAll(address _owner, address _operator) public view returns (bool) {
    return operatorApproval[_owner][_operator];
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory _data) public {
    require(_transferFromRequire(msg.sender, _from, _to, _tokenId));

    _safeTransfer(_from, _to, _tokenId, _data);
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId) external {
    safeTransferFrom(_from, _to, _tokenId, "");
  }

  function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) private {
    _transfer(_from, _to, _tokenId);

    require(_checkERC721Support(_from, _to, _tokenId, _data), "Contract does not support ERC721 tokens");
  }

  function transferFrom(address _from, address _to, uint256 _tokenId) external {
    require(_transferFromRequire(msg.sender, _from, _to, _tokenId));

    _transfer(_from, _to, _tokenId);
  }

  function _isApproved(address _claimant, uint256 _tokenId) private view returns (bool) {
    return _claimant == dragonIndexToApproved[_tokenId];
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

  function _transferFromRequire(address _spender, address _from, address _to, uint256 _tokenId) private view returns (bool) {
    require(_to != address(0), "Cannot transfer to 0 address");
    require(_tokenId < dragons.length, "Token does not exist");
    require(_owns(_from, _tokenId), "Token must be owned by the address from");

    return _spender == _from || _isApproved(_spender, _tokenId) || isApprovedForAll(_from, _spender);
  }

  function _mixDna(uint256 _dadDna, uint256 _momDna) public view returns (uint256) {
    uint256[8] memory geneArray;

    uint8 random = uint8(now % 256);
    uint256 randomIndex = uint256(now % 8);
    uint8 randomEyes = uint8((now % 7) + 1);
    uint8 HornOrAnimation = uint8((now % 5) + 1);
    uint8 randomColor = uint8((now % 82) + 10);

    uint256 i = 1;
    uint256 index = 7;

    for(i = 1; i <= 128; i=i*2) {
      if(random & i != 0) {
        if(randomIndex == 4 && index == 4) {
          geneArray[randomIndex] += randomEyes;
          geneArray[randomIndex] *= 10;
          geneArray[randomIndex] += HornOrAnimation;
        }
        else if(randomIndex == 7 && index == 7) {
          geneArray[randomIndex] += HornOrAnimation;
          geneArray[randomIndex] *= 10;
          geneArray[randomIndex] += 1;
        }
        else if(randomIndex == index) {
          geneArray[randomIndex] = randomColor;
        }
        else {
          geneArray[index] = uint8(_momDna % 100);
        }
      }
      else {
        if(randomIndex == 4 && index == 4) {
          geneArray[randomIndex] += randomEyes;
          geneArray[randomIndex] *= 10;
          geneArray[randomIndex] += HornOrAnimation;
        }
        else if(randomIndex == 7 && index == 7) {
          geneArray[randomIndex] += HornOrAnimation;
          geneArray[randomIndex] *= 10;
          geneArray[randomIndex] += 1;
        }
        else if(randomIndex == index) {
          geneArray[randomIndex] = randomColor;
        }
        else {
          geneArray[index] = uint8(_dadDna % 100);
        }
      }
      _momDna = _momDna / 100;
      _dadDna = _dadDna / 100;

      index = index - 1;
    }

    uint256 newGene;

    for(i = 0; i < 8; i++) {
      newGene = newGene + geneArray[i];
      if(i != 7) {
        newGene = newGene * 100;
      }
    }
    return newGene;
  }

  function _newGeneration(uint256 _dadGen, uint256 _momGen) private pure returns (uint256) {
    return (_dadGen >= _momGen ? _dadGen + 1 : _momGen + 1);
  }

  function _owns(address _claimant, uint256 _tokenId) private view returns (bool) {
    return _claimant == dragonOwners[_tokenId];
  }
}
