import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import Logo from '../assets/jk.png'
import {Link} from 'react-scroll'

const Navbar = ({ darkTheme, setDarkTheme }) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='w-full h-[80px] bg-white dark:bg-gray-900 flex justify-between items-center px-4 border-b dark:border-gray-700 top-0 z-50'>
        <div>
            <img src={Logo} alt='Logo Image' style={{width: '50px'}} />
        </div>

        {/* desktop menu */}
        <ul className='hidden md:flex mx-auto text-xl'>
            <li><Link to="home" smooth={true} duration={500}>Bio</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="weather" smooth={true} duration={500}>Weather</Link></li>
        </ul>

        <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
            {darkTheme ? '💡' : '🌙'}
        </button>

        {/* hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen dark:bg-gray-900 dark:text-white bg-[whitesmoke] flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Bio</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="weather" smooth={true} duration={500}>Weather</Link></li>
            </ul>
        </div>
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="www.linkedin.com/in/jeremy-kenney-5946a1284">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/PolarJerClub">
                        Github <FaGithub size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar