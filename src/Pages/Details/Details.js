import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Details = ({ data }) => {
    const { picture, title, _id } = data;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/project/${_id}`);
    }
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-2xl">
            <figure><img className='h-64' src={picture} alt="projects" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl mb-5">{title}</h2>
                {
                    _id == 1 &&

                    <> <div className=''>
                         <li className='btn border-1  bg-white btn-xs text-black'>React</li>
                         <li className='btn border-1  bg-white btn-xs text-black'>Firebase</li>
                         <li className='btn border-1  bg-white btn-xs text-black'>React Dom</li>
                         <li className='btn border-1  bg-white btn-xs text-black'>Node</li>
                         <li className='btn border-1  bg-white btn-xs text-black'>Express</li>
                         <li className='btn border-1  bg-white btn-xs text-black'>MongoDB</li>
                         <li className='btn border-1  bg-white btn-xs text-black'>Tailwind CSS</li>
                         <li className='btn border-1  bg-white btn-xs text-black'>DaisyUI</li>
                     </div>
                        
                       
                    </>
                }
                {_id == 2 &&

                    <>  
                        <div>
                        <li className='btn border-1  bg-white btn-xs text-black'>React</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Firebase</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>React Router</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Node</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Express</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>MongoDB</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>React Bootstrap</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Bootstrap</li>
                        </div>
                    </>

                }
                {_id == 3 &&

                    <> 
                       <div>
                        <li className='btn border-1  bg-white btn-xs text-black'>React</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Firebase</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>React Router</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Node</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Express</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>MongoDB</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>React Hook Form</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>JWT</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Tailwind CSS</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>DaisyUI</li>
                       </div>
                    </>

                }
                {_id == 4 &&

                    <>  
                    <div>
                        <li className='btn border-1  bg-white btn-xs text-black'>React</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>React Router Dom</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Bootstrap</li>
                        <li className='btn border-1  bg-white btn-xs text-black'>Recharts</li>
                    </div>
                    </>

                } 
               
                <div className="card-actions justify-end">
                    <button className="text-success  text-xl  btn-sm hover:underline underline-offset-4" onClick={handleNavigate}>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Details;