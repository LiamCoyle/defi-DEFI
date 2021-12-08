pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol';

contract FDAI is ERC20,ERC20Detailed, ERC20Mintable  {
    constructor () ERC20Detailed('fDAI', 'fDAI' , 18 ) public {}

    function mint(address account, uint256 amount) public returns (bool) {
        return super.mint(account, amount);
    }
}