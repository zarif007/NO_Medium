import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
    return (
      <div className='p-5 max-w-7xl mx-auto'>
        <Head>
          <title>No Medium</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />

        <div className='text-white flex justify-between items-center'>
          <div className='px-10 space-y-5'>
            <h1 className='text-6xl max-w-xl font-serif'><span>No Medium </span>
            Its a place where i write my own blogs</h1>
            <h2>
              Its my own place, read, comment go things and leave
            </h2>
          </div>
          <img
            className='hidden md:inline-flex h-32 md:h-full' 
            src="https://media.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif" alt="img" />
        </div>
      </div>
    )
}

export default Home

// export const getServerSideProps = async () => {
//     const query = 
// }
