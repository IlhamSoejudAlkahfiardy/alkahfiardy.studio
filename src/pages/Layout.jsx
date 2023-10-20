import React from 'react'

const Layout = ({ children }) => {
    return (
        <React.Fragment>

            <div className="">
                <div className="font-fontBigShouldersStencilText">{children}</div>
            </div>

        </React.Fragment>
    )
}

export default Layout