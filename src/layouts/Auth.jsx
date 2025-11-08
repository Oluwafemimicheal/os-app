import { Outlet } from "react-router-dom"
import useLoading from "../util/useLoading"
import { Link } from "react-router-dom";
// import { Location } from "react-router-dom"


const Auth = () => {
  const { loading, LoadingComponent } = useLoading();

  return (
    <>
      {
        loading ? (<LoadingComponent />) : <div className='flex w-full justify-between overflow-hidden'>
          <div className='w-3/5 h-screen bg-[#eb5a44] flex justify-center'>
            <div className='flex items-center gap-2'>
              <div className="logo w-14 h-14 rounded-full flex justify-center items-center bg-white text-blue-900 font-extrabold text-2xl shadow-md">
                <span>
                  .//.
                </span>
              </div>
              <h1 className='font-semibold text-2xl'>Instructor Hub</h1>

            </div>
          </div>
          <div className='w-full'>
            <div><Link to={'/'}>Home</Link>/login</div>
            <Outlet />
          </div>
        </div>
      }

    </>

  )
}

export default Auth
