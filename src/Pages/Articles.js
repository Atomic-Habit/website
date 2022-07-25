import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const translationX = 100

const ArticleCard = (props) => (
  
  <motion.div initial={{ opacity: 0, y: translationX }} transition={{ ...transition, delay: ( 0.1 * props.cth) }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: translationX }}  className='overflow-hidden  bg-[#000] min-w-[300px] duration-500 hover:drop-shadow-3xl transition-all min-h-[350px] max-h-[360px] rounded-[20px]'>
    <Link to={'/article/' + props.id} className="article-card relative overflow-hidden min-w-[300px] min-h-[350px] max-h-[350px] rounded-[20px]">
      <div className="w-full h-full" 
      style={{
        backgroundImage: props.image ? 'url('+props.image+')' : "url(https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
        backgroundSize: "cover", 
        backgroundPosition: "center"
        }}></div>
      <div className=" gradient text-[#fff] w-[300px] p-5 absolute z-10 bottom-0">
        <h3 className='font-black text-[20px]'>{props.title}</h3>
        <p className='font-regular text-[12px]'>{props.description}</p>
      </div>
    </Link>
  </motion.div>
)

const CustomSkeletone = () => (
  <div className="custom-skeletone overflow-hidden min-w-[300px] min-h-[350px] rounded-[20px]">
    <Skeleton animation="wave" width={300} height={220} style={{ borderRadius: 0, transform: "scale(1)" }} className="skeletone" />
    <div className=" bg-[#000] w-[300px] h-full p-5">
      <Skeleton sx={{ bgcolor: 'grey.700' }} width={250} height={30} variant="h1" style={{ borderRadius: 5, transform: "scale(1)" }} className="" />
      <Skeleton sx={{ bgcolor: 'grey.700' }} width={250} variant="text" className="mt-[10px]" />
      <Skeleton sx={{ bgcolor: 'grey.700' }} width={250} variant="text"  />
    </div>
  </div>
)

const Articles = (props) => {

  window.scrollTo(0,0)

  return (
    <section id='home' className="pt-40 pb-20 px-10 md:p-40 sm:px-20 min-h-[100vh] bg-[#fff] text-[#000]">
    <motion.h1 initial={{ opacity: 0, x: translationX }} transition={transition} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -translationX }} className='text-6xl font-black'>Articles</motion.h1>
    <div className="py-20 flex flex-wrap articles-container max-w-[1400] mx-auto">

      {
        props.loadingArticles ?
        <>
          <CustomSkeletone />
          <CustomSkeletone />
          <CustomSkeletone />
          <CustomSkeletone />
          <CustomSkeletone />
          <CustomSkeletone />
        </>
        :
        props.articles.map((article, key) => <ArticleCard title={article.title} id={article.id} cth={key} image={article.image} description={article.description} key={key} />)
      }
      
    </div>
  </section>
  )
}

export default Articles