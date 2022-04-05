import React from 'react';
import './Revew.css';
// import {Link} from "react-router-dom";

const Revew = (props) => {
    const { name, reviews, descripttion, gmail } = props.Revewdata;
    return (
        <div className='card'>
            <h2>Name:{name}</h2> 
            <h3>Gamil:{gmail}</h3>
            <h3>Reviews:{reviews} star</h3>
            <p>Descripttion:{descripttion}</p>
            <button onClick={()=>props.EventHandeler(props)}>Sow review</button>
        </div>
    );
};

export default Revew;