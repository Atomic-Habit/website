import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='flex h-[100vh] w-full justify-center flex-col items-center'>
        <h1 className='text-7xl font-black'>404 not found.</h1>
        <p className='text-xl mt-5'>Go back to the <Link className='text-blue-600/100"' to='/'>home page !</Link></p>
    </section>
  )
}

export default NotFound