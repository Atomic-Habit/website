import React, { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { motion } from 'framer-motion';
import { Rings } from 'svg-loaders-react'
import cross from '../images/cross.svg'
import {Fade} from 'react-awesome-reveal'
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const CustomForm = ({ status, message, onValidated, closeHandler }) => {

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [error, setError] = useState("")
    const [close, setClose ] = useState(false)

    const subscribe = (e) => {
        e.preventDefault()

        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        setError("")

        if (!email) {
            setError("Entrez votre adresse email")
            return
        }

        if (!firstName) {
            setError("Entrez votre prénom")
            return
        }

        if (firstName.length < 3) {
            setError("Votre prénom doit contenir au moins 3 caractères")
            return
        }

        if (!email.match(mailformat)) {
            setError("Entrez une adresse email valide")
            return
        }

        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: "",
        });
    }

    const handler = () => {
        setClose(true)
        setTimeout(() => {
            closeHandler()
        }, 1000)
    }

    return (
        <motion.section transition={transition} initial={{ opacity: 0 }} animate={ close ? { opacity: 0 } : { opacity: 1 }} className='fixed top-0 flex items-center justify-center bg-[rgba(0,0,0,0.75)] w-[100vw] h-[100vh] z-10'>
            <div className="sm:max-w-[761px] overflow-hidden relative max-w-[360px] bg-[#212121] mx-10 p-10 rounded-[15px]">
                
                <button className='absolute sm:block hidden right-10 z-10' onClick={() => handler()}>
                    <img className='hover:rotate-180 duration-300' src={cross} alt="close button" />
                </button>
                
                <Fade  cascade direction='up' delay={500}>
                    <h2 className='max-w-[360px] custom-text sm:text-[40px] text-[30px] font-bold leading-tight mb-5'>Rejoignez une aventure atomic !</h2>
                    <p className='max-w-[360px] sm:text-[20px] text-[15px] mb-5'>Restez informé sur la sortie de l’application et bénéficiez d’offres exclusives.</p>
                </Fade>
                <p className='text-[#F65555] mb-5'>{error}</p>
                <div className="flex sm:flex-row flex-col items-center w-full sm:items-end">
                    <div className="w-full sm:mr-10 sm:min-w-[350px]">
                    <Fade cascade direction='up' delay={1200}>

                        <div className="inputbox-content pb-10">
                            <input id="input1" type="name" name="name" required value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <label htmlFor="input1" className='sm:text-xl'>Votre prénom...</label>
                            <span className="underline"></span>
                        </div>
                        <div className="inputbox-content w-full">
                            <input id="input2 text-xl" type="name" name="name" required value={email} onChange={e => setEmail(e.target.value)} />
                            <label htmlFor="input2" className='sm:text-xl'>Adresse mail...</label>
                            <span className="underline"></span>
                        </div>
                        </Fade>

                    </div>
                    <Fade cascade direction='up' delay={1600}>

                    <div className="flex justify-between items-center">
                        <button onClick={(status === 'sending' || status === 'success') ? () => { } : (e) => subscribe(e)} className='bg-[#fff] text-black relative rounded-[10px] mt-10 sm:ml-10  py-[12px] px-[70px]' text="Submit form">
                            <span>Rejoindre</span>
                            {status === 'sending' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="absolute w-full top-[50%] left-[50%] z-20 -translate-y-1/2 -translate-x-1/2 bg-[#fff]">
                                <Rings stroke='#000' className="mx-auto" />
                            </motion.div>
                            }
                            {status === 'success' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="bg-[#fff] text-black absolute w-full top-[50%] left-[50%] z-20 -translate-y-1/2 -translate-x-1/2 scale-[0.6]">
                                <svg id="successAnimation" class="animated mx-auto delay-500" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                                    <path id="successAnimationResult" fill="#000000" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z" />
                                    <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#000000" stroke-width="2" stroke-linecap="round" fill="transparent" />
                                    <polyline id="successAnimationCheck" stroke="#000000" stroke-width="2" points="23 34 34 43 47 27" fill="transparent" />
                                </svg>
                            </motion.div>}
                        </button>
                    </div>
                    <button className='mt-10 sm:hidden' onClick={() => handler()}>Annuler</button>
                    </  Fade>
                </div>

            </div>

        </motion.section>
    )
}


const Subscribe = ({ closeHandler }) => {

    const url = `https://jorisdelorme.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, message, status }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                    closeHandler={closeHandler}
                />
            )}
        />
    )
}

export default Subscribe