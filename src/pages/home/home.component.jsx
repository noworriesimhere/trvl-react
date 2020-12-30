import React from 'react';
import HeroSection from '../../components/hero-section/hero-section.component';
import CardHolder from '../../components/card/card-holder.component';
import Footer from '../../components/footer/footer.component';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <CardHolder />
      <Footer />
    </>
  );
};

export default Home;
