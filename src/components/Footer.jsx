import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" mx-auto bg-blue-400 p-5 flex flex-col justify-center items-center h-[200px] text-white relative overflow-hidden">
        <div className="[clip-path:polygon(100%_0,0%_100%,100%_100%)] bg-red-700/20 w-full h-72 absolute  bottom-0"></div>
        <h1 className="text-center lg:w-4/5 text-4xl font-semibold z-3">Need to Talk to Our Customer Service? Here we are</h1>
        <p className="text-gray-200 font-md text-lg mt-3 z-3">24/7 provided support and assistance</p>
      </div>
      <div className='lg:w-[1200px] mx-auto mb-6 p-5 bg-white/90 rounded-lg  flex flex-col items-center gap-10 relative backdrop-blur-sm'>
        {/* <div className='flex justify-between items-center gap-10 bg-blue-700 py-3 px-10 rounded-lg absolute -top-6'><h1>Not sure what you can use this App for? Take a minute. We'll help you to figure it out</h1> <button className='py-[3px] px-3 bg-red-600 rounded-lg text-white'>Get Started</button></div> */}

        <div className='grid grid-cols-2 lg:grid-cols-5 justify-items-center gap-5 text-black text-sm footer-links'>
          <div>
            <h1 className='mb-3 font-bold text-md'>For medium & large Institution</h1>
            <ul className='flex flex-col gap-2'>
              <li><a href="#">Personal scale</a></li>
              <li><a href="#">Content supply chain</a></li>
              <li><a href="#">Organize content</a></li>
              <li><a href="#">B2B work</a></li>
              <li><a href="#">Personal scale</a></li>
            </ul>
          </div>
          <div>
            <h1 className='mb-3 font-bold text-md'>For Organization</h1>
            <ul className='flex flex-col gap-2'>
              <li><a href="#">Education purpose</a></li>
              <li><a href="#">Non-profits</a></li>
              <li><a href="#">University</a></li>
              <li><a href="#">Secondary Education</a></li>
              <li><a href="#">Individual</a></li>
            </ul>
          </div>
          <div>
            <h1 className='mb-3 font-bold text-md'>Support</h1>
            <ul className='flex flex-col gap-2'>
              <li><a href="#">Help centre</a></li>
              <li><a href="#">Download and install</a></li>
              <li><a href="#">Instructor Hub community</a></li>
              <li><a href="#">Hub Learn</a></li>
              <li><a href="#">All Support Business</a></li>
            </ul>
          </div>
          <div>
            <h1 className='mb-3 font-bold text-md'>Instructor Hub</h1>
            <ul className='flex flex-col gap-2'>
              <li><a href="#">Log in your account</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Integrity</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 lg:mt-0 mt-5 w-full flex lg:block flex-col justify-between items-center lg:items-start">
            <h1 className='mb-3 font-bold text-md'>Our Social Platform</h1>
            <ul className="flex justify-center lg:justify-between gap-10 lg:gap-5 text-2xl w-full px-5 lg:px-0 pb-8  border-b-2 lg:border-none border-gray-300">
              <li><a href="#">
                <FaXTwitter />
              </a></li>
              <li><a href="#">
                <FaLinkedin />
              </a></li>
              <li><a href="#">
                <FaSquareInstagram />
              </a></li>
              <li><a href="#">
                <FaFacebook />
              </a></li>
            </ul>
            <div className="mt-4 lg:hidden">
              <small className="text-[15px] ">Developed & Designed by Oluwafemi Michael &copy;{new Date().getFullYear()}</small>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
