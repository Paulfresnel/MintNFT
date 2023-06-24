async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  const nft = await MyToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
 
  // mint one to yourself!
  const signer0 = await new ethers.Wallet(process.env.PRIVATE_KEY);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmQpjpzuVtViTeDGSnaZaDaZt8aVYcoBwxqyPH9SP6MuYk");

  console.log("NFT Minted!"); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });