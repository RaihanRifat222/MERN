import React from 'react';
import './Blogs.css';
const Blogs = (props) => {
    let imageUrl = './images/'+ props.image+'.jpg';
    let authorImg = './images/'+ props.authorImg+'.png';
    return (
        <div>
            <img src= {imageUrl} alt="" className='cover' />
            <div className="post-details">
                <img src={authorImg} alt="" className='h-14 w-14 mr-6 mb-18 mt-8' />
                <div>
                    <p className='author'>{props.author}</p>
                    <p className='date'>{props.date}</p>
                </div>

                
                </div>

                <p className="title">{props.title}</p>
                <p className='read' >Mark as read</p>
        </div>
    );
};

export default Blogs;