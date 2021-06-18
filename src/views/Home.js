import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactJumbo from '../components/ContactJumbo';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection';
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactJumbo />
      <Footer />

    </>
  );
}


export default Home;