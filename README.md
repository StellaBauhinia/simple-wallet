
# Simple Wallet for MultiSig Wallet Contract

First of all, thank for the original author of [SimpleWallet](https://github.com/mtsalenc/simple-wallet) which provides me a good foundation to work on. (I am totally new in AngularJS!) This is a serverless dapp wallet built for anyone who wants to manage his/her ethers on Ethereum with the other party.
It allows **the owners of the MultiSig Wallet contract** to withdraw and deposit ethers from it.
See [Screenshots](#screenshots) section below to quickly understand what this app does.

## Deploy Locally
### Prerequisites

- [git](https://git-scm.com/-) - the open source distributed vcs.
- [nodejs 5.0+](https://github.com/nodejs/node) - Node.js JavaScript runtime.
- [npm](https://github.com/npm/npm) - A package manager for javascript.
- Knowledge about how to deploy a contract to Ethreum (e.g. [Remix](http://remix.ethereum.org/) + [Metamask](https://metamask.io/), a nice tutorial is presented [here](https://medium.com/swlh/deploy-smart-contracts-on-ropsten-testnet-through-ethereum-remix-233cd1494b4b))

### Steps

These instructions assume you already got a deployed MultiSig Wallet contract (the .sol file in [contracts/](#contracts)) address and other info.

1. `git clone https://github.com/StellaBauhinia/simple-wallet.git`
2. `cd simple-wallet/app`
3. `npm install`
4. Replace the contract abi, unlinked_binary and address variables inside app/js/contracts-setup.js (note that network "1" represents the mainnet, "4" represents the Rinkeby testnet)
5. Open index.html on any [modern](https://browsehappy.com/) browser.


## License
This project is licensed under the MIT License
