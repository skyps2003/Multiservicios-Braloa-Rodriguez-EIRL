import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Brochure from '../components/sections/Brochure';

const Landing = () => {
  return (
    <>
      <Hero />
      <About short={true} />
      <Services limit={3} />
      <Projects limit={2} />
      <Brochure />
    </>
  );
};

export default Landing;
