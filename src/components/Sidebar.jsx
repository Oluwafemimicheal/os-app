import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 items-center pb-3 border-b border-gray-600">
        <div className="flex justify-center items-center overflow-hidden w-14 h-14 rounded-full bg-gray-700">
          <img src="" alt="Loading" />
        </div>
        <div>
          <h1 className="text-white text-lg font-bold">Oluwafemi Michael</h1>
          <p className="text-white text-[12px] font-semibold">Full-Stack Web Development</p>
        </div>
      </div>
      <div className="">
        <ul className="flex flex-col gap-2">
          <li className="hover:pl-5 hover:bg-gray-500 rounded-lg w-full transition"><Link className="block p-2">Attendance</Link></li>
          <li className="hover:pl-5 hover:bg-gray-500 rounded-lg w-full transition"><Link to={"/classes"} className="block p-2">Classes</Link></li>
          <li className="hover:pl-5 hover:bg-gray-500 rounded-lg w-full transition"><Link className="block p-2">Study Space</Link></li>
          <li className="hover:pl-5 hover:bg-gray-500 rounded-lg w-full transition"><Link className="block p-2">Student List</Link></li>
          <li className="hover:pl-5 hover:bg-gray-500 rounded-lg w-full transition"><Link className="block p-2">Curriculum</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
