import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img1 from '../../core/1.png';
import img2 from '../../core/2.png';
import img3 from '../../core/3.png';
import img4 from '../../core/4.png';
import img5 from '../../core/5.png';
import img6 from '../../core/6.png';
import img7 from '../../core/7.png';
import img8 from '../../core/8.png';
import img9 from '../../core/9.png';
import img10 from '../../core/10.png';

const Details2 = () => {
    
    
    return (
        <div className="card w-4/5 h-full shadow-xl mx-auto     ">
        <div className="card-body">
          <h2 className="card-title text-6xl">coreSchooling</h2>
        </div>
        <li className='text-xl m-5'>Implemented four route</li>
        <figure><img className='w-full mb-5' src={img1} alt="Shoes" /></figure> 
        <div className="divider"></div>
        <li className='text-xl m-5'>Toggle into dark mode</li>
        <figure><img className='w-full mb-5' src={img2} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Contents route showing all available contents</li>

        <figure><img className='w-full mb-5' src={img3} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Few questions are added in the blog page</li>

        <figure><img className='w-full mb-5' src={img4} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Added 404 route if route is not found</li>

        <figure><img className='w-full mb-5' src={img5} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>After clicking into a item, it redirects to specific item page</li>

        <figure><img className='w-full mb-5' src={img6} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Download item content as PDF. For getting premium access user have to login - otherwise it will redirect to login page</li>

        <figure><img className='w-full mb-5' src={img7} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Implemented Firebase authentication, for Google and Github and regular login form.</li>

        <figure><img className='w-full mb-5' src={img8} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Register page, for new user</li>

        <figure><img className='w-full mb-5' src={img9} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Logout button</li>

        <figure><img className='w-full' src={img10} alt="Shoes" /></figure> 

        <div className='m-10 flex justify-around'>
            <a className=' badge badge-outline  text-black  p-4' href='https://core-schooling.web.app/' target='_blank'>See-Live</a>
            <a className=' badge badge-outline  text-black  p-4' href='https://github.com/Adhoc123/core-schooling-client' target='_blank'>Client-Repo</a>
            <a className=' badge badge-outline  text-black  p-4' href='https://github.com/Adhoc123/core-schooling-server' target='_blank'>Server-Repo</a>
        </div>
        
      </div>
    );
};

export default Details2;