
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import LogoSlider from '../components/LogoSlider';
import StrategySection from '../components/StrategySection';
import Services from '../components/Services';
import ServicesPreview from '../components/ServicesPreview';
import ComparisonToggle from '../components/ComparisonToggle';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <LogoSlider />
      <StrategySection />
      <ComparisonToggle />
      <Services />
      <ServicesPreview />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Home;
