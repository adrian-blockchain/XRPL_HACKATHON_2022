import Image from 'next/image'
import Link from 'next/link'
import GetAccount from './web3'

const galerie = require('../public/galerie.png')

export default function Navbar() {
  return (
    <div className="container relative mx-auto flex h-24 flex-wrap items-center justify-between overflow-hidden border-b border-gray-200 font-medium sm:px-4 md:overflow-visible md:px-2 lg:justify-center">
      <div className="flex h-full w-1/4 items-center justify-start pr-4">
        <a href="#_" className="inline-block py-4 md:py-0">
          <Image src={galerie} />
        </a>
      </div>

      <div className="top-0 left-0 hidden h-full w-full items-start bg-gray-900 bg-opacity-50 p-4 text-sm md:absolute md:relative md:flex md:w-3/4 md:items-center md:bg-transparent md:p-0 lg:text-base">
        <div className="h-auto w-full flex-col overflow-hidden rounded-lg bg-white md:relative md:flex md:flex-row md:overflow-visible md:rounded-none md:bg-transparent">
          <a
            href="#_"
            className="block inline-flex h-16 w-auto items-center px-6 text-xl font-black leading-none text-gray-900 md:hidden"
          >
            tails<span className="text-indigo-600">.</span>
          </a>

          <div className="flex w-full flex-col items-start justify-center space-x-6 text-center md:mt-0 md:w-2/3 md:flex-row md:items-center lg:space-x-8">
            <Link href="/">
              <a className="mx-0 ml-6 inline-block w-full py-2 text-left font-medium text-indigo-600 md:mx-2 md:ml-0 md:w-auto md:px-0 md:text-center lg:mx-3">
                Home
              </a>
            </Link>
            <Link href="/Marketplace">
              <a className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3">
                Marketplace
              </a>
            </Link>
            <Link href="/mineNFT">
              <a className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3">
                My Collection
              </a>
            </Link>
            <Link href="/Mint">
              <a className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3">
                Minter
              </a>
            </Link>
          </div>

          <GetAccount />
        </div>
      </div>

      <div className="absolute right-0 flex h-10 w-10 cursor-pointer flex-col items-end items-center justify-center rounded-full bg-white hover:bg-gray-100 md:hidden">
        <svg
          className="h-6 w-6 text-gray-700"
          x-show="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          x-cloak=""
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg
          className="h-6 w-6 text-gray-700"
          x-show="showMenu"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          x-cloak=""
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>
  )
}
