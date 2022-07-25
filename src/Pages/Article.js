import React from 'react'
import { useParams, Link } from 'react-router-dom'
import arrow from '../images/arrow.png'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Article = (props) => {
    
    window.scrollTo(0,0)
    
    const params = useParams()
    const article = props?.articles?.find((article) => { return article?.id === params?.id })
    const translationX = 100
    return (
        <section id='article' className='py-40 bg-[#fff] '>

            <Helmet>
                <meta charSet="utf-8" />
                <title>{article?.title}</title>
                <link rel="canonical" href={`http://atomichabits.app/${article?.id}`} />
                <meta name="description" content={article?.description} />
            </Helmet>

            <div className="article-container max-w-[600px] mx-auto article">
                <Link to={"/articles"}> <motion.img initial={{ opacity: 0, x: translationX }} transition={transition} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -translationX }} className='w-[30px]' src={arrow} alt="back arrow" /></Link>
                <motion.div initial={{ opacity: 0, x: translationX }} transition={{ ...transition, delay: 0.2 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -translationX }} className="image h-[400px] w-[600px] my-10" style={{ backgroundImage: 'url(' + article?.image + ')' }}></motion.div>
                <motion.h1 className='text-[35px]' initial={{ opacity: 0, x: translationX }} transition={{ ...transition, delay: 0.4 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -translationX }}>{article?.title}</motion.h1>
                <motion.p className='description text-[17px] mt-0' initial={{ opacity: 0, x: translationX }} transition={{ ...transition, delay: 0.5 }} animate={{ opacity: 0.5, x: 0 }} exit={{ opacity: 0, x: -translationX }} >{article?.description}</motion.p>
                <motion.div initial={{ opacity: 0, x: translationX }} transition={{ ...transition, delay: 0.6 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -translationX }}>
                    {
                        article?.text.map((data, key) => {
                            if (data.type === "header") {
                                console.log(data.data.level)
                                switch (data.data.level) {
                                    case 1:
                                        return <h1 key={key}>{data.data.text}</h1>
                                    case 2:
                                        return <h2 key={key}>{data.data.text}</h2>
                                    case 3:
                                        return <h3 key={key}>{data.data.text}</h3>
                                    default:
                                        return <p key={key}>{data.data.text}</p>
                                }
                            }
                            return <p key={key}>{data.data.text}</p>
                        })
                    }
                </motion.div>
            </div>



        </section>
    )
}

export default Article