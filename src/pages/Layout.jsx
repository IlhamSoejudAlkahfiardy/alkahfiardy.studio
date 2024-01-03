import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const page = useLocation().pathname
    return (
        <React.Fragment>
            <div className="selection:bg-white selection:text-black bg-gradient-to-b from-slate-900 to-slate-950">
                {page != '/' ? (

                    <Navbar />
                ) : ('')}

                <div className="font-fontPoppins ">{children}</div>

                {page != '/' ? (

                    <Footer />
                ) : ('')}
            </div>

        </React.Fragment>
    )
}

export default Layout