import React from 'react';
import './herosection.css';
import { Button, Col, Row } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <div className='container'>
            <Row className='align-items-center'>
                <Col md={6} lg={6}>
                    <div className='hero-section-content'>
                        <div className='hero-subtitle'>
                            <h6>Discover the beauty of the tropics</h6>
                        </div>
                        <div className='hero-title'>
                            <h1>Tropical Destinations <span>For Student</span></h1>
                        </div>
                        <div className='hero-description'>
                            <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
                        </div>
                        <div className='herosection-button'>
                            <Button className='btn primary-bgcolor primary-btn herosection-btn'>Sign up</Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={6}>
                    <div className='hero-section-image'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/1.png'} alt='herosection'/>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default HeroSection;