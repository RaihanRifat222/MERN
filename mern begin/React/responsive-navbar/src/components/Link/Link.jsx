import React from 'react';

const Link = ({route}) => {
    return (
        <div className='mr-12 p-3 hover:bg-blue-500'>
            <li>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;