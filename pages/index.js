import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ColorFx Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="COLORFX STUDIO" />
        <p className="description">
            Site is in Maintnance Mode !
        </p>
      </main>

      <Footer />
    </div>
  )
}
