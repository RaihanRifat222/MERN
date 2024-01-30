import { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";


const PriceList = () => {
    const [prices, setPrices]= useState([]);

    useEffect(() => {
        fetch('prices.json')
        .then(response => response.json())
        .then(data => setPrices(data));
    }, []);

    console.log(prices);
    return (
        <div>
            <h1 className="text-6xl text-center text-blue-900 pt-10 font-semibold">Affordable premium subscription plans</h1>
            
            <div className="grid md:grid-cols-3 gap-4 mt-10 ml-24">
            {
                prices.map((price) =>{
                    return(
                        
                        <PriceCard key={price.id} price={price} />
                        
                    )
                })
            }
            </div>
            

        </div>
    );
};

export default PriceList;