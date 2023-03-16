const { Alchemy, Network } = require('alchemy-sdk')
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config()

const ENS_CONTRACT_ADDRESS = '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85';

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const main = async () => {
  const alchemy = new Alchemy(config);

  const wallets = require('./wallets.json')
  const walletsSet = new Set(wallets);

  const uniqueWallets = [...walletsSet];
  const users = [];

  for (let i = 0; i < uniqueWallets.length; i++) {
    const address = uniqueWallets[i];
    const nfts = await alchemy.nft.getNftsForOwner(address, {
      contractAddresses: [ENS_CONTRACT_ADDRESS],
    });

    console.log(`${i}: address: ${address} - nfts: ${nfts.ownedNfts.length}`)

    if (nfts.ownedNfts.length) {
      const ensNamesArray = nfts.ownedNfts.map((nft) => nft.title);
      const ensNames = ensNamesArray.join(', ');
      
      users.push({ address, ensNames })
    }
  }

  fs.writeFileSync(`./ens-by-wallet-${Date.now()}.json`, JSON.stringify(users, null, 2));
}

main().then(() => console.log('DONE!'))