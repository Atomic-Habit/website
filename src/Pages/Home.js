import React, { useState } from 'react'
import iphone1 from '../images/iPhones.png'
import {Fade} from 'react-awesome-reveal'
import ComingSoon from '../component/ComingSoon'
import Price from '../component/Price'
//import Subscribe from '../component/Subscribe'

const Home = () => {

  const [showSubscribe, setShowSubscribe] = useState(false)

  return (
    <>
      <section className='w-full flex md:flex-row flex-col h-[100vh] max-h-[1000px] items-center sm:justify-center justify-center md:pt-0 pt-40 mb-20 lg:px-40 md:px-10 sm:px-20'>

        <div className="md:flex-1 flex flex-col md:items-start items-center justify-center w-full">
          <Fade cascade direction='up'>
            <h1 className="md:text-[35px] sm:text-[40px] text-[30px] md:text-left text-center leading-none font-bold font-black ">
              <span className='inline-block'>
                Vous voulez devenir<br />
                meilleur que la veille ?<br />
              </span>
              <span className='custom-text inline-block'>Laissez nous vous aider.</span>
            </h1>
          </Fade>
          <Fade direction='up'>
            <div className="">
              <div onClick={() => setShowSubscribe(!showSubscribe)} className=" bg-[#ffffff] mt-10 px-10 py-3 md:rounded-[10px] rounded-[10px] cursor-pointer">
                <div className="custom-text font-bold md:text-[17px] text-[15px]">Rejoindre le lancement</div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="flex-3/4 lg:max-w-full md:max-w-[350px] sm:max-w-[300px] md:mt-40 max-w-[250px] md:pt-0 pt-10">
          <Fade direction='up'>
            <img className='lg:max-w-[400px] m-auto' src={iphone1} alt="iphone1" />
          </Fade>
        </div>
      </section>
      <ComingSoon />
      <Price />
    </>

  )
}

export default Home