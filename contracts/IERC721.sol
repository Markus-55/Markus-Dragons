pragma solidity ^0.5.0;
/**
 * @dev Required interface of an ERC721 compliant contract.
 */
interface IERC721 {
    /**
     * @dev Emitted when `tokenId` token is transfered from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.
     */
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
     /* Used */
    function balanceOf(address _owner) external view returns (uint256 balance);

    /*
     * @dev Returns the total number of tokens in circulation.
     */
     /* Used */
    function totalSupply() external view returns (uint256 total);

    /*
     * @dev Returns the name of the token.
     */
     /* Used */
    function name() external view returns (string memory tokenName);

    /*
     * @dev Returns the symbol of the token.
     */
     /* Used */
    function symbol() external view returns (string memory tokenSymbol);

    /**
     * @dev Returns the owner of the `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function ownerOf(uint256 _tokenId) external view returns (address owner);

     /* @dev Transfers `tokenId` token from `msg.sender` to `recipient`.
     *
     *
     * Requirements:
     *
     * - `recipient` cannot be the zero address.
     * - `recipient` can not be the contract address.
     * - `tokenId` token must be owned by `msg.sender`.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address _to, uint256 _tokenId) external;
}
