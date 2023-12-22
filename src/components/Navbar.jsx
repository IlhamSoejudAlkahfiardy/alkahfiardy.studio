import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const page = useLocation().pathname

    return (
        <>

            <NavbarDesktop
            page={page}
            />
            <NavbarMobile
                open={open}
            />
            <HamburgerMenu
                open={open}
                setOpen={setOpen}
            />

        </>
    )
}

const NavbarDesktop = (props) => {
    return (
        <div className='w-full hidden lg:flex h-32  py-10 border-b border-white/30 bg-slate-900 '>
            <div className='container flex justify-evenly items-end mx-auto'>

                <Link to="/" className={`text-slate-200  text-sm tracking-widest hover:cursor-pointer`}>Home</Link>
                <Link to="/project" className={`text-slate-200 ${props.page == '/project' ? "font-bold" :""} text-sm tracking-widest hover:cursor-pointer`}>Projects</Link>
                <Link to="/education" className={`text-slate-200 ${props.page == '/education' ? "font-bold" :""} text-sm tracking-widest hover:cursor-pointer`}>Education</Link>
                <Link to="/internship" className={`text-slate-200 ${props.page == '/internship' ? "font-bold" :""} text-sm tracking-widest hover:cursor-pointer`}>Internships</Link>
                <Link to="/contact-me" className={`text-slate-200 ${props.page == '/conntact-me' ? "font-bold" :""} text-sm tracking-widest hover:cursor-pointer`}>Contact me</Link>
            </div>
        </div>
    )
}

const NavbarMobile = ({ open }) => {
    return (
        <div className={`w-fit h-full z-50 bg-gradient-to-b from-slate-900 to-slate-950  border-b absolute ${open ? "left-0" : "-left-48"} transition-all duration-500 border-slate-500 flex flex-col items-start py-10 gap-10 px-10 border border-white/10 shadow-2xl`}>
            <div className='border-b border-white/20 w-full flex justify-center items-center pb-10'>
                <p className='text-slate-200 font-semibold'>
                    Skills Studio
                </p>
            </div>
            <div className='flex flex-col gap-10'>
                <Link to="/" className='text-slate-200 text-sm tracking-widest hover:cursor-pointer'>Home</Link>
                <Link to="/project" className='text-slate-200 text-sm tracking-widest hover:cursor-pointer'>Projects</Link>
                <Link to="/education" className='text-slate-200 text-sm tracking-widest hover:cursor-pointer'>Education</Link>
                <Link to="/internship" className='text-slate-200 text-sm tracking-widest hover:cursor-pointer'>Internships</Link>
                <Link to="/contact-me" className='text-slate-200 text-sm tracking-widest hover:cursor-pointer'>Contact me</Link>
            </div>
        </div>
    )
}

export default Navbar