import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './cardslider.css';
import DestinationCard from '../Destination_Card/DestinationCard';
// import { Col, Row } from 'react-bootstrap';

const CardSlider = () => {
    const settings = {
        centerMode: true,
        //centerPadding: $('.slick').find('.d-card-slider').outerWidth() / 2,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
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
        {/* <div>
            <Row>
              <Col md={3}>
                <DestinationCard />
              </Col>
            </Row>
        </div> */}
    </div>
  )
}

export default CardSlider;
