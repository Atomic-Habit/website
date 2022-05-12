import React from 'react'
import iphone from '../images/iphone.webp'
import {Fade} from 'react-awesome-reveal'
import CustomFade from './CustomFade';


const PriceCard = ({price, trialType, info, best=false}) => {
    return (
        <CustomFade>
        <div className={`text-[#000] relative ${best ? "gradient-border" : "border-black border-[3px] rounded-[15px]"} my-10  lg:px-20 md:px-10 sm:px-20 px-[30px] py-[40px] w-fit`}>

            <div className="absolute z-10 left-[40px] -top-[15%] bg-[#fff] px-2 ">
                <h3 className={`sm:text-[20px] text-[15px] ${best && "custom-text"}`}>{trialType}</h3>
            </div>

            <div className='sm:text-[20px] text-[15px] z-10' >
                <span className='font-bold'>{price}</span><span className='opacity-[0.5]'>{"  " + info}</span>
            </div>
        </div>
        </CustomFade>
    )
}

const Price = ({handlClose}) =>{
  return (
    <section id='price' className='md:pr-10 pr-0 lg:max-h-[1000px] max-h-[700px] flex w-full h-[100vh] text-[#000] items-center justify-center'>

        <div className="md:block hidden px-20">
            <Fade direction='left'>
            <img src={iphone} alt="iPhone" className='lg:max-w-[380px] max-w-[300px]' />
            </Fade>
        </div>

        <div className="md:block flex flex-col justify-center items-center sm:px-0 px-10 ">
            <CustomFade>
            <h2 className='font-black lg:text-[50px] sm:text-[30px] text-[25px]'>Prix des abonnements</h2>

            </CustomFade>
            <CustomFade >
                <p className='md:pr-20 pr-0 sm:text-left text-center sm:text-[20px] text-[12px]'>Psssst : une remise de 20 % si vous <span  onClick={() => handlClose()} className='underline z-10 cursor-pointer'>rejoignez le projet !</span></p>
            </CustomFade>
            
        <div className="">
            {
                [
                    {price: '2,50 € / mois', info: " soit 47,88 € / ans", trialType: 'Abonnement mensuel', best: false},
                    {price: '20,99 € / ans',  info: " économiser 30%", trialType: 'Abonnement annuel', best: true}
                ].map((trial, index) => {
                    return <PriceCard key={index} price={trial.price} info={trial.info} trialType={trial.trialType} best={trial.best} />
                    })
            }
        </div>
        <CustomFade>
        <p className='sm:text-[20px] text-[15px] sm:text-left text-center md:pr-10 pr-0'>Bénéficiez de <b>7 jours d’essais gratuit</b> avec un abonnement annuel !</p>
        </CustomFade>
        </div>
    </section>
  )
}

export default Price