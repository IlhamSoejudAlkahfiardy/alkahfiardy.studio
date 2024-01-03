import React from 'react'
import Layout from './Layout'
import { useState } from 'react'
import Educations from '../assets/data/educations'

const Education = () => {
    const [education, setEducation] = useState('university')

    return (
        <Layout>
            <div className='w-full min-h-screen flex justify-center'>
                <div className='w-2/3 mx-auto container flex flex-col my-10'>
                    <div className='w-full flex justify-evenly '>
                        <div className='w-1/3 flex justify-center items-center '>
                            <p onClick={() => setEducation('vocational')} className={`text-sm hover:cursor-pointer px-3 py-1 rounded-full transition-all duration-300 ${education == 'vocational' ? "text-zinc-900 bg-slate-200" : "text-slate-200 "}`}>Vocational High School</p>
                        </div>
                        <div className={`w-1/3 flex justify-center items-center border-x border-slate-200 `}>
                            <p onClick={() => setEducation('university')} className={`text-sm hover:cursor-pointer px-3 py-1 rounded-full transition-all duration-300 ${education == 'university' ? "text-zinc-900 bg-slate-200" : "text-slate-200 "}`}>University</p>
                        </div>
                        <div className='w-1/3 flex justify-center items-center '>
                            <p onClick={() => setEducation('msib')} className={`text-sm hover:cursor-pointer px-3 py-1 rounded-full transition-all duration-300 ${education == 'msib' ? "text-zinc-900 bg-slate-200" : "text-slate-200 "}`}>MSIB</p>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex items-center mt-20 p-4'>
                        <div className='w-full flex gap-24 items-center'>
                            <div className='w-24 h-24 border rounded-full'>
                                <p>logo</p>
                            </div>
                            <p className='text-slate-200'>Title</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Education