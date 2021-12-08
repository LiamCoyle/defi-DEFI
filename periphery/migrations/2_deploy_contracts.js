const Router = artifacts.require("LCswapV2Router02.sol");
const WETH = artifacts.require("WETH");
const FUSDT = artifacts.require("FUSDT");
const FUSDC = artifacts.require("FUSDC");
const FDAI = artifacts.require("FDAI");

var web3 = require("web3");
const MAX_INT = 2 ** 256 - 1;

module.exports = async function (deployer, network, addresses) {
  let router, weth, fusdt, fusdc, fdai;
  const FACTORY_ADDRESS = "0x82accA55BE6331ee1a5C910FEEcBF3F780890Ba7"; // a mettre a jour a chaque deploy du core

  if (network === "mainnet") {
    weth = await WETH.at("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
  } else {
    weth = await WETH.at("0x73b6067D5D80234E1E773E5e234F30716039c508"); // a mettre a jour a chaque deploy du core
    fusdt = await FUSDT.at("0xE0ADc0c5436a34342d77A3E897E6022602dba119"); // a mettre a jour a chaque deploy du core
    fusdc = await FUSDC.at("0x1fD4672a08aD5692a141fa6d7672811817D81064"); // a mettre a jour a chaque deploy du core
    fdai = await FDAI.at("0x3177A3eEfd9CA2e2614BbfFAdA0df9e3d7C9073A"); // a mettre a jour a chaque deploy du core
    /*
    await deployer.deploy(WETH);
    weth = await WETH.deployed();*/
  }

  router = await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);

  await fusdt.mint(addresses[0], web3.utils.toWei("1000", "ether"));
  await fusdt.approve(router.address, "1000000");
  await router.addLiquidityETH(
    fusdt.address,
    web3.utils.toWei("0.1", "ether"),
    0,
    0,
    addresses[0],
    MAX_INT
  ); //bug
};
