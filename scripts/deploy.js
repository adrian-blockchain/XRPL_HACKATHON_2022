// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')

async function main() {
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const NFT = await hre.ethers.getContractFactory('NFTCollection')
  const collection = await NFT.deploy()
  await collection.deployed()
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace')
  const galerie = await NFTMarketplace.deploy(collection.address)

  await galerie.deployed()

  console.log('Greeter deployed to:', galerie.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
