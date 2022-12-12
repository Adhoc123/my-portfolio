import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img1 from '../../better/1.png';
import img2 from '../../better/2.png';
import img3 from '../../better/3.png';
import img4 from '../../better/4.png';
import img5 from '../../better/5.png';
import img6 from '../../better/6.png';
import img7 from '../../better/7.png';
import img8 from '../../better/8.png';
import img9 from '../../better/9.png';
import img10 from '../../better/10.png';

const SingleDetails = () => {
    
    
    return (
        <div className="card w-4/5 h-full shadow-xl mx-auto     ">
        <div className="card-body">
          <h2 className="card-title text-6xl">Better Life</h2>
        </div>
        <li className='text-xl m-5'>Limited upto 3 three services to home page</li>
        <figure><img className='w-full mb-5' src={img1} alt="Shoes" /></figure> 
        <div className="divider"></div>
        <li className='text-xl m-5'>Sell all button redirected to all services page</li>
        <figure><img className='w-full mb-5' src={img2} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>View details showing all data of a product. For adding review user have to login and implemented a back to button.</li>

        <figure><img className='w-full mb-5' src={img3} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Few questions are added in the blog page</li>

        <figure><img className='w-full mb-5' src={img4} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Login page</li>

        <figure><img className='w-full mb-5' src={img5} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Register page</li>

        <figure><img className='w-full mb-5' src={img6} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Firebase authentication, implemented google auth</li>

        <figure><img className='w-full mb-5' src={img7} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>In the my review section, logged in user can see his/her all review, they have commented</li>

        <figure><img className='w-full mb-5' src={img8} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>After logging in, user can add services</li>

        <figure><img className='w-full mb-5' src={img9} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>User can submit their review, after login</li>

        <figure><img className='w-full' src={img10} alt="Shoes" /></figure> 

        <div className='m-10 flex justify-around'>
            <a className='badge badge-outline  text-black  p-4' href='https://better-life-c5a90.web.app/' target='_blank'>See-Live</a>
            <a className='badge badge-outline  text-black  p-4' href='https://github.com/Adhoc123/better-life-client' target='_blank'>Client-Repo</a>
            <a className='badge badge-outline  text-black  p-4' href='https://github.com/Adhoc123/better-life-server' target='_blank'>Server-Repo</a>
        </div>
        
      </div>
    );
};

export default SingleDetails;