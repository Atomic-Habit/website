import React, {useState} from 'react'
import iphone1 from '../images/iPhones.png'
import Fade from 'react-reveal/Fade'
import Subscribe from '../component/Subscribe'
const Home = () => {

  const [showSubscribe, setShowSubscribe] = useState(false)

  return (
    <section className='w-full flex md:flex-row flex-col sm:pt-20 pt-10 sm:justify-center lg:px-[10vw] md:px-10 sm:px-20'>
      <div className="flex-1 flex flex-col md:items-start items-center w-full">
          <Fade left cascade>
          <h1 className="lg:text-[90px] md:text-[60px] sm:text-[72px] text-[10vw] leading-none font-bold font-black whitespace-nowrap	">

          <span className='shadow-effect z-[90]'>Bientôt</span><span className='shadow-effect'>l'heure</span><br />
        <span className='shadow-effect z-[90]'>pour</span><span className='shadow-effect z-[10]'>prendre</span><span className='shadow-effect'>de</span><br />
        <span className='shadow-effect z-[90]'>bonne</span><span className='shadow-effect'>habitudes</span>
        </h1>
        </Fade>
        <Fade bottom cascade>
          <p className='sm:text-[20px] text-[15px] md:max-w-[550px] sm:text-left text-center pt-10 pb-10 sm:px-0  px-10'>Atomic Habits disponible dans l’App Store  prochainement... En attendant rejoigner la liste d’attente pour nous soutenir !
          Vous bénéficierez d’un mois gratuit 🤫.</p>
        </Fade>
        <Fade bottom>
          <div className="">
          <div onClick={() => setShowSubscribe(!showSubscribe)} className="cta custom-button md:w-[200px] md:h-[50px] w-[200px] h-[45px] md:rounded-[15px] rounded-[10px] cursor-pointer">
            <div className="custom-text font-bold md:text-[17px] text-[15px]">Rejoindre</div>
          </div>
          </div>
        </Fade>
      </div>

      <div className="flex-1 iPhoneBounce lg:max-w-full sm:max-w-[400px] max-w-[300px] m-auto md:pt-0 pt-10">
        <Fade bottom>
        <img className='lg:max-w-[450px] m-auto' src={iphone1} alt="iphone1" />
        </Fade>
      </div>

      {showSubscribe && <Subscribe />}
    </section>
  )
}

export default Home