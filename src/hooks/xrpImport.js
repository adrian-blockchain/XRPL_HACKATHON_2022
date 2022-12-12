const xrpl = require("xrpl")


// Wrap code in an async function so we can use await
async function main() {

    // Define the network client
    const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")
    await client.connect()

    // ... custom code goes here

    // Disconnect when done (If you omit this, Node.js won't end the process)
    client.disconnect()
}

main()


async function connectClient(){
    const PUBLIC_SERVER = "wss://xrplcluster.com/"
    const client = new xrpl.Client(PUBLIC_SERVER)
    await client.connect()
}


// Create a wallet and fund it with the Testnet faucet:
async function createWallet() {

    const fund_result = await client.fundWallet()
    const test_wallet = fund_result.wallet
    console.log(fund_result)

}

async function createJOB(){

}
