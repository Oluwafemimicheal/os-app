import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="lg:w-[1200px] mx-auto sticky top-2 p-2 bg-white/85 rounded-lg shadow-sm flex items-center gap-10 z-99 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-r-2 border-gray-400 pr-3">
        <div className="logo w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-sm ">
          <span className="text-red-700 text-lg font-extrabold">.//.</span>
        </div>
        <div>
          <h1 className="text-red-700 font-semibold">Instructor Hub</h1>
        </div>
      </div>
      <div className="flex justify-between items-center grow ">
        <div>
          <ul className="text-gray-800 flex items-center text-[15px] gap-8">
            <li><a href="#">Features</a></li>
            <li><a href="#">For Business</a></li>
            <li><a href="#">Compare Plans</a></li>
            <li><a href="#">Learn & Support</a></li>
            <li><button popoverTarget="info" href="#">Free trial</button></li>
            <div>
              <button className="py-[3px] px-3 bg-red-600 rounded-lg text-white">Save <span>48%</span> now</button>
            </div>
            <div id="info" popover="">
              <ul>
                <li>Login</li>
                <li>Sign in</li>
              </ul>
            </div>
          </ul>
        </div>
        <div className="border-2 border-gray-400 rounded-2xl py-[3px] px-3 text-gray-700">
          <Link to={'/login'}>Sign in</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
