import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardSection from '../organism/CardSection.jsx';
import Hero from '../molecules/Hero.jsx';
import Newsletter from '../molecules/Newsletter.jsx';
import Navbar from '../organism/Navbar.jsx';
import Footer from '../organism/Footer.jsx';


function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-baseBackground">
      <Navbar isLoggedIn={true}/>
      
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 lg:px-20">
          <section className="mb-16">
            <Hero />
          </section>
          
          <section className="mb-16">
            <CardSection />
          </section>
          
          <section className="mb-16">
            <Newsletter />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;