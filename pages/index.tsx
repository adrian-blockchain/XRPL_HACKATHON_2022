import type { NextPage } from 'next'

import Image from 'next/image'



const Home: NextPage = () => {
  return (
    <div>
      <div className="container mx-auto max-w-lg px-4 py-32 text-left md:max-w-none md:text-center">
        <h1 className="text-left text-5xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none md:text-center md:text-6xl lg:text-7xl">
          <span className="inline md:block">The best place to</span>{' '}
          <span className="relative mt-2 bg-gradient-to-br from-indigo-600 to-indigo-500 bg-clip-text text-transparent md:inline-block">
            Create, Buy, and Sell NFT's
          </span>
        </h1>
        <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
          Explore on the world's best and largest NTF Marketplace beautiful
          artworks from the best artists. We want to be apart of your joy,
          success, and future growth.
        </div>
        <div className="mt-12 flex flex-col items-center text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <a
              href="#_"
              className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-4 text-base font-bold leading-6 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 md:w-auto"
            >
              Connect Wallet
            </a>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Home
