import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
   
    const navigate = useNavigate();
    const navigateToPostDetails = (id) => {
        console.log(id);
        navigate(`/posts/${id}`)
    }
    return (
        <div>
            {
                posts.map((post) =>
                    <div key={post.id} className='border-2 border-blue-400 p-4 m-4'>
                        <h1 className='text-2xl font-bold'>{post.title}</h1>
                        <p className='text-lg'>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className='bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 m-2 rounded-lg'>Show Post Details</Link>
                        <button onClick={() => navigateToPostDetails(post.id)} className='bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 m-2 rounded-lg'>Show Post Details</button>
                        <button onClick={() => navigate(-1)} className='bg-red-600 hover:bg-red-500 text-white font-semibold p-2 m-2 rounded-lg'>Go back</button>
                    </div>
                )
            }
        </div>
    );
};

export default Posts;