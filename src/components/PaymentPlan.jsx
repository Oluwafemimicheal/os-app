import { div } from "framer-motion/client"
import { TbCurrencyNaira } from "react-icons/tb"
const PaymentPlan = () => {
  return (

    <div>
      <div className='lg:w-[1200px] h-auto overflow-hidden mx-auto my-5 gap-10 bg-white px-10 py-16 rounded-lg flex flex-col justify-center'>
        <h1>Pick a plan to start creating</h1>
        <div className='flex gap-8 justify-center items-center'>
          <div className='flex justify-center items-center border-2 border-blue-700 p-1 rounded-2xl w-2/5'>
            <div className='bg-gray-200 w-full rounded-2xl p-5'>
              <h1 className="font-bold text-2xl">Single Individual</h1>
              <p>Your choice of one Structure study.</p>
              <div className="mt-10">
                <small className="font-semibold">Starting at</small>
                <span className="flex items-center"><TbCurrencyNaira size={20} /> 1,700.00/mo incl. VAT</span>
                <i className="mt-3 text-sm">Annual, billed monthly</i>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center border-2 border-red-700 p-1 rounded-2xl w-2/5'>
            <div className='bg-gray-200 w-full  rounded-2xl p-5'>
              <h1 className="font-bold text-2xl">Single Individual</h1>
              <p>Your choice of one Structure study.</p>
              <div className="mt-10">
                <small className="font-semibold">Starting at</small>
                <span className="flex items-center"><TbCurrencyNaira size={20} /> 1,700.00/mo incl. VAT</span>
                <i className="mt-3 text-sm">Annual, billed monthly</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500 p-5 flex justify-center items-center h-[300px] text-white relative">
        <div className="[clip-path:polygon(100%_0,0%_100%,100%_100%)] bg-red-700/20 w-full h-72 absolute  bottom-0"></div>
      </div>
    </div>
  )
}

export default PaymentPlan
