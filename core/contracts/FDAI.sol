pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';

contract FDAI is ERC20Detailed, ERC20 {
    constructor () ERC20Detailed('fDAI', 'fDAI' , 18 ) public {}
}