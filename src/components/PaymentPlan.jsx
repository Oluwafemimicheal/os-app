import { TbCurrencyNaira } from "react-icons/tb"
const PaymentPlan = () => {
  return (

    <div>
      <div className='lg:w-[1200px] h-auto overflow-hidden mx-auto my-20 gap-10 bg-white px-5 lg:px-10  rounded-lg flex flex-col justify-center items-center text-black'>
        <h1 className="font-semibold text-3xl lg:text-4xl mb-2 text-center">Pick a Plan to Start Instructing People Today</h1>
        <div className='flex flex-col lg:flex-row gap-5 justify-center items-center w-full'>
          <div className='flex justify-center items-center border-2 border-blue-400 p-1 rounded-2xl w-full lg:w-2/5'>
            <div className='bg-gray-100 w-full rounded-2xl p-5'>
              <h1 className="font-bold text-2xl text-blue-400">Single Individual</h1>
              <p>Your choice of one Structure study.</p>
              <div className="mt-10">
                <small className="font-semibold">Starting at</small>
                <span className="flex items-center text-blue-400 font-semibold"><TbCurrencyNaira size={20} /> 1,700.00/mo incl. VAT</span>
                <i className="mt-3 text-sm">Annual, billed monthly</i>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center border-2 border-red-500 p-1 rounded-2xl w-full lg:w-2/5'>
            <div className='bg-gray-200 w-full  rounded-2xl p-5'>
              <h1 className="font-bold text-2xl text-red-500">Organization</h1>
              <p>Experience high productiveness in your business.</p>
              <div className="mt-10">
                <small className="font-semibold">Starting at</small>
                <span className="flex items-center text-red-500 font-semibold"><TbCurrencyNaira size={20} /> 9,200.00/mo incl. VAT</span>
                <i className="mt-3 text-sm">Annual, billed monthly</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[1200px] mx-auto bg-red-500 p-5 flex justify-center items-center h-[200px] text-white relative overflow-hidden lg:rounded-2xl">
        <div className="[clip-path:polygon(100%_0,0%_100%,100%_100%)] bg-red-700/20 w-full h-72 absolute  bottom-0"></div>
        <h1 className="text-center lg:w-4/5 text-2xl lg:text-4xl font-bold lg:font-semibold z-3">Do you know your can Instruct millions of people about what you know, and gain what you don't know?</h1>
      </div>
    </div>
  )
}

export default PaymentPlan
