import React from 'react';
import './adventurecard.css'

const AdventureCard = (props) => {
    const {name, desc, imageurl} = props;
  return (
    <div className='adventure-card-content'>
        <img src={imageurl} alt='avater'/>
        <div className='card-content'>
            <h6>{name}</h6>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default AdventureCard;