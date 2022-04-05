import React from 'react';
import img from '../../Assate/ass.jpg'
import Revews from '../Reviews/Revews';
import './Home.css';
const Home = () => {
    return (
        <div>     
        <div className='container'>
            <div className="aritical-container">
                <h1>Letest <span>Farary</span> car </h1>
                <p>
                    This is our letest Farary car A full-face helmet does little to take the edge off the most rpm shriek of a naturally aspirated huge liter flat-six when it's mounted amidships just behind your seat, as it is in the 2022 Porsche 718 Cayman GT4 RS. We start to wish we'd also worn earplugs really, because its glorious sounds may well be worth hearing aids in  as we feed in the power exiting a slow corner, then bang through the gears on our way to storming headlong into a banked sweeper at Streets of Willow Springs raceway.
                </p>
                <button><p>Buy now</p></button>
          </div>
            <div className="image-container">
                <img src={img} alt="" />   
          </div>
            </div>
            <Revews></Revews>
            </div>
    );
};

export default Home;