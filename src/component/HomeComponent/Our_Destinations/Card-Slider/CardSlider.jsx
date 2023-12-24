import React from 'react';
import Slider from "react-slick";
import DestinationCard from '../Destination_Card/DestinationCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cardslider.css';

const CardSlider = () => {
    const settings = {
        centerMode: true,
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='d-card-slider'>
        <Slider {...settings}>
          <div>
            <DestinationCard imageurl={process.env.PUBLIC_URL + '/assets/images/card-image.png'} universityname='Harvard University' universityaddress='Cambridge, Massachusetts, UK'/>
          </div>
          <div>
            <DestinationCard imageurl={process.env.PUBLIC_URL + '/assets/images/card-image1.png'} universityname='Oxford University' universityaddress='Oxford, England'/>
          </div>
          <div>
            <DestinationCard imageurl={process.env.PUBLIC_URL + '/assets/images/card-image2.png'} universityname='Stanford University' universityaddress='Stanford, California'/>
          </div>
          <div>
            <DestinationCard imageurl={process.env.PUBLIC_URL + '/assets/images/card-image3.png'} universityname='Nanyang Technology University' universityaddress='Nanyang Ave, Singapur'/>
          </div>
        </Slider>
    </div>
  )
}

export default CardSlider;
