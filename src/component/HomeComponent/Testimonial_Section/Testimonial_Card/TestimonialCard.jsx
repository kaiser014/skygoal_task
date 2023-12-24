import React from 'react';
import './testimonialcard.css';

const TestimonialCard = (props) => {
  const {imageurl, clientname, comment } = props;
  return (
    <div className='testimonial-card-content'>
        <div className='client-image'>
            <img src={imageurl} alt='testimonial'/>
        </div>
        <h5>{clientname}</h5>
        <p>{comment}</p>
    </div>
  )
}

export default TestimonialCard;