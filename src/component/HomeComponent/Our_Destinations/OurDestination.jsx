import React from 'react';
import CardSlider from './Card-Slider/CardSlider';
import './ourdestinations.css';

const OurDestination = () => {
  return (
    <div className='ourdestinations-section'>
        <div className='container'>
            <div className='ourdestinations-title'>
                <h2>Our Destinations</h2>
            </div>
            <div className='destinations-slider'>
                <CardSlider />
            </div>
        </div>
    </div>
  )
}

export default OurDestination;
