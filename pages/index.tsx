import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Navbar from './navbar';
import GetAccount from "./web3";

const galerie = require("../public/galerie.png");



const Home: NextPage = () => {


  return (
      <div>
      <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
            <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">The best place to</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">Create, Buy, and Sell NFT's</span></h1>
            <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Explore on the world's best and largest NTF Marketplace beautiful artworks from the best artists. We want to be apart of your joy, success, and future growth.</div>
            <div className="flex flex-col items-center mt-12 text-center">
                <span className="relative inline-flex w-full md:w-auto">
                    <a href="#_" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Connect Wallet
                    </a>
                </span>
            </div>
      </div>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a className="flex items-center justify-center gap-2" href="" target="_blank">
          Powered by Blockchain Lab{' '}
          <Image src="/logo_BCLAB.png" alt="Vercel Logo" width={72} height={72} />
        </a>
      </footer>
    </div>

  )
}

export default Home
