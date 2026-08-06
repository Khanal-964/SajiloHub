// ============================================
// Homepage — Landing page for SajiloHub
// Assembles Navbar, Hero, About, Footer, and SakuraPetals
// ============================================

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import SakuraPetals from '../components/SakuraPetals';

const Homepage = () => {
  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
