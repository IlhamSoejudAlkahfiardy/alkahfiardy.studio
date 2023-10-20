import React from 'react'
import Layout from './Layout'

import LandingPage from '../components/LandingPage'

const Home = () => {
    return (
        <Layout>
            <div className='min-h-fit w-full flex'>

                <LandingPage />

            </div>
        </Layout>
    )
}

export default Home