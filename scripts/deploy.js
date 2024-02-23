const hre = require("hardhat");

async function main() {
  
  const lock = await hre.ethers.deployContract("VisitorRecord");

  const vr = await lock.waitForDeployment();
  let address = await vr.getAddress();

  console.log(`Deployed address: ${address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
