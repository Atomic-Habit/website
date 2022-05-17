import React from 'react'
import {Fade} from 'react-awesome-reveal'
const Footer = () => {
  return (
    <footer id='contact'>
      <div className="py-40 sm:px-20 flex items-center justify-center w-full flex-col">
        <Fade cascade direction='up' damping={0.2}>
        <p className='sm:text-[25px] text-[15px]'>Une question ? Une demande ? Contactez-nous !</p>
        <a className='sm:text-[40px] text-[25px]  font-bold underline' href="mailto:hello.atomichabits@gmail.com">hello.atomichabits@gmail.com</a>
        </Fade>

        <Fade>
        <p className='mt-20 sm:text-[25px] text-[15px]'>Suivez-nous sur les différents réseaux.</p>
        </Fade>
        <Fade cascade direction='up' damping={0.2}>
        <ul className='flex sm:text-[25px] text-[20px]'>
          <li><a className='underline font-bold ' href="/">Instagram</a></li>
          <span className='mx-2 '> - </span>
          <li><a className='underline font-bold' href="/">Twitter</a></li>
          <span className='mx-2 '> - </span>
          <li><a  className='underline font-bold ' href="/">Medium</a></li>
        </ul>
        </Fade>
      </div>
    </footer>
  )
}

export default Footer