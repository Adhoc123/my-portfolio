import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img1 from '../../resale/1.png';
import img2 from '../../resale/2.png';
import img3 from '../../resale/3.png';
import img4 from '../../resale/4.png';
import img5 from '../../resale/5.png';
import img6 from '../../resale/6.png';
import img7 from '../../resale/7.png';
import img8 from '../../resale/8.png';
import img9 from '../../resale/9.png';
import img10 from '../../resale/10.png';
import img11 from '../../resale/11.png';
import img12 from '../../resale/12.png';
import img13 from '../../resale/13.png';
import img14 from '../../resale/14.png';
import img15 from '../../resale/15.png';
import img16 from '../../resale/16.png';
import img17 from '../../resale/17.png';
import img18 from '../../resale/18.png';
import img19 from '../../resale/19.png';
import img20 from '../../resale/20.png';
import img21 from '../../resale/21.png';

const Details3 = () => {
    
    
    return (
        <div className="card w-4/5 h-full shadow-xl mx-auto     ">
        <div className="card-body">
          <h2 className="card-title text-6xl">Resale</h2>
        </div>
        <li className='text-xl m-5'>Implemented four route, user can select specific category to see products of that category</li>
        <figure><img className='w-full mb-5' src={img1} alt="Shoes" /></figure> 
        <div className="divider"></div>
        <li className='text-xl m-5'>Important questions are added in the blog section</li>
        <figure><img className='w-full mb-5' src={img2} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Login page, Implemented Firebase authentication for Google</li>

        <figure><img className='w-full mb-5' src={img3} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Sign up page</li>

        <figure><img className='w-full mb-5' src={img4} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Can register as user or seller</li>

        <figure><img className='w-full mb-5' src={img5} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Seller can add products and see his/her added products in my products route</li>

        <figure><img className='w-full mb-5' src={img6} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Seller's my products page</li>

        <figure><img className='w-full mb-5' src={img7} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Seller can delete/advertise his/her products</li>

        <figure><img className='w-full mb-5' src={img8} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Toast added for confirmation</li>

        <figure><img className='w-full mb-5' src={img9} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>My products and add product will available if user is seller</li>

        <figure><img className='w-full' src={img10} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>If person register using google, he/she will considered as user. My orders will available if he/she is user.</li>

        <figure><img className='w-full' src={img11} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>User can book a product</li>

        <figure><img className='w-full' src={img12} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>User have to fulfill few fields to book a product</li>

        <figure><img className='w-full' src={img13} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Toast is added for booking confirmation</li>

        <figure><img className='w-full' src={img14} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>If logged in person is user, my orders route will available to him. So that, he/she can check his/her all orders</li>

        <figure><img className='w-full' src={img15} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>To watch dashboard, a person have to login into the system - otherwise it will redirect to login page</li>

        <figure><img className='w-full' src={img16} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Admin can see all seller and delete him </li>

        <figure><img className='w-full' src={img17} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Admin can see all buyer and delete him</li>

        <figure><img className='w-full' src={img18} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Toast is added for deleting confirmation</li>

        <figure><img className='w-full' src={img19} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Seller can advertise his/her product if advertise button is available</li>
        <figure><img className='w-full' src={img20} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>All advertised products, which is available</li>
        <figure><img className='w-full' src={img21} alt="Shoes" /></figure> 
        


        <div className='m-10 flex justify-around'>
            <a className=' badge badge-outline  text-black  p-4' href='https://resale-d8ff9.web.app/' target='_blank'>See-Live</a>
            <a className=' badge badge-outline  text-black  p-4' href='https://github.com/Adhoc123/resale-client' target='_blank'>Client-Repo</a>
            <a className=' badge badge-outline  text-black  p-4' href='https://github.com/Adhoc123/resale-server' target='_blank'>Server-Repo</a>
        </div>
        
      </div>
    );
};

export default Details3;