import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
    ];
    return (
        <nav className="bg-blue-400">
            <div onClick={()=> setOpen(!open)} className="md:hidden">
                {open ? <XMarkIcon className='h-8 w-8 text-blue-700' /> : <Bars3Icon className='h-8 w-8 text-blue-700' />}
                
            </div>
            
            <ul className={`md:flex absolute md:static duration-500 bg-blue-400 p-2 ${open? 'top-6': '-top-48'}`}>
                {routes.map((route, index) => 
                    <Link key={index} route= {route}>
                        
                    </Link>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;