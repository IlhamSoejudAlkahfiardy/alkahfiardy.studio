import React from 'react'

const HamburgerMenu = ({ open, setOpen }) => {
    return (
        <button
            onClick={() => setOpen(!open)}
            className={`m-3 z-20 focus:outline-none lg:hidden transition-all duration-500 ${open ? "ml-48 rotate-180" : "left-0 -rotate-0"} `}
        >
            <svg
                className="w-10 h-10 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className='text-slate-200'
                    d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        </button>
    )
}

export default HamburgerMenu