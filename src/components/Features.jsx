import { div } from "framer-motion/client";
import Image1 from "../assets/images/Under construction-amico.svg"
import { MdOutlineConstruction } from "react-icons/md"
import { RiProgress5Line } from "react-icons/ri";

const Features = () => {
  return (
    <div>
      <div className="lg:w-[1200px] mx-auto my-5 gap-10 bg-gray-100 px-10 py-16 rounded-lg flex flex-col justify-between h-auto">
        <div className="text-content text-black w-4/5 mx-auto text-center">
          <h1 className="font-bold text-4xl mb-2">10+ features Infinite possibilities.</h1>
          <p className="leading-normal text-[20px]">Turn a selfie into a work of art. Make a film while you wait in line. Design a logo for your business or your life. With Creative Cloud, there’s no end to what you can do.</p>
        </div>
        <div className="flex flex-row-reverse h-[400px]  gap-8 mt-5">
          <div className="bg-red-700 flex flex-col justify-center rounded-2xl p-10 shadow-lg">
            <MdOutlineConstruction size={50} />
            <h1 className="font-semibold text-3xl w-[320px] mt-5">Create a High Structure teaching Guide</h1>
            <div className="flex items-center gap-6 mt-10">
              <button className="border-2 border-white rounded-md text-white font-semibold bg-transparent hover:bg-white hover:text-black py-2 px-5 cursor-pointer">Learn more</button>
              <button className="border-2 border-white rounded-md bg-white font-semibold text-red-700 py-2 px-5 hover:opacity-90 cursor-pointer">Free trial</button>
            </div>
          </div>
          <div className="bg-blue-500 grow rounded-2xl grid grid-cols-2 overflow-hidden shadow-lg">
            <div className="p-8 flex flex-col justify-center">
              <RiProgress5Line size={50} />
              <h1 className="font-semibold text-3xl w-[320px] mt-5">Tracking Studying Progress at Once</h1>
              <div className="flex items-center gap-6 mt-10">
                <button className="border-2 border-white rounded-md text-white font-semibold bg-transparent hover:bg-white hover:text-black py-2 px-5 cursor-pointer">Learn more</button>

              </div>
            </div>
            <div className="bg-white overflow-hidden">
              <img src={Image1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[1200px] mx-auto mt-5 mb-5 gap-10 bg-gray-100 px-10 py-16 rounded-lg flex flex-col justify-between h-auto">
        <div className="text-content text-black text-left">
          <h1 className="font-bold text-4xl mb-2">High Checking Torch</h1>
        </div>
        <div className="grid grid-row-[auto] gap-8">
          <div className="bg-red-700 flex flex-col justify-center rounded-2xl p-10 shadow-lg relative overflow-hidden">
            <div className="[clip-path:polygon(100%_0,0%_100%,100%_100%)] bg-red-800/30 w-full h-72 absolute  bottom-0"></div>
            <MdOutlineConstruction size={50} />
            <h1 className="font-semibold text-3xl w-[320px] mt-5">Create a High Structure teaching Guide</h1>
            <div className="flex items-center gap-6 mt-10 z-10">
              <button className="border-2 border-white rounded-md text-white font-semibold bg-transparent hover:bg-white hover:text-black py-2 px-5 cursor-pointer">Learn more</button>
              <button className="border-2 border-white rounded-md bg-white font-semibold text-red-700 py-2 px-5 hover:opacity-90 cursor-pointer">Free trial</button>
            </div>
          </div>
          <div className=" flex grow rounded-2xl overflow-hidden gap-8 flex-row-reverse ">
            <div className="p-8 flex justify-center flex-col bg-blue-500 w-full">
              <RiProgress5Line size={50} />
              <h1 className="font-semibold text-3xl w-[320px] mt-5">Tracking Studying Progress at Once</h1>
              <div className="flex items-center gap-6 mt-10">
                <button className="border-2 border-white rounded-md text-white font-semibold bg-transparent hover:bg-white hover:text-black py-2 px-5 cursor-pointer">Learn more</button>
              </div>
            </div>
            <div className="p-8 flex justify-center flex-col bg-blue-500 ">
              <RiProgress5Line size={50} />
              <h1 className="font-semibold text-3xl w-[320px] mt-5">Tracking Studying Progress at Once</h1>
              <div className="flex items-center gap-6 mt-10">
                <button className="border-2 border-white rounded-md text-white font-semibold bg-transparent hover:bg-white hover:text-black py-2 px-5 cursor-pointer">Learn more</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Features
