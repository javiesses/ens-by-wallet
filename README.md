# Get ENS by address

Use this script to get the ENS name of a given list of addresses. It will generate a JSON file called `ens-by-wallet-{TIMESTAMP}.json` in the same path you're running it.

It uses Alchemy SDK, so make sure you have created a developer account there so you get the API key.

## Configure

1. Create an Alchemy account [here](https://www.alchemy.com/)
2. Once you're in the the Alchemy Dashboard, create an Alchemy app for Ethereum Mainnnet.
3. Copy the api key
4. Create a `.env` file with the api key. It should follow this format.
```
ALCHEMY_API_KEY={PASTE_YOUR_API_KEY}
```

## Run

1. Fill the array of addresses contained in the file `wallets.json`
2. `npm i`
3. `node get-ens-by-wallet.js`

## Extend

This script can retrieve any NFT owned by the given address, not just ENS names. You just have to replace the address of the NFT contract you want to check and that's all.
Check the code to see where is the constant you have to replace.
