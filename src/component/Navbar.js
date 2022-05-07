import React from 'react'
import logo from '../images/logo.png'
import Fade from 'react-reveal/Fade'

const Navbar = () => {
  return (
    <Fade top>
      <div className="flex h-[40px] absolute w-full z-10 mt-10 sm:px-20 px-10 items-center justify-between">
        <img className='w-[40px]' src={logo} alt="logo" />
        <ul className='sm:flex hidden'>
          <li className='px-5'><a href="/">Acceuil</a></li>
          <li className='px-5'><a href="/">Application</a></li>
          <li className='px-5'><a href="/">Prix</a></li>
          <li className='px-5'><a href="/">Contact</a></li>
        </ul>
        <div className="rounded-10 bg-[#fffff]">
          <a className='px-5 py-5 bg-[#fffff]' href="/">Rejoindre</a>
        </div>
      </div>
    </Fade>
  )
}

export default Navbar