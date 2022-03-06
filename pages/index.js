import Head from 'next/head'
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'

import Image from 'next/image';
import GrandpaPic from '../public/img/grandpa.jpeg'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Duane Johnson turns 90!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <header>
        <Header />
      </header>


      <main >
        <div className='w-full h- flex flex-col sm:flex-row p-2'>
        <Card 
          details={{
            img: <div className=" w-full mx-12 "><Image src={GrandpaPic} alt="Grandpa Pic"
            width="200"
            height="300" /></div>
          }}
          />
        <Card 
          details={{
            title: "Bio",
            body: "Look at all the text I can put here wow there are so many possibilities for things amazing"
          }}
          />
          </div>

  <div className='w-full flex flex-col sm:flex-row p-2'>
          <div className='w-full sm:w-1/2 p-3 pt-28'>
            <h3 className='text-center text-2xl'>Duane&#39;s 90th Birthday Party</h3>
            <p className='text-center text-lg'>When: March 26th, 2022</p>
            <p className='text-center text-lg'>Where: Diana and Dana&#39;s 714 E Pole Rd</p>
          </div>

          <div className='w-full sm:w-1/2 p-3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1422774287917!2d-122.45553464955289!3d48.89362560607875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485b0a6f6b98f27%3A0xa421e08b12c4f865!2s714%20E%20Pole%20Rd%2C%20Lynden%2C%20WA%2098264!5e0!3m2!1sen!2sus!4v1646516437236!5m2!1sen!2sus" className="w-full h-80  " allowFullScreen="" loading="lazy"></iframe></div>
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
