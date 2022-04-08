import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
import maleOne from '../Images/maleOne.jpg';
import maleTwo from '../Images/maleTwo.jpg';
import maleThree from '../Images/maleThree.jpg';
import femaleOne from '../Images/femaleOne.jpg';
import femaleTwo from '../Images/femaleTwo.jpg';
import femaleThree from '../Images/femaleThree.jpg';



function Applications() {

  return (

    <React.Fragment>
      
      <div className='flex justify-center items-center'>
        <div className='bg-gradient-to-b from-gray-100 to-gray-300 via-gray-200 border pt-8 mt-10 rounded-xl mb-10 pb-8 px-8 w-5/6'>
        <div className='flex justify-center items-center mb-10 text-purple-400  text-4xl font-semibold tracking-wide '><h1>Applicants for React.js internship</h1></div>
          <div className='flex justify-center items-center '>
            <div className='grid grid-cols-2 gap-x-6 pb-12 gap-y-6'>
              <div className='flex justify-center items-center shadow-xl bg-white rounded-xl hover:scale-105 transition duration-300' >
                <div className=' px-10 py-8 rounded-lg ' >
                  <div className='flex justify-between mb-4  items-center'>
                    <div className=' '>
                      <h1 className='text-lg mb-3'>Candidate Name : <span className='text-xl font-semibold'>Anuska rawat</span></h1>
                      <h1 className='text-lg'>Applied for : <span className='text-xl font-semibold'>React.js internship</span></h1>
                    </div>
                    <img src={femaleOne} className="w-24 h-24 rounded-full" alt="candidate " />

                  </div>

                  <h1 className='text-lg'>Description : <span> front-end developer with 1 year of experience

                  </span></h1>
                  <div className='text-xl mt-4 border-b-4 border-teal-400 w-1/4 text-center text-sky-500 hover:text-purple-400 transition duration-300'><NavLink to={'/first'}>View profile</NavLink></div>

                </div>

              </div>
              <div className='flex justify-center items-center  bg-white rounded-xl hover:scale-105 transition duration-300 shadow-xl' >
                <div className=' px-10 py-8 rounded-lg ' >
                  <div className='flex justify-between mb-4  items-center'>
                    <div className=' '>
                      <h1 className='text-lg mb-3'>Candidate Name : <span className='text-xl font-semibold'>Komal bisht</span></h1>
                      <h1 className='text-lg'>Applied for : <span className='text-xl font-semibold'>React.js internship</span></h1>
                    </div>
                    <img src={femaleTwo} className="w-24 h-24 rounded-full" alt="candidate " />

                  </div>

                  <h1 className='text-lg'>Description : <span> front-end developer with 1 year of experience

                  </span></h1>
                  <div className='text-xl mt-4 border-b-4 border-teal-400 w-1/4 text-center text-sky-500 hover:text-purple-400 transition duration-300'><NavLink activeClassName='' to={'/second'}>View profile</NavLink></div>
                  
                </div>
                

              </div>
              <div className='flex justify-center items-center bg-white rounded-xl hover:scale-105 transition duration-300 shadow-xl' >
                <div className=' px-10 py-8 rounded-lg ' >
                  <div className='flex justify-between mb-4  items-center'>
                    <div className=' '>
                      <h1 className='text-lg mb-3'>Candidate Name : <span className='text-xl font-semibold'>Jyoti Singh</span></h1>
                      <h1 className='text-lg'>Applied for : <span className='text-xl font-semibold'>React.js internship</span></h1>
                    </div>
                    <img src={femaleThree} className="w-24 h-24 rounded-full" alt="candidate " />

                  </div>

                  <h1 className='text-lg'>Description : <span> front-end developer with 1 year of experience

                  </span></h1>
                  <div className='text-xl mt-4 border-b-4 border-teal-400 w-1/4 text-center text-sky-500 hover:text-purple-400 transition duration-300'><NavLink to={'/third'}>View profile</NavLink></div>
                  
                </div>
                

              </div>
              <div className='flex justify-center items-center  bg-white rounded-xl hover:scale-105 transition duration-300 shadow-xl' >
                <div className=' px-10 py-8 rounded-lg ' >
                  <div className='flex justify-between mb-4  items-center'>
                    <div className=' '>
                      <h1 className='text-lg mb-3'>Candidate Name : <span className='text-xl font-semibold'>Aman Chauhan</span></h1>
                      <h1 className='text-lg'>Applied for : <span className='text-xl font-semibold'>React.js internship</span></h1>
                    </div>
                    <img src={maleOne} className="w-24 h-24 rounded-full" alt="candidate " />

                  </div>

                  <h1 className='text-lg'>Description : <span> front-end developer with 1 year of experience

                  </span></h1>
                  <div className='text-xl mt-4 border-b-4 border-teal-400 w-1/4 text-center text-sky-500 hover:text-purple-400 transition duration-300'><NavLink to={'/four'}>View profile</NavLink></div>
                  
                </div>
                

              </div>
              <div className='flex justify-center items-center  bg-white rounded-xl hover:scale-105 transition duration-300 shadow-xl' >
                <div className=' px-10 py-8 rounded-lg ' >
                  <div className='flex justify-between mb-4  items-center'>
                    <div className=' '>
                      <h1 className='text-lg mb-3'>Candidate Name : <span className='text-xl font-semibold'>Mayank Kumar</span></h1>
                      <h1 className='text-lg'>Applied for : <span className='text-xl font-semibold'>React.js internship</span></h1>
                    </div>
                    <img src={maleTwo} className="w-24 h-24 rounded-full" alt="candidate " />

                  </div>

                  <h1 className='text-lg'>Description : <span> front-end developer with 1 year of experience

                  </span></h1>
                  <div className='text-xl mt-4 border-b-4 border-teal-400 w-1/4 text-center text-sky-500 hover:text-purple-400 transition duration-300'><NavLink to={'/five'}>View profile</NavLink></div>
                  
                </div>
                

              </div>
              <div className='flex justify-center items-center bg-white rounded-xl hover:scale-105 transition duration-300 shadow-xl' >
                <div className=' px-10 py-8 rounded-lg ' >
                  <div className='flex justify-between mb-4  items-center'>
                    <div className=' '>
                      <h1 className='text-lg mb-3'>Candidate Name : <span className='text-xl font-semibold'>Pankaj Mehta</span></h1>
                      <h1 className='text-lg'>Applied for : <span className='text-xl font-semibold'>React.js internship</span></h1>
                    </div>
                    <img src={maleThree} className="w-24 h-24 rounded-full" alt="candidate " />

                  </div>

                  <h1 className='text-lg'>Description : <span> front-end developer with 1 year of experience

                  </span></h1>
                  <div className='text-xl mt-4 border-b-4 border-teal-400 w-1/4 text-center text-sky-500 hover:text-purple-400 transition duration-300'><NavLink to={'/six'}>View profile</NavLink></div>
                  
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>


  )
}

export default Applications;