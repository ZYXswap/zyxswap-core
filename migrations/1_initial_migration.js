const ZyxFactory = artifacts.require("ZyxswapFactory");

module.exports = async function (deployer) {
  await deployer.deploy(ZyxFactory,"0x7f57388a12d4ED6B5f9Ed39bA200BE465FC3010A");
  const factory = await ZyxFactory.deployed();
};
