import React from 'react'

const Loading = () => {
  return (
    <div className='loading fixed'>
      <div className=' h-screen w-screen bg-blue-600/85 flex justify-center items-center'>
        <div className='flex items-center flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <div className="logo w-14 h-14 rounded-full flex justify-center items-center bg-white text-blue-900 font-extrabold text-2xl shadow-2xl shadow-gray-800">
              <span className='animate-bounce'>
                .//.

              </span>
            </div>
            <h1 className='font-semibold text-2xl animate-pulse'>Instructor Hub</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
