import React from 'react';
import './Manu.css'
import {Link} from "react-router-dom";

const Manu = () => {
    return (
        <div className='manu'>
           <Link to="/home">HOME </Link>
           <Link to="/reviews">REVIEWS </Link>
           <Link to="/deshboard">DESHBOARD </Link>
           <Link to="/blogs">BLOGS </Link>
           <Link to="/about">ABOUT </Link>
        </div>
    );
};

export default Manu;