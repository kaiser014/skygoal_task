import React from 'react'
import HeroSection from '../component/HomeComponent/Hero_Section/HeroSection';
import AdventureSection from '../component/HomeComponent/Adventure_Section/AdventureSection';
import OurDestination from '../component/HomeComponent/Our_Destinations/OurDestination';
import DiscountSection from '../component/HomeComponent/Discount_Section/DiscountSection';
import BookingSection from '../component/HomeComponent/Booking_Section/BookingSection';
import TestimonialSection from '../component/HomeComponent/Testimonial_Section/TestimonialSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AdventureSection />
      <OurDestination />
      <DiscountSection />
      <BookingSection />
      <TestimonialSection />
    </div>
  )
}

export default Home;