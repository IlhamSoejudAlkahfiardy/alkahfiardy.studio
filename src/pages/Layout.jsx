import React from 'react'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="">
                <div className="font-fontPoppins">{children}</div>
            </div>

        </React.Fragment>
    )
}

export default Layout