import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='bg-blue-950 m-10 rounded-3xl flex flex-col hover:bg-blue-900'>
            <h1 className='text-6xl text-blue-200 m-4 p-4'>{price.price}$ <span className='text-2xl text-blue-100'>/month</span></h1>
            <h1 className='text-4xl text-blue-400 m-4 p-4' >{price.name}</h1>
            {
                price.features.map((feature, index) => {
                    return(
                        <li  key={index} className='text-2xl text-slate-100 m-4 p-4'>{feature}</li>
                    )
                })
            }
            <button className='bg-green-600 w-full h-12 rounded-md font-semibold text-2xl text-white mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;