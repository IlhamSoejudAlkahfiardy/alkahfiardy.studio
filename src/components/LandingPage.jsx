import React from 'react'
import Image from '../assets/images/ilham.png'

import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGitlab } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <>
            {/* Desktop View */}

            <div className='hidden lg:flex w-1/4 h-[100vh] flex flex-col justify-end border-r border-black gap-48 2xl:gap-16'>
                <div className='flex flex-col justify-center items-start p-8 2xl:p-16 gap-8 '>
                    <p className='text-3xl 2xl:text-6xl tracking-widest uppercase'>Ilham</p>

                    <p className='text-3xl 2xl:text-6xl tracking-widest uppercase'>Soejud</p>
                    <p className='text-3xl 2xl:text-6xl tracking-widest uppercase'>Alkahfiardy</p>
                </div>
                <div className='pl-16'>
                    <img src={Image} className='grayscale w-24 2xl:w-32' alt="" />
                </div>
            </div>
            <div className='hidden lg:block w-3/4 h-full '>
                <div className='w-full h-[30vh] flex pl-32 items-center'>
                    <p className='text-3xl 2xl:text-6xl tracking-[.35em] font-light'>PROJECTS</p>
                </div>
                <div className='w-full h-[30vh] flex pl-32 items-center border-t border-b border-black'>
                    <p className='text-3xl 2xl:text-6xl tracking-[.35em]'>INTERNSHIPS</p>
                </div>
                <div className='w-full h-[30vh] flex pl-32 items-center'>
                    <p className='text-3xl 2xl:text-6xl tracking-[.35em]'>EDUCATION</p>
                </div>
                <div className='w-full h-[10vh] flex pl-32  items-center border-t border-black gap-16'>

                    <FaGithub className='scale-150 hover:cursor-pointer hover:scale-[2] ease-in-out duration-300'></FaGithub>
                    <FaGitlab className='scale-150 hover:cursor-pointer hover:scale-[2] ease-in-out duration-300'></FaGitlab>
                    <FaInstagram className='scale-150 hover:cursor-pointer hover:scale-[2] ease-in-out duration-300'></FaInstagram>
                    <FaLinkedin className='scale-150 hover:cursor-pointer hover:scale-[2] ease-in-out duration-300'></FaLinkedin>

                </div>

            </div>

            {/* Mobile View */}

            <div className='h-full lg:hidden w-full flex flex-col'>

                <div className='w-full h-[20vh] bg-red-400 flex items-center pl-12 '>
                    <p className='text-5xl'>Project</p>
                </div>
                <div className='w-full h-[20vh] bg-red-400 flex items-center pl-12 border-t border-b border-black'>
                    <p className='text-5xl'>Project</p>
                </div>
                <div className='w-full h-[20vh] bg-red-400 flex items-center pl-12 border-b border-black'>
                    <p className='text-5xl'>Project</p>
                </div>
                <div className='w-full h-[10vh] bg-red-400 flex items-center pl-12 border-b border-black gap-16'>
                    <FaGithub className=' hover:cursor-pointer hover:scale-125 ease-in-out duration-300'></FaGithub>
                    <FaGitlab className=' hover:cursor-pointer hover:scale-125 ease-in-out duration-300'></FaGitlab>
                    <FaInstagram className=' hover:cursor-pointer hover:scale-125 ease-in-out duration-300'></FaInstagram>
                    <FaLinkedin className=' hover:cursor-pointer hover:scale-125 ease-in-out duration-300'></FaLinkedin>
                </div>
            </div>
        </>
    )
}

export default LandingPage