import Footer from './/Footer'
import Navbar from './/navbar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light dark" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
