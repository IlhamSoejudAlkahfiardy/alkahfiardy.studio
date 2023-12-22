import React from 'react'
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { RiTeamFill } from "react-icons/ri";

const ProjectCard = (props) => {
    
    const click = (e) => {
        window.open(e)
    }
    return (
        <div className='h-48 rounded-md'>
            <div className='w-full h-full rounded-md backdrop-blur-md border border-slate-200/50 bg-slate-600/30 hover:bg-slate-700/30 transition-all duration-300 hover:cursor-pointer  shadow-slate-700 py-5 px-7 flex flex-col justify-between'>
                <div className='w-full flex'>
                    <div className='w-1/5 flex items-center justify-start'>
                        <div className='w-12 h-auto aspect-square rounded-full' style={{ backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

                        </div>
                    </div>
                    <div className='w-3/5 flex flex-col text-slate-200 gap-3'>
                        <p className='text-base font-semibold tracking-wider line-clamp-1'>{props.title}</p>
                        <p onClick={() => props.click(props.hosting)} className='text-xs hover:cursor-pointer'>{props.hosting}</p>
                    </div>
                    <div className='w-1/5 flex justify-end items-start'>
                        <MdOutlineOpenInNew onClick={() => click(props.hosting)} className='hover:cursor-pointer w-5 h-5 text-slate-200' />
                    </div>
                </div>
                <div className='w-full flex gap-5 items-center justify-between'>
                    <div className='w-3/4 flex flex-col'>
                        <div className='w-full flex items-center gap-3'>
                            <FaGithub className='w-5 h-5 text-slate-300 shadow drop-shadow' />
                            <p onClick={() => click(props.github)} className='text-xs hover:cursor-pointer truncate w-full text-slate-200'>
                                {props.github}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <RiTeamFill className='w-5 h-5 text-slate-300' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard