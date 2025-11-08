
const Hero = ({ heroImage, heroTitle }) => {
  return (
    <div>
      <div className="lg:w-[1200px] h-[490px] overflow-hidden mx-auto mt-10 gap-10 bg-white px-10 py-16 rounded-lg flex justify-between">
        <div className="text-content text-black ">
          <h1 className="font-bold text-5xl mb-5 leading-14">{heroTitle}</h1>
          <p className="leading-normal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate adipisci eius architecto, rerum quibusdam reiciendis cum error similique facere ut iste ducimus. Doloribus provident impedit, deleniti debitis ullam dicta.</p>
          <div className="flex items-center gap-8 mt-5">
            <button className="border-2 border-gray-400 rounded-2xl py-2 px-4 text-gray-900 hover:bg-black hover:text-white hover:border-black">Start free trial</button>
            <button className="border-2 border-red-600 bg-red-600 hover:opacity-85 cursor-pointer rounded-2xl py-2 px-4 text-white">Save today</button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero
