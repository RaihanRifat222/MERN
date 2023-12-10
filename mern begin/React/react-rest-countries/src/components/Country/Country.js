import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, region, flags} = props.country;
    return (
        <div>
            <div id='country'>
      <h2>Name: {name.common}</h2>
      <p>Region: {region} </p>
      <img className='flag-image' src= {flags.png} alt="" />
    </div>
        </div>
    );
};

export default Country;