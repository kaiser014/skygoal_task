import React from 'react'
import HeroSection from '../component/HomeComponent/Hero_Section/HeroSection';
import AdventureSection from '../component/HomeComponent/Adventure_Section/AdventureSection';
import OurDestination from '../component/HomeComponent/Our_Destinations/OurDestination';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AdventureSection />
      <OurDestination />
    </div>
  )
}

export default Home;