import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='font-bold text-xl'><Link to='/'>About</Link></li>
        <li className='font-bold text-xl'><Link to='/blogs'>Blogs</Link></li>
        <a href='#contact' className='font-bold text-sm mt-3 ml-4 lg:text-xl md:ml-4'>Contact</a>
    </>
    return (
        <div className="navbar bg-base-300 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold">Emon's Portfolio</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className='btn btn-sm btn-success btn-outline' target='_blank' href="https://drive.google.com/file/d/11Yg2PoWOm9c5PceHUHDcFHE-jizAwEH1/view?usp=share_link" download>Resume</a>            
            </div>
        </div>
    );
};

export default Navbar;