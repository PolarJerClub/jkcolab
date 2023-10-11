import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>

        {/* container */}
        <div className='h-screen max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center'>
            <p className='text-2xl sm:text-2xl font-bold'>Hi! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold'>Jeremy Kenney</h1>
            <h2 className='text-2xl sm:text-5xl font-bold'>I'm an aspiring Full Stack Developer</h2>
            <p className='sm:text-xl text-sm py-4 max-w-[700px] overflow-y-auto'>
              Much of my working history involves working with teams. Mostly in restaurants, but I have also worked
              as a landscaper, massage therapist, as well as a solar sales consultant and solar system installer.
              <br />
              Coding is something I've enjoyed for a few years, but it wasn't until this year that I decided
              to attempt to make a career of it. Having graduated Coding Temple's software engineering program,
              I feel I am ready to take the next step in my programming journey.
              <br />
              Below you will find skills I have gained and a few of my projects. You may visit my GitHub profile
              as well as LinkedIn on the sidebar. I have also called upon openweather's api; I love to be outdoors, 
              either running or playing disc golf. A weather app is important for outdoor activities!
              </p>
            {/* <div>
                <button className='text-white text-xl font-bold bg-black border-2 px-6 py-4 my-2 flex items-center
                hover:opacity-60 transition ease-in-out duration-150'>See Projects<HiArrowNarrowRight className='ml-4'/></button>
            </div> */}
        </div>


    </div>
  )
}

export default Home