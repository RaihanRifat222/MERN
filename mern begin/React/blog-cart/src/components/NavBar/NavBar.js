import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
            <nav className='flex '>
                <div className="logo">
                    <h4>BlogMart</h4>
                </div>
                <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/315856122_1201551060452668_8579457690312228736_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEM9tor6X2l-73T6iMiNYFVRsS15p_N39NGxLXmn83f0yxj6uXm6IyQJ2lo__OcJX1_b8Xfp9sJkAarlcjGXK8h&_nc_ohc=xKMsjGC9aaIAX-pjlKj&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCqPNklUyK0w-Js4ni4ZYKnvT1X3MYXE0CHkyUb1uM00Q&oe=658BCC46" alt="" className=' h-16 w-16 rounded-full' />
            </nav>
            <hr className='line' />
        </div>
    );
};

export default NavBar;