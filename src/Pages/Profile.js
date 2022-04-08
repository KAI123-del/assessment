import React from 'react';
import '../index.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { ImSkype } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";


function Profile(props) {

    return (
        <React.Fragment>

            <div className=' flex mt-12 py-8 justify-center items-center'>
                <div className='w-3/5 py-8 rounded-xl px-6 border'>
                    <div className='flex mb-4 justify-center items-center'>
                        <h1 className='text-3xl tracking-widest border-b-2 border-teal-500'>Candidate's Profile</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-between px-8  w-full h-40  items-center'>
                            <div className='flex  w-3/5 justify-center items-center leading-8'><div><p className='flex mb-2 justify-center text-4xl border-b-2 pb-2'>{props.name}</p><p className='text-xl font-semibold tracking-widest'>{props.title}</p></div></div>
                            <div className='w-36  mb-8 h-36'>{props.img}</div>
                        </div>

                    </div>

                    {/*================= contact details ===============*/}


                    <div className='border flex mt-6 rounded-xl shadow-xl text-gray-600 justify-center items-center'>
                        <div className='grid  grid-cols-6 px-8 py-4 gap-y-2'>
                            <div className='col-span-3  '>
                                <div className="flex justify-center items-center space-x-4 ">
                                    <BsFillTelephoneFill className='text-xl text-sky-400' />
                                    <p>+91 1236545689</p>
                                </div>
                            </div>
                            <div className='col-span-3 '>
                                <div className="flex justify-center items-center space-x-4 ">
                                    <MdMarkEmailUnread className='text-xl text-red-500' />
                                    <p>{props.name}@gmail.com</p>
                                </div>
                            </div>
                            <div className='col-span-4'>
                                <div className="flex justify-center items-center space-x-4 ">
                                    <FaLinkedinIn className='text-xl text-blue-500' />
                                    <p>https://www.linkedin.com/in/{props.name}-7571991b4</p>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className="flex justify-center items-center space-x-4 ">
                                    <ImLocation2 className='text-xl text-green-600' />
                                    <p>{props.location} </p>
                                </div>
                            </div>
                            <div className='col-span-2 mr-4 '>
                                <div className="flex justify-start items-center space-x-4 ">
                                    <FaGithub className='text-xl text-black' />
                                    <p>{props.name}123-del</p>
                                </div>
                            </div>
                            <div className='col-span-2 '>
                                <div className="flex  justify-center space-x-2  items-center ">
                                    <ImSkype className='text-xl text-sky-400 ' />
                                    <p> https://join.skype.com/{props.name}</p>
                                </div>
                            </div>
                            <div className='col-span-2  '>
                                <div className="flex  justify-center items-center space-x-2 ">
                                    <RiWhatsappFill className='text-xl text-green-500' />
                                    <p>+91 123456987</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=' mt-10'>
                        <h1 className='text-center mb-6  text-3xl text-gray-600   tracking-wide'>
                            <span className='border-b-2 border-teal-400  '>Frontend Developer Summary</span>
                        </h1>
                        <p className='leading-8 text-center  text-gray-500 '>
                            Proficient in frontend technologies such as javaScript, HTML5, CSS3, bootstrap, tailwindCss , react.js and material UI and nowadays getting familier to react animation libraries (Framer motion). besides this I also have knowledge about the Css preprocessors. The user interface part is what fascinates me. Also I have a good aptitude and reasoning skills along with an attitude of a quick learner. Looking for an environment where I can learn and explore the beauty of frontend development.
                        </p>
                    </div>

                    

                    


                </div>
            </div>

        </React.Fragment>
    )
}

export default Profile;