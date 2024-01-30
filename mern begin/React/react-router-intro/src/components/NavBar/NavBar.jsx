import { useState } from "react";

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
        { path: '/posts', name: 'Posts' },
    ];
    return (
        <nav className="bg-blue-400">
            <div onClick={()=> setOpen(!open)} className="md:hidden">
                {open ? <XMarkIcon className='h-8 w-8 text-blue-700' /> : <Bars3Icon className='h-8 w-8 text-blue-700' />}
                
            </div>
            
            <ul className={`md:flex absolute md:static duration-500 bg-blue-400 p-2 ${open? 'top-6': '-top-48'}`}>
                {routes.map((route, index) => 
                    <Link className='mr-12 p-3 hover:bg-blue-500' key={index} to={route.path}> {route.name}
                    </Link>
                )}
            </ul>
        </nav>
    );
};


export default NavBar;