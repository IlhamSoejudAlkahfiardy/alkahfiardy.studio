import React from 'react'
import Layout from '../pages/Layout'

const DetailProject = (props) => {
    return (
        <Layout>
            <div className='w-full min-h-screen flex justify-center items-center'>
                <p className='text-slate-200'>Detail project {props.id}</p>
            </div>
        </Layout>
    )
}

export default DetailProject