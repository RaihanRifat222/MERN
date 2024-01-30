import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Contact = () => {
    const data = useLoaderData();
    console.log(data);
    return (

        <div>
            Hello from contact
        </div>
    );
};

export default Contact;