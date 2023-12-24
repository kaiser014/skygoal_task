import React from 'react';
import './footersection.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <div className='footer-section'>
        <div className='container'>
            <div className='footer-content'>
                <Row>
                    <Col md={10} lg={8} className='m-auto'>
                        <div className='footer-content-details'>
                            <h1>Student Special: Discounted rates on tropical getaways!</h1>
                            <p>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={12}>
                        <div className='footer-links'>
                            <ul className='resource-links'>
                                <li><Link>Pivacy Policy</Link></li>
                                <li><Link>Terms of Use</Link></li>
                                <li><Link>Sales and Refunds</Link></li>
                                <li><Link>Legal</Link></li>
                            </ul>
                            <ul className='page-links'>
                                <li><Link>About</Link></li>
                                <li><Link>Schedules</Link></li>
                                <li><Link>Pricing</Link></li>
                                <li><Link>Membership</Link></li>
                                <li><Link>Joins</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default FooterSection;