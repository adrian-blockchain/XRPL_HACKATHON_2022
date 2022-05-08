import {ethers} from "ethers";
import {useState} from "react";

// @ts-ignore
import {nftMarketplace} from "../../Galerie-template-main 2/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

declare let window: any;

const contractAdress = "0xB06f4db16E72b7aA0C47235b3782cCc5fC2f6Db6"


export default function GetAccount (){
    const [address, setAdrress] = useState<string>()

    function connect(){
        if (!window.ethereum){
            alert("No Metamask detected")
        }else {
            const provider = new ethers.providers.Web3Provider(window.ethereum)


            window.ethereum.enable().then(()=>{
                const signer = provider.getSigner()
                signer.getAddress().then((result)=>{setAdrress(result)})
            })
        }
    }
    return (
        <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
            <h1>{address}</h1>
            
            <button onClick={connect} className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">Connect</button>
        </div>
    )
}

export const Mint = async () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(
        contractAdress,
        nftMarketplace,
        signer
    )

    const mint = await contract.safeMint("À vous de trouver ce qu'il faut mettre : )")
}



