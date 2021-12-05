pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';

contract FUSDC is ERC20Detailed, ERC20 {
    constructor () ERC20Detailed('fUSDC', 'fUSDC' , 18 ) public {}
}