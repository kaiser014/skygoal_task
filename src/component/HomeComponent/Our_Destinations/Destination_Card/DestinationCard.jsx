import React from 'react'
import { faEllipsisVertical, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './destinationcard.css';

const DestinationCard = (props) => {
    const {imageurl, universityname, universityaddress} = props;
  return (
    <div className='d-card-content'>
        <div className='d-card-image'>
            <img src={imageurl} alt='university'/>
            <div className='d-card-position'>
                <div className='dcard-rating-button'>
                    <div className='d-card-rating'>
                        <FontAwesomeIcon icon={faStar}/> <span>4.8</span>
                    </div>
                    <div className='d-card-cat'>
                        <p>Exclusive</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-card-details'>
            <h5>{universityname}</h5>
            <div className='university-details'>
                <p>{universityaddress}</p>
                <div className='ud-option'>
                    <FontAwesomeIcon icon={faEllipsisVertical}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationCard;
