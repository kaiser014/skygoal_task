import React from 'react';
import './adventuresection.css';
import { Button, Col, Row } from 'react-bootstrap';
import AdventureCard from './Adventure_Card/AdventureCard';

const AdventureSection = () => {
  return (
    <div className='adventure-section'>
      <div className='container'>
      <div className='circle'><img src={process.env.PUBLIC_URL + '/assets/images/circle.png'} alt='circle.png'/></div>
      <div className='half-circle'><img src={process.env.PUBLIC_URL + '/assets/images/half-circle.png'} alt='circle.png'/></div>
        <Row className='align-items-center'>
          <Col md={6} lg={6}>
                <AdventureCard name="Jenny Wilson" desc="Lorem ipsum dolor sit amet, consectetur adipiscing..." imageurl={process.env.PUBLIC_URL + '/assets/images/avatar.png'}/>
                <AdventureCard name="Jenny Wilson" desc="Lorem ipsum dolor sit amet, consectetur adipiscing..." imageurl={process.env.PUBLIC_URL + '/assets/images/avatar2.png'}/>
                <AdventureCard name="Jenny Wilson" desc="Lorem ipsum dolor sit amet, consectetur adipiscing..." imageurl={process.env.PUBLIC_URL + '/assets/images/avatar3.png'}/>
              </Col>
              <Col md={6} lg={6}>
                <div className='adventure-centent'>
                  <h2>Tropical Adventure <span>for Students.</span></h2>
                  <h6>Student Tropical Vacation: Relax and Recharge</h6>
                  <div className='adventure-list'>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Massa quis natoque sit quam</li>
                      <li>Eros non pellentesque</li>
                      <li>tortor id euismod habitant</li>
                      <li>sed suspendisse id in ultrices</li>
                    </ul>
                  </div>
                  <div className='adventure-button'>
                    <Button className='btn primary-bgcolor primary-btn'>Explore More</Button>
                  </div>
                </div>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default AdventureSection;