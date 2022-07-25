import React, { useState } from 'react'
import logo from '../images/logo.webp'
import {Fade} from 'react-awesome-reveal'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = ({close}) => {

  const [navTheme, setNavTheme] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setNavTheme(location.pathname.match('/article'))
  }, [location.pathname])

  return (
      <div className={`flex pt-10 pb-5 ${!navTheme ? "fixed bg-[rgba(0,0,0,0.2)] backdrop-blur-sm text-[#fff]" : "absolute text-[#000]"} transition-all duration-500 ease-in-out w-full z-10 sm:px-20 px-10 items-center justify-between`}>
        <img className='w-[40px]' src={logo} alt="logo" />
        <ul className='sm:flex hidden'>
          <li className='px-5'><Link to="/">Acceuil</Link></li>
          <li className='px-5'><a href="#about">A propos</a></li>
          <li className='px-5'><Link to="/articles">Articles</Link></li>
          <li className='px-5'><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={close} className={`rounded-[10px] text-[15px] p-2 px-10 ${navTheme ? "bg-[#000] text-[#fff]" : "bg-[#fff] text-[#000]"} block`}>Rejoindre</button>
      </div>
  )
}

export default Navbar