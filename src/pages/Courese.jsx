import React from 'react'

const Courese = () => {
  return (
    <div className='w-[320px] h-[400px] bg-sky-400 rounded-2xl border-2 border-blue-950 overflow-hidden'>
      <div className='h-[45%] bg-white'>
        <img src="" alt="HTML" />
      </div>
      <div className='p-2'>
        <h1 className='pb-2 border-b-2 border-blue-950 mb-3 text-[15px] font-bold text-blue-950'>HTML5 (HyperText Makaup Language)</h1>

        <span className='flex justify-between'><h5 className='font-bold text-blue-950'>Coures Duration:</h5><p>2 Weeks</p></span>
        <span className='flex justify-between'><h5 className='font-bold text-blue-950'>No of Class:</h5><p>Twice a week</p></span>
        <span className='flex justify-between'><h5 className='font-bold text-blue-950'>Class Hours:</h5><p>3 Hours</p></span>
        <span className='flex justify-between'><h5 className='font-bold text-blue-950'>Session:</h5><p>Morning / Afternoon</p></span>
      </div>
    </div>
  )
}

export default Courese
