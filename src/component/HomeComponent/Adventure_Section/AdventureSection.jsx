import React from 'react';
import './adventuresection.css';
import { Col, Row } from 'react-bootstrap';
import AdventureCard from './Adventure_Card/AdventureCard';

const AdventureSection = () => {
  return (
    <div className='adventure-section'>
      <div className='container'>
        <Row>
          <Col md={6} lg={6}>
            <AdventureCard name="Jenny Wilson" desc="Lorem ipsum dolor sit amet, consectetur adipiscing..." imageurl={process.env.PUBLIC_URL + '/assets/images/avatar.png'}/>
            <AdventureCard name="Jenny Wilson" desc="Lorem ipsum dolor sit amet, consectetur adipiscing..." imageurl={process.env.PUBLIC_URL + '/assets/images/avatar2.png'}/>
            <AdventureCard name="Jenny Wilson" desc="Lorem ipsum dolor sit amet, consectetur adipiscing..." imageurl={process.env.PUBLIC_URL + '/assets/images/avatar3.png'}/>
          </Col>
          <Col md={6} lg={6}>
            <div className='adventure-centent'>

            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AdventureSection;