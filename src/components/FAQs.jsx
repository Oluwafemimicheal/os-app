import React from 'react'
import Details from './Details'

const FAQs = () => {
  return (
    <div className='w-full lg:w-[800px] mx-auto mt-10 gap-10 bg-gray-100/10 px-5 lg:px-10 py-16 rounded-lg flex flex-col justify-between items-center h-auto text-black'>
      <h1 className='text-4xl font-bold text-center'>Questions? we have answer for </h1>
      <div className='w-full flex flex-col gap-5'>
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />

      </div>
    </div>
  )
}

export default FAQs
