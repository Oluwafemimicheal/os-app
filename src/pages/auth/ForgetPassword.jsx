import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const ForgetPassword = () => {

  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.2 }}
      className='flex flex-col justify-center items-left p-20 gap-5 h-full w-full transition'>
      <h3>Provide a email that links to your account</h3>
      <form className='flex flex-col gap-3 w-[400px]'>
        <div className='border-2 border-gray-500 group transition p-2 rounded-sm flex gap-3'>
          <label htmlFor="email" className="w-max">Email</label>
          <input type="email" name='email' placeholder='email@gmail.com' required className='bg-transparent border-l-2 border-gray-500 px-2 focus:border-[#eb5a44] w-4/5' />
        </div>

        <button type='submit' className='w-1/5 border-2 bg-[#51127a] border-gray-500 focus:border-[#51127a] transition px-2 py-1 rounded-sm flex gap-3 mt-5'>
          <span className='text-center w-full'>Submit</span>
        </button>
      </form>
      <div className='mt-10 flex gap-2'>
        <p className='text-gray-400 text-sm'>I remember my password?</p>
        <Link to={'/login'} className='text-[#eb5a44] underline text-sm'>Return back</Link>
      </div>


    </motion.div>
  )
}

export default ForgetPassword
