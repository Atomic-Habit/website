import React from 'react'
import {Fade} from 'react-awesome-reveal'

function ComingSoon({handler}) {
    return (
        <div id='comming-soon' className='coming-soon max-h-[1000px] h-[100vh] w-full flex items-center justify-center flex-col z-10 leading-tight'>

            <h2 className='text-center md:text-[50px] sm:text-[40px] text-[25px] font-bold leading-tight'>
                <Fade direction='up'>
                    <span className='inline-block px-10 linew'>
                        Bientôt l’heure de prendre de bonnes habitudes !
                    </span>
                    <span className='text-[#BC9CFF] inline-block mt-4'>En juillet dans l’App store.</span>
                </Fade>

            </h2>
            <Fade  direction='up'>
                <p className='sm:text-[20px] text-[12px] pt-6 md:w-[600px] sm:w-[400px] md:max-w-[4000px] max-w-[400px] sm:px-0 px-10 text-center leading-tight'>En attendant vous pouvez participer au développement de ce projet en nous suivant sur  <a target="_blank" href='https://www.instagram.com/atomichabits.app' rel="noreferrer" className='underline'>Instagram</a> ou en nous <span onClick={() => handler()} className='underline cursor-pointer'>rejoignant.</span></p>
            </Fade>
        </div>
    )
}

export default ComingSoon