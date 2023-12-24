import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TestimonialCard from './Testimonial_Card/TestimonialCard';
import './testimonialsection.css';

const TestimonialSection = () => {
  return (
    <div className='testimonial-section'>
        <div className='container'>
            <div className='testimonial-section-title'>
                <h2>Testimonials</h2>
            </div>
            <div className='testimonial-reviews'>
                <Row>
                    <Col md={4} lg={4}>
                        <TestimonialCard imageurl={process.env.PUBLIC_URL + '/assets/images/T_Avatar.png'} clientname="Caorey Korsgaard" comment="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
                    </Col>
                    <Col md={4} lg={4}>
                        <TestimonialCard imageurl={process.env.PUBLIC_URL + '/assets/images/T_Avatar2.png'} clientname="Jakob Aminoff" comment="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
                    </Col>
                    <Col md={4} lg={4}>
                        <TestimonialCard imageurl={process.env.PUBLIC_URL + '/assets/images/T_Avatar3.png'} clientname="Carla Press" comment="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection;