import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/Emon_Formal.jpg";
import Details from '../Details/Details';
import SingleDetails from '../Details/SingleDetails';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <section>
            <div className="hero bg-white-200 h-97">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-full" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, This is Emon!</h1>
                        <p className="py-6">A web developer from Dhaka, Bangladesh. </p>
                        <div className='flex gap-2'>
                        <SocialIcon url="https://www.linkedin.com/in/emon123/"/>
                        <SocialIcon url="https://emonhasan1010@gmail.com"/>
                        <SocialIcon url="https://github.com/Adhoc123"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div>
               <h1 className='text-center font-bold text-xl bg-base-200 p-5 mb-5'>Skills</h1>
               <div className='grid gap-4 grid-cols-3 ml-10  lg:grid-cols-8 md:grid-cols-4 justify-around mb-5 ml-10'>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/B2rkDho5YzIt2_YNQXEW8t-fg0wMEpqSnFEHR59aSug/rs:fit:841:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/SWVVR2hvSkF1a0Mw/TlVXU2M4QmJBSGFF/TCZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/XeERJcgm607BSft0ELytq2QV05tuC3BaXhgw8MGVK84/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/TFJEMGo2Ry1BdWli/UWo2Q1RYbVBRSGFF/SyZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/RWp5GFf_fpE_NtjFkYXbU2FgLiuegJt3KUgO3NXfCzo/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/ZVVPZ21oTWcyYkdx/aFR0YkNqdTF3SGFE/NCZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/P8GOzq3WUytwOhLYk1KeWhLqfFfXxvp-UP4TFNMlPnM/rs:fit:841:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/R2l1V05RTUV2WHNM/aW9Ic3k5RVRBSGFF/TCZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/WNfyRk2lLY38g10QUe19Fitm6VV8tjxPDHgKTh6UiTc/rs:fit:952:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/MzFjQ2l6WFluNjFM/V3RGRl9ScGtRSGFE/cyZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/OLBFk9Yb6OplI5EkXz70SHBdEf1qVpnbEMkq1dzEUyA/rs:fit:565:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/VlZTUmpXZWJXN21x/WDNhbjEtTUpBSGFH/TiZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/KGoLfem9zCSA_INOiJGRhWScBNNGdZqxjwHV7NSVYVU/rs:fit:802:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/VXhJZXp6SmdkMVNG/N0JTN1dTckJRSGFF/WSZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/6gti_HMFfYlen-lB7bKh64ux0hDD1NfSk1m2wLgWqS8/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/UlFUcDlBQmhnTm5n/VU5GSHRaUzd3SGFE/dCZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/tYCpst0AI9pM2BLWnXQpwUCiZrpXMID-8KYO3YbGWA4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/S3RFQTZWU3VDUGgw/bkN5MlZUblpRSGFF/OCZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/rP0hLnIzcdciD73jwIKfp-sUWWRQqSuf83K7dEtzJGI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/eUdoTkl5WkUzbmVY/amRPOGRMTm1nSGFF/SyZwaWQ9QXBp'/>
                <img className='rounded-full w-28 h-28' src='https://imgs.search.brave.com/Ve5hSw4Ik2lW8En0wQRatMfw6bec7eZjTiChbJkqZzU/rs:fit:1106:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/Zl9kcW44VTN1bFhQ/LVpsa2YzWXZRSGFE/TCZwaWQ9QXBp'/>
               </div>
            </div>
            <div>
                <h1 className='text-center font-bold text-xl bg-base-200 p-5 mb-5'>Projects</h1>
                <div className='grid gap-6 grid-cols-1 ml-16 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    data.map(data=>
                    <Details
                    data={data}
                    ></Details>)
                }
                </div>
                
            </div>
            <div id='contact'>
              <h1 className='text-center font-bold text-xl bg-base-200 p-5 mt-10 mb-5'>Connect me</h1>
              <div>
                    <form action="https://formsubmit.co/emonhasan1010@gmail.com" method="POST" className='grid grid-cols-1 mx-10 lg:mx-40 '>
                        <input type="text" placeholder="Name" className='input input-bordered mb-5' />
                        <input type="mail" placeholder="Email" className='input input-bordered mb-5' />
                        <textarea type='text' placeholder="Your message" className='textarea textarea-bordered mb-5'/>
                        <input type="submit" value="Submit" className='btn btn-success mb-5 text-white' />
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Home;