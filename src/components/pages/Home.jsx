import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardSection from '../organism/CardSection.jsx';
import Hero from '../molecules/Hero.jsx';
import Newsletter from '../molecules/Newsletter.jsx';
import Navbar from '../organism/Navbar.jsx';
import Footer from '../organism/Footer.jsx';


function Home () {

  return (
    <>
    <main className='bg-baseBackground h-screen '>
      <div>
        <Navbar />
      </div>
      <div className='py-25 px-30'>
        <div className='flex justify-center'>
          <Hero />
        </div>
        <div className='flex justify-center'>
          <CardSection />
        </div>
        <div className='flex justify-center'>
          <Newsletter />
        </div>
      </div>
      <div className='flex justify-center'>
        <Footer />
      </div>
    </main>
    </>
  )
}

export default Home