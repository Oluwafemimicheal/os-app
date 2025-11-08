// import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import Courese from '../pages/Courese';
import Loading from "../components/Loading"

const MainLayout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout()
  }, [loading])

  return (
    <>

      {loading ? (<Loading />) : (

        <div className="grid grid-cols-5">
          <div className="col-span-1 bg-blue-800 h-screen sticky top-0 p-5">
            <Sidebar />
          </div>
          <div className="col-span-4 bg-white overflow-auto flex flex-col gap-10 p-5">
            <div className="w-full text-white flex justify-between items-center gap-4 ">
              <div className='text-blue-950'>FullStack Web Developer</div>
              <div className='p-2 bg-blue-950 w-max rounded-lg flex gap-3 items-center'>
                <h1>New Horizons Instructor Dashboard</h1>
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden" title="Profile" >
                  <img src="" alt="user-profile" />
                </div>
              </div>
            </div>
            <div className='bg-red-900 h-10 flex items-center rounded-md'>
              <marquee behavior="smooth" direction="left">All Cousers are mandatory for the instructor to teach and perfectly explain</marquee>
            </div>
            <div className='grid grid-cols-3 justify-items-center'>
              <Courese />
              <Courese />
              <Courese />
            </div>

          </div>
        </div>

      )}
    </>
  )
}

export default MainLayout;

