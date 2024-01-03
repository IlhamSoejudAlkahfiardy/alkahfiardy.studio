import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGitlab } from 'react-icons/fa';
import { useState } from 'react';
import Logo from '../assets/icons/icon2.jpeg'

const LandingPage = () => {
    const [project, setProject] = useState(false)
    const [internship, setInternship] = useState(false)
    const [education, setEducation] = useState(false)



    return (
        <>
            <HomeDesktop />
            <HomeMobile />
        </>
    )
}

const HomeDesktop = () => {

    const clickSosmed = (e) => {
        window.open(e)
    }
    return (
        <>
            <div className='hover:cursor-crosshair hidden lg:flex lg:flex-col w-1/4 h-screen flex-col justify-between border-r  text-white border-slate-500/30 xl:gap-10'>
            <div className='border-b h-[22.5vh] border-white/20 w-full flex justify-center items-center' style={{ backgroundImage:`url(${Logo})`, backgroundPosition:'center', backgroundSize:'cover' }}>
                {/* <p className='text-slate-200 text-lg font-semibold bg-slate-900 p-10'>
                    Skills Studio
                </p> */}
            </div>
                <div className='w-full flex flex-col gap-5'>
                    <Link to="/about-me" className='w-3/4 mx-auto flex items-center justify-center h-20 transition-all hover:bg-slate-800/80'>
                        <p className=' text-center text-2xl  '>About me</p>
                    </Link>
                    <hr className='w-3/4 mx-auto border-t border-slate-500/30' />
                    <div className='flex flex-col justify-center items-start p-8 xl:p-16 gap-8 selection:text-black selection:bg-white'>
                        <p className='text-2xl 2xl:text-4xl   uppercase'>Ilham</p>
                        <p className='text-2xl 2xl:text-4xl   uppercase'>Soejud</p>
                        <p className='text-2xl 2xl:text-4xl   uppercase'>Alkahfiardy</p>
                    </div>
                </div>

            </div>
            <div className='hidden lg:block w-3/4 h-full selection:text-black selection:bg-white'>
                <Link to="/project" className={`w-full h-[22.5vh] hover:backdrop-blur-sm hover:bg-slate-800/50 flex px-32 items-center hover:cursor-crosshair transition-all text-white`}>
                    <div className={`w-full text-2xl 2xl:text-4xl `}>PROJECTS</div>
                </Link>
                <Link to="/internship" className={`w-full h-[22.5vh] border-t border-b border-slate-500/30 hover:backdrop-blur-sm hover:bg-slate-800/50 flex px-32 items-center hover:cursor-crosshair transition-all text-white`}>
                    <p className={`w-full text-2xl 2xl:text-4xl `}>INTERNSHIPS</p>
                </Link>
                <Link to="/education" className={`w-full h-[22.5vh] border-b border-slate-500/30 hover:backdrop-blur-sm hover:bg-slate-800/50 flex px-32 items-center hover:cursor-crosshair transition-all text-white`}>
                    <p className={`w-full text-2xl 2xl:text-4xl `}>EDUCATION</p>
                </Link>
                <Link to="/contact-me" className={`w-full h-[22.5vh] hover:backdrop-blur-sm hover:bg-slate-800/50 flex px-32 items-center hover:cursor-crosshair transition-all text-white`}>
                    <p className={`w-full text-2xl 2xl:text-4xl `}>CONTACT ME</p>
                </Link>

                <div className='w-full h-[10vh] flex px-32  items-center border-t border-slate-500/30 justify-around'>

                    <FaGithub onClick={() => clickSosmed('https://github.com/IlhamSoejudAlkahfiardy')} className='scale-150 w-5 h-5 text-white hover:cursor-pointer hover:scale-[2] ease-in-out duration-300'></FaGithub>
                    <FaGitlab onClick={() => clickSosmed('https://gitlab.com/alkahfiardyIlhamSoejud')} className='scale-150 w-5 h-5 text-white hover:cursor-pointer hover:scale-[2] ease-in-out duration-300'></FaGitlab>
                    <FaInstagram onClick={() => clickSosmed('https://www.instagram.com/ilhamsoejud/')} className='scale-150 w-5 h-5 text-white hover:cursor-pointer hover:scale-[2] ease-in-out duration-300'></FaInstagram>
                    <FaLinkedin onClick={() => clickSosmed('https://www.linkedin.com/in/ilhamsoejudalkahfiardy/')} className='scale-150 w-5 h-5 text-white hover:cursor-pointer hover:scale-[2] ease-in-out duration-300'></FaLinkedin>

                </div>

            </div>
        </>
    )
}

const HomeMobile = () => {

    const clickSosmed = (e) => {
        window.open(e)
    }
    return (
        <div className='min-h-screen lg:hidden w-full flex flex-col justify-between'>

            <div className='w-full flex-col px-12 md:px-28 bg-gradient-to-r from-slate-950 to-slate-900 selection:bg-white'>
                <Link to="/project" className='w-full  h-[20vh]  flex items-center  '>
                    <p className={`text-slate-200 rounded-md hover:text-right hover:bg-white hover:text-zinc-800 transition-all border border-slate-200/50 py-5 px-8 w-full text-3xl`}>PROJECTS</p>
                </Link>
                <Link to="/internship" className='w-full  h-[20vh]  flex items-center  '>
                    <p className={`text-slate-200 rounded-md hover:text-right hover:bg-white hover:text-zinc-800 transition-all border border-slate-200/50 py-5 px-8 w-full text-3xl`}>INTERNSHIPS</p>
                </Link>
                <Link to="/education" className='w-full  h-[20vh]  flex items-center  '>
                    <p className={`text-slate-200 rounded-md hover:text-right hover:bg-white hover:text-zinc-800 transition-all border border-slate-200/50 py-5 px-8 w-full text-3xl`}>EDUCATION</p>
                </Link>
                <Link to="/contact-me" className='w-full  h-[20vh]  flex items-center  '>
                    <p className={`text-slate-200 rounded-md hover:text-right hover:bg-white hover:text-zinc-800 transition-all border border-slate-200/50 py-5 px-8 w-full text-3xl`}>CONTACT ME</p>
                </Link>
            </div>

            <div className='w-full flex justify-evenly items-center h-full bg-gradient-to-r from-slate-950 to-slate-900'>
                <FaGithub onClick={() => clickSosmed('https://github.com/IlhamSoejudAlkahfiardy')} className='w-7 h-7 text-slate-200 hover:cursor-pointer hover:scale-125 ease-in-out duration-300'></FaGithub>
                <FaGitlab onClick={() => clickSosmed('https://gitlab.com/alkahfiardyIlhamSoejud')} className='w-7 h-7 text-slate-200 hover:cursor-pointer hover:scale-125 ease-in-out duration-300'></FaGitlab>
                <FaInstagram onClick={() => clickSosmed('https://www.instagram.com/ilhamsoejud/')} className='w-7 h-7 text-slate-200 hover:cursor-pointer hover:scale-125 ease-in-out duration-300'></FaInstagram>
                <FaLinkedin onClick={() => clickSosmed('https://www.linkedin.com/in/ilhamsoejudalkahfiardy/')} className='w-7 h-7 text-slate-200 hover:cursor-pointer hover:scale-125 ease-in-out duration-300'></FaLinkedin>
            </div>
        </div>
    )
}

export default LandingPage