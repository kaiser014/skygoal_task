import React from 'react';
import './bookingsection.css';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const BookingSection = () => {
  return (
    <div className='booking-section'>
        <div className='container'>
            <Row className='align-items-center flex-direction'>
                <Col md={6} lg={6}>
                    <div className='bs-image'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/image.png'} alt='booking'/>
                    </div>
                </Col>
                <Col md={6} lg={6}>
                    <div className='bs-content'>
                        <div className='bs-content-form'>
                            <h3>Book now</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <form>
                                <div className='booking-form'>
                                    <div className='form-group booking-form-grp'>
                                        <label>City</label>
                                        <input type='text' className='form-control form-input-field' placeholder='City Place'/>
                                    </div>
                                    <div className='form-date'>
                                        <div className='form-group booking-form-grp'>
                                            <label>Arival</label>
                                            <input type='text' className='form-control form-input-field' placeholder='10 October'/>
                                        </div>
                                        <div className='form-group booking-form-grp'>
                                            <label>Departure</label>
                                            <input type='text' className='form-control form-input-field' placeholder='10 October'/>
                                        </div>
                                    </div>
                                    <div className='form-date'>
                                        <div className='form-group booking-form-grp'>
                                            <label>Star</label>
                                            <div className='count-form-field'>
                                                <Button className='btn count-btn count-btn1'><FontAwesomeIcon icon={faMinus}/></Button>
                                                <input type='number' className='form-control form-input-field count-field' placeholder='4'/>
                                                <Button className='btn count-btn count-btn2'><FontAwesomeIcon icon={faPlus}/></Button>
                                            </div>
                                        </div>
                                        <div className='form-group booking-form-grp'>
                                            <label>Room</label>
                                            <div className='count-form-field'>
                                                <Button className='btn count-btn count-btn1'><FontAwesomeIcon icon={faMinus}/></Button>
                                                <input type='number' className='form-control form-input-field count-field' placeholder='1'/>
                                                <Button className='btn count-btn count-btn2'><FontAwesomeIcon icon={faPlus}/></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='booking-form-button'>
                                    <input type='submit' className='btn booking-btn' value="Book Now"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className='yellow-circle'>
            <img src={process.env.PUBLIC_URL + '/assets/images/yellow-circle.png'} alt='circle'/>
        </div>
    </div>
  )
}

export default BookingSection;