import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img1 from '../../geek/1.png';
import img2 from '../../geek/2.png';
import img3 from '../../geek/3.png';
import img4 from '../../geek/4.png';
import img5 from '../../geek/5.png';
import img6 from '../../geek/6.png';
import img7 from '../../geek/7.png';
import img8 from '../../geek/8.png';
import img9 from '../../geek/9.png';
import img10 from '../../geek/10.png';

const Details2 = () => {
    
    
    return (
        <div className="card w-4/5 h-full shadow-xl mx-auto     ">
        <div className="card-body">
          <h2 className="card-title text-6xl">Smarty Geek</h2>
        </div>
        <li className='text-xl m-5'>Implemented four route including demography</li>
        <figure><img className='w-full mb-5' src={img1} alt="Shoes" /></figure> 
        <div className="divider"></div>
        <li className='text-xl m-5'>Subjects are added</li>
        <figure><img className='w-full mb-5' src={img2} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>In the quiz section, you can explore quizes</li>

        <figure><img className='w-full mb-5' src={img3} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Blogs are filled with important quries</li>

        <figure><img className='w-full mb-5' src={img4} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>React re-chart added</li>

        <figure><img className='w-full mb-5' src={img5} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>In the subject specific quiz section, if user select an answer a toast will pop up to let him know, is his answer correct/wrong!</li>

        <figure><img className='w-full mb-5' src={img6} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>If answer is right, correct answer toast will pop up</li>

        <figure><img className='w-full mb-5' src={img7} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>By clicking view icon, user can see the correct answer</li>

        <figure><img className='w-full mb-5' src={img8} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>Subject based quiz</li>

        <figure><img className='w-full mb-5' src={img9} alt="Shoes" /></figure> 
        <li className='text-xl m-5'>This chart shows, number of questions in each subject</li>

        <figure><img className='w-full' src={img10} alt="Shoes" /></figure> 

        <div className='m-10 flex justify-around'>
            <a className='badge badge-outline  text-black  p-4' href='https://super-cheesecake-f3e057.netlify.app/' target='_blank'>See-Live</a>
            <a className='badge badge-outline  text-black  p-4' href='https://github.com/Adhoc123/smarty-geek' target='_blank'>Git-Repo</a>
        </div>
        
      </div>
    );
};

export default Details2;