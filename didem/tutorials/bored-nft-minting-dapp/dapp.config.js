
const FORTMATIC_KEY = process.env.NEXT_PUBLIC_FORTMATIC_KEY;
const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;

const config ={
    title:'BoredApe Dapp',
    description:'A showcase dapp which is buitl for you to create your own dapp',
    contractAddress: '0xD05A7d0d77ACe177E909a94225805e1c6ccAD3a8',
    maxMinAmount:10,
    presaleMaxMinAmount: 3,
    price:0.01
}

const onboardOPtions ={
    dappId: process.env.NEXT_PUBLIC_DAPP_ID,
    networkId: 4,
    darkMode: true,
    walletSelect:{
       
        wallets:[
            { walletName: "metamask", preferred: true },
            { walletName: "coinbase", preferred: true },
            {
                walletName: 'walletLink',
                preferred: true,
                rpcUrl: RPC_URL,
                appName:'BoredApe Dapp',
            },
            {
                walletName: "fortmatic",
                apiKey: FORTMATIC_KEY,
                preferred: true
            },
            { walletName: "trust", preferred: true, rpcUrl: RPC_URL },
            {
                walletName: 'gnosis',
                preferred: true
            },
            { walletName: "authereum" },
            
            {
                walletName: 'ledger',
                rpcUrl: RPC_URL
            },
            {
                walletName: 'lattice',
                rpcUrl: RPC_URL,
                appName: "BoredApe Dapp"
            },
            {
                walletName: 'keepkey',
                rpcUrl: RPC_URL
            }
        ]
    },
    walletCheck:[
        { checkName: 'derivationPath' },
        { checkName: 'accounts' },
        { checkName: 'connect' },
        { checkName: 'network' },
    ]
}

export{config, onboardOPtions}