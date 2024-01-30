import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id , title , body} = post;
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-3xl'>{body}</p>
            <button onClick={() => navigate(-1)} className='bg-red-600 hover:bg-red-500 text-white font-semibold p-2 m-2 rounded-lg'>Go back</button>
        </div>
    );
};

export default PostDetails;