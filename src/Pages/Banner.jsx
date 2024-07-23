import React from 'react'
import Navbar from '../Components/Navbar'
import { Helmet } from "react-helmet"

const Banner = () => {
  return (
    <div>
      <Helmet>
        <title>Banner</title>
      </Helmet>

      <Navbar />

      <div className='sm:ml-32'>
        <div className='mx-auto max-w-4xl px-8 sm:px-0'>
          <h1 className='font-bold text-5xl'>404 - Page Not Found</h1>
          <p className='text-gray-600 dark:text-gray-400 mt-2 max-w-sm'>Sorry! This page doesn't exist. Double check the URL and try again.</p>
        </div>
      </div>

      <div className='fixed bottom-0 left-0 ml-4 mb-4'>
        <span className="top-20 left-20 right-20 shadow-[30px_0_1000px_70px_#3730a3]"></span>
      </div>
    </div>
  )
}

export default Banner