import React from 'react'
import {Fade} from 'react-awesome-reveal'

function ComingSoon() {
    return (
        <div className='coming-soon max-h-[1000px] h-[100vh] w-full flex items-center justify-center flex-col z-10'>

            <h2 className='text-center md:text-[50px] sm:text-[40px] text-[25px] font-bold leading-tight'>
                <Fade direction='up'>
                    <span className='inline-block px-10 pb-4'>
                        Bientôt  l’heure de prendre de bonnes habitudes !
                    </span>
                </Fade >
                < br />
                <Fade  direction='up'>
                    <span className='text-[#BC9CFF] inline-block'>En juin dans l’App store.</span>
                </Fade>

            </h2>
            <Fade  direction='up'>
                <p className='sm:text-[20px] text-[12px] pt-6 md:w-[600px] sm:w-[400px] md:max-w-[4000px] max-w-[400px] sm:px-0 px-10 text-center leading-tight'>En attendant vous pouvez soutenir le projet en nous rejoignant sur Instagram ou en rejoignant le projet.</p>
            </Fade>
        </div>
    )
}

export default ComingSoon