// import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import Loading from "../components/Loading"
import Chart from '../components/ChartR';


const MainLayout = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout()
  }, [loading])

  return (
    <div className='hidden md:block'>

      {loading ? (<Loading />) : (

        <div className="grid grid-cols-5">
          <div className="col-span-1 bg-gray-900 h-screen sticky top-0 p-5">
            <Sidebar />
          </div>
          <div className="col-span-4 bg-white overflow-auto flex flex-col gap-5 p-5">
            <div className="w-full text-white flex justify-between items-center gap-4 ">
              <div className='p-2 bg-gray-500 w-max rounded-lg flex gap-3 items-center'>
                <h1>New Horizons - Lekki Center</h1>

              </div>
            </div>
            {/* <div className='bg-red-900 h-10 flex items-center rounded-md'>
              <marquee behavior="smooth" direction="left">All Cousers are mandatory for the instructor to teach and perfectly explain</marquee>
            </div> */}

            <div className='grid grid-cols-4 h-32 gap-3'>
              <div className='bg-gray-700 rounded-2xl shadow-md'></div>
              <div className='bg-gray-600 rounded-2xl shadow-md'></div>
              <div className='bg-gray-500 rounded-2xl shadow-md'></div>
              <div className='bg-gray-500 rounded-2xl shadow-md'></div>
            </div>
            <div className='w-full h-[400px] mt-5 bg-gray-100 flex items-end rounded-2xl'>
              <div className='w-[50%]'>
                <Chart />
              </div>
              <div className='text-black'>
                <h1>FULL STACK</h1>
                <p>WEB APPLICATION</p>
              </div>
            </div>

            {/* <div>
              <Outlet />
            </div> */}

          </div>
        </div>

      )}
    </div>
  )
}

export default MainLayout;

