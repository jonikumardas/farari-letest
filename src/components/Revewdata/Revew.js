import React from 'react';
import './Revew.css'

const Revew = (props) => {
    const { name, reviews, descripttion, gmail } = props.Revewdata;
    return (
        <div className='card'>
            <h2>Name:{name}</h2> 
            <h3>Gamil:{gmail}</h3>
            <h3>Reviews:{reviews} star</h3>
            <p>Descripttion:{descripttion}</p>
            <button>Show review</button>
        </div>
    );
};

export default Revew;