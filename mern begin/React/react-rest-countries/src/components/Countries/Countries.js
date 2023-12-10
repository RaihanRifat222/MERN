import React from 'react';
import './Countries.css';
import Country from '../Country/Country';
import { useEffect, useState } from 'react';
const Countries = () => {
        const [countries, setCountries]= useState([]);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    
    return(
        <div >
        <h1>Different Countries</h1>
        <h3>Available Countries: {countries.length}</h3>
        <div className="countries">
        {
            countries.map(country => <Country country = {country} key={country.cca3} />)
        }
        </div>
        
        </div>
    )
};





export default Countries;