// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.6;

interface IERC721Receiver {
  function onERC721Received(address _operator, address _from, uint _tokenId, bytes calldata _data) external returns (bytes4);
}
