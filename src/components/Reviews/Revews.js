import React, { useEffect, useState } from 'react';
import Revew from '../Revewdata/Revew';


const Revews = () => {
    const [revews, setRevew] = useState([])
    useEffect(()=>{
        fetch('review.json')
            .then(res => res.json())
        .then(data=>setRevew(data))
    },[])
    
    return (
        <div className='conatiner'>
            <h1> Reviews </h1>
            {
                revews.map(revew => <Revew key={revew.id}
                Revewdata={revew}
                ></Revew>)
            }
        </div>
    );
};

export default Revews;