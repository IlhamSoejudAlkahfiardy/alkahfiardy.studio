import React, { useState } from 'react'
import Layout from './Layout'
import LatestProjects from '../assets/data/latestProjects'
import ArchiveProjects from '../assets/data/archiveProjects'
import ProjectCard from '../components/ProjectCard'
import { IoIosArrowForward } from "react-icons/io";


const Project = () => {
    const [show, setShow] = useState(false)

    return (
        <Layout>
            <div className='w-full pb-20 min-h-screen my-auto'>
                <div className='container mx-auto px-5 md:px-36 lg:px-10 xl:px-0 2xl:px-10'>
                    <div className=' lg:hidden w-full flex items-center'>
                        <p className='text-slate-200 text-lg'>Projects</p>
                    </div>
                    <div className='px-0 pt-5 flex flex-col gap-2  '>
                        <p className='text-sm text-slate-300'>Latest Project</p>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 '>
                            {LatestProjects.map((project, index) => (
                                <ProjectCard
                                    image={project.image}
                                    title={project.title}
                                    hosting={project.hosting}
                                    github={project.github}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='pt-10 flex flex-col gap-2'>
                        <div onClick={() => setShow(!show)} className='flex w-fit gap-5 items-center hover:cursor-pointer'>
                            <p className='text-sm text-slate-300'>Archive Project</p>
                            <p className='text-xs  text-slate-200'><IoIosArrowForward className={`scale-150 text-slate-200 transition-all ${show ? "rotate-90" : "rotate-0"}`} /></p>
                        </div>
                        <div className={`w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 ${show ? "grid" : "hidden"} `}>
                            {ArchiveProjects.map((project, index) => (
                                <ProjectCard
                                    image={project.image}
                                    title={project.title}
                                    hosting={project.hosting}
                                    github={project.github}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Project