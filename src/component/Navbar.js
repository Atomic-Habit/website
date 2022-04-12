import React from 'react'
import logo from '../images/logo.png'
import Fade from 'react-reveal/Fade'

const Navbar = () => {
  return (
    <Fade top>
    <div className="flex h-[60px] mt-10 justify-center">
      <img src={logo} alt="logo" />
    </div>
    </Fade>
  )
}

export default Navbar