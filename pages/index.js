import Head from 'next/head'
import Header from '../components/staticHeader'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      

        <footer className="flex items-center justify-center w-full h-24 border-t">
        </footer>
      </div>
    </div>
  )
}
