import React from 'react';
import './discountsection.css';
import { Button, Col, Row } from 'react-bootstrap';

const DiscountSection = () => {
  return (
    <div className='discount-section'>
        <div className='container'>
            <Row className='align-items-center'>
                <Col md={6} lg={6}>
                    <div className='ds-content'>
                        <h6>Get 20% off for student</h6>
                        <h2>Student discount available.<span>Get ready for some fun in the sun!</span></h2>
                        <div className='ds-content-list'>
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Massa quis natoque sit quam</li>
                                <li>Eros non pellentesque</li>
                                <li>tortor id euismod habitant</li>
                                <li>sed suspendisse id in ultrices</li>
                            </ul>
                        </div>
                        <div className='ds-content-button'>
                            <Button className='btn primary-bgcolor primary-btn'>Explore More</Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={6}>
                    <div className='ds-student-image'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/student.png'} alt='student'/>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default DiscountSection;