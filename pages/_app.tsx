import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './navbar'
import GetAccount from './web3'

function MyApp({ Component, pageProps }: AppProps) {
  return (

  <div>
    <Navbar/>
    <div/>
    <Component {...pageProps} />
  </div>


)
}


export default MyApp
