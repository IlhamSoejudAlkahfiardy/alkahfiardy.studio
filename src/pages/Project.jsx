import React from 'react'
import Layout from './Layout'
import Navbar from '../components/Navbar'
import Pattern from '../assets/images/pattern/pattern.jpg'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

// Projects
import HairHub from '../assets/projects/hairhub.png'
import BeraniBicara from '../assets/projects/beranibicara.png'
import HavenBook from '../assets/projects/havenbook.png'
import Bank from '../assets/projects/bank.png'
import HamburgerMenu from '../components/HamburgerMenu'
import { useState } from 'react'
import Footer from '../components/Footer'

const Project = () => {
    const [open, setOpen] = useState(false)
    const numbers = [1, 2, 3]

    const latestProjects = [
        {
            id: 0,
            image: HairHub,
            title: "HairHub",
            hosting: "https://www.hairhub.id",
            github: 'https://github.com/IlhamSoejudAlkahfiardy/frontend-MassiveProject-InfiniteLearning',
            teams: [
                {
                    name: 'Danang',
                    role: 'Hacker'
                },
                {
                    name: 'Ilham',
                    role: 'Hacker'
                },
                {
                    name: 'Tiara',
                    role: 'Hacker'
                },
                {
                    name: 'Asmali',
                    role: 'Project Manager'
                },
                {
                    name: 'Ariska',
                    role: 'Hipster'
                },
                {
                    name: 'Ismi',
                    role: 'Hipster'
                },
                {
                    name: 'Syita',
                    role: 'Hipster'
                },
            ]
        },
        {
            id: 1,
            image: BeraniBicara,
            title: "Berani Bicara",
            hosting: "https://beranibicara.my.id/",
            github: 'https://github.com/IlhamSoejudAlkahfiardy/macro-project-IL',
            teams: [
                {
                    name: 'Danang',
                    role: 'Hacker'
                },
                {
                    name: 'Ilham',
                    role: 'Hacker'
                },
                {
                    name: 'Rafael',
                    role: 'Project Manager'
                },
                {
                    name: 'Tania',
                    role: 'Hipster'
                },
                {
                    name: 'Gilang',
                    role: 'Hipster'
                },
                {
                    name: 'Adit',
                    role: 'Hipster'
                },
            ]
        },
        {
            id: 2,
            image: HavenBook,
            title: "the Havenbook",
            hosting: "-",
            github: '-',
            teams: [
                {
                    name: 'Ilham',
                    role: 'Hacker'
                },
                {
                    name: 'Tommy',
                    role: 'Hacker'
                },
                {
                    name: 'Arini',
                    role: 'Hipster'
                },

            ]
        },
    ]

    const archiveProjects = [
        {
            id: 0,
            image: Bank,
            title: "VA Payment",
            hosting: "-",
            github: '-',
            teams: [
                {
                    name: 'Ilham',
                    role: 'Hacker'
                },
                {
                    name: 'Tommy',
                    role: 'Hacker'
                },
                {
                    name: 'Arini',
                    role: 'Hipster'
                },

            ]
        }
    ]

    const click = (e) => {
        window.open(e)
    }

    return (
        <Layout>
            <div className='w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-950'>
                <div className='container mx-auto px-5'>
                    <Navbar open={open} setOpen={setOpen} />
                    <div className='pt-5 lg:hidden w-full flex items-center justify-between'>
                        <HamburgerMenu open={open} setOpen={setOpen} />
                        <p className='text-slate-200 text-lg'>Projects</p>
                    </div>
                    <div className='px-0 pt-5 flex flex-col gap-2 md:px-36 lg:px-10 xl:px-20 '>
                        <p className='text-sm text-slate-300'>Latest Project</p>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 '>
                            {latestProjects.map((project, index) => (
                                <div className='h-48 rounded-md'>
                                    <div className='w-full h-full rounded-md backdrop-blur-md border border-white/20 bg-white/10  shadow-slate-700 py-5 px-7 flex flex-col justify-between'>
                                        <div className='w-full flex'>
                                            <div className='w-1/5 flex items-center justify-start'>
                                                <div className='w-12 h-auto aspect-square rounded-full' style={{ backgroundImage: `url(${project.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

                                                </div>
                                            </div>
                                            <div className='w-3/5 flex flex-col text-slate-200 gap-3'>
                                                <p className='text-base font-semibold tracking-wider'>{project.title}</p>
                                                <p onClick={()=>click(project.hosting)} className='text-xs hover:cursor-pointer'>{project.hosting}</p>
                                            </div>
                                            <div className='w-1/5 flex justify-end items-start'>
                                                <MdOutlineOpenInNew onClick={() => click(project.hosting)} className='hover:cursor-pointer w-5 h-5 text-slate-200' />
                                            </div>
                                        </div>
                                        <div className='w-full flex gap-5 items-center justify-between'>
                                            <div className='w-3/4 flex items-center gap-3'>
                                                <FaGithub className='w-5 h-5 text-slate-300 shadow drop-shadow' />
                                                <p onClick={() => click(project.github)} className='text-xs hover:cursor-pointer truncate w-full text-slate-200'>
                                                    {project.github}
                                                </p>
                                            </div>
                                            <div className='flex items-center justify-end'>
                                                <RiTeamFill className='w-5 h-5 text-slate-300' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pt-10 flex flex-col gap-2 md:px-36 lg:px-10 xl:px-20 '>
                        <p className='text-sm text-slate-300'>Archive Project</p>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                            {archiveProjects.map((project, index) => (
                                <div className='h-48 rounded-md'>
                                    <div className='w-full h-full rounded-md backdrop-blur-md border border-white/20 bg-white/10  shadow-slate-700 py-5 px-7 flex flex-col justify-between'>
                                        <div className='w-full flex'>
                                            <div className='w-1/5 flex items-center justify-start'>
                                                <div className='w-12 h-auto aspect-square rounded-full' style={{ backgroundImage: `url(${project.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

                                                </div>
                                            </div>
                                            <div className='w-3/5 flex flex-col text-slate-200 gap-3'>
                                                <p className='text-base font-semibold tracking-wider'>{project.title}</p>
                                                <p className='text-xs'>{project.hosting}</p>
                                            </div>
                                            <div className='w-1/5 flex justify-end items-start'>
                                                <MdOutlineOpenInNew onClick={() => click(project.hosting)} className='hover:cursor-pointer w-5 h-5 text-slate-200' />
                                            </div>
                                        </div>
                                        <div className='w-full flex gap-5 items-center justify-between'>
                                            <div className='w-3/4 flex items-center gap-3'>
                                                <FaGithub className='w-5 h-5 text-slate-300 shadow drop-shadow' />
                                                <p onClick={() => click(project.github)} className='text-xs hover:cursor-pointer truncate w-full text-slate-200'>
                                                    {project.github}
                                                </p>
                                            </div>
                                            <div className='flex items-center justify-end'>
                                                <RiTeamFill className='w-5 h-5 text-slate-300' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default Project