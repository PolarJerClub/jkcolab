import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='mx-auto py-4'>
                <p className='text-4xl font-bold inline py-4'>Tech Stacks</p>
            </div>

            <div className='w-full grid grid-cols-4 sm:grid-flow-cols-2 gap-4 text-center py-8'>
                <div className='bg-[#FFF6C9] shadow-md shadow-[black] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={HTML} alt="HTML" />
                    <p className='my-4 dark:text-black'>HTML</p>
                </div>
                <div className='bg-[#FFF3D1] shadow-md shadow-[black] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={CSS} alt="HTML" />
                    <p className='my-4 dark:text-black'>CSS</p>
                </div>
                <div className='bg-[#FFECD6] shadow-md shadow-[black] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={JavaScript} alt="HTML" />
                    <p className='my-4 dark:text-black'>JavaScript</p>
                </div>
                <div className='bg-[#FFE2C0] shadow-md shadow-[black] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={ReactImg} alt="HTML" />
                    <p className='my-4 dark:text-black'>React</p>
                </div>
                <div className='bg-[#FFD8C8] shadow-md shadow-[black] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={Node} alt="HTML" />
                    <p className='my-4 dark:text-black'>Node</p>
                </div>
                <div className='bg-[#FFD2BF] shadow-md shadow-[black] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={FireBase} alt="HTML" />
                    <p className='my-4 dark:text-black'>FireBase</p>
                </div>
                <div className='bg-[#FFC6B4] shadow-md shadow-[black] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={GitHub} alt="HTML" />
                    <p className='my-4 dark:text-black'>GitHub</p>
                </div>
                <div className='bg-[#F7CAC3] shadow-md shadow-[black] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-2' src={Tailwind} alt="HTML" />
                    <p className='my-4 dark:text-black'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills