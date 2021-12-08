const Factory = artifacts.require("LCswapV2Factory.sol");
const FUSDT = artifacts.require("FUSDT.sol");
const FUSDC = artifacts.require("FUSDC.sol");
const FDAI = artifacts.require("FDAI.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  let fusdt, fusdc, weth, fdai;
  if (network === "mainnet") {
    fusdt = "";
    fusdc = "";
    weth = "";
    fdai = "";
  } else {
    await deployer.deploy(FUSDT);
    await deployer.deploy(FUSDC);
    await deployer.deploy(FDAI);
    await deployer.deploy(WETH);
    const fusdt = await FUSDT.deployed();
    const fusdc = await FUSDC.deployed();
    const fdai = await FDAI.deployed();
    const weth = await WETH.deployed();
    fusdtAddress = fusdt.address;
    fusdcAddress = fusdc.address;
    fdaiAddress = fdai.address;
    wethAddress = weth.address;
  }

  await factory.createPair(fusdtAddress, wethAddress);
  await factory.createPair(fusdcAddress, wethAddress);
  await factory.createPair(fdaiAddress, wethAddress);
};
