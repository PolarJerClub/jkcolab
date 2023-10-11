import React from 'react'
import Gpt from '../assets/gpt.jpg'
import RH from '../assets/robinhood.png'
import Message from '../assets/message.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mx-auto'>
                <p className='text-4xl font-bold inline'>Projects</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* items */}
                <div  style={{backgroundImage: `url(${Gpt})`}}
                className='shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS ChatGPT App
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white hover:opacity-70'>Demo</button>
                            </a> */}
                            <a href="https://github.com/PolarJerClub/chatapp_gpt.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white hover:opacity-70'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div  style={{backgroundImage: `url(${RH})`}}
                className='shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Robinhood Clone App
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="https://rhstockclone.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white hover:opacity-70'>Demo</button>
                            </a> */}
                            <a href="https://github.com/PolarJerClub/rhclone.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white hover:opacity-70'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div  style={{backgroundImage: `url(${Message})`}}
                className='shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Messenger App
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="https://jkchat.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white hover:opacity-70'>Demo</button>
                            </a> */}
                            <a href="https://github.com/PolarJerClub/jkchat.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white hover:opacity-70'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects