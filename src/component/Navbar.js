import React from 'react'
import logo from '../images/logo.webp'
import Fade from 'react-reveal/Fade'

const Navbar = ({close}) => {
  return (
    <Fade top>
      <div className="flex h-[70px] backdrop-blur-sm fixed bg-[rgba(0,0,0,0.2)] w-full z-10 sm:px-20 px-10 items-center justify-between">
        <img className='w-[40px]' src={logo} alt="logo" />
        <ul className='sm:flex hidden'>
          <li className='px-5'><a href="#home">Acceuil</a></li>
          <li className='px-5'><a href="#about">A propos</a></li>
          <li className='px-5'><a href="#price">Prix</a></li>
          <li className='px-5'><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={close} className="rounded-10 bg-[#fffff] block">
        FR | EN
        </button>
      </div>
    </Fade>
  )
}

export default Navbar