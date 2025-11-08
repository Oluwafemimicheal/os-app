import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <motion.div initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.2 }} className='flex flex-col justify-center items-left pl-20 h-full w-full'>
      <form className='flex flex-col gap-3 w-[400px]'>
        <div className='border-2 border-gray-500 group transition p-2 rounded-sm flex gap-3 w-full'>
          <label htmlFor="fullname" className="w-1/5">Full Name</label>
          <input type="fullname" name='fullname' placeholder='New Horizon' required className='bg-transparent border-l-2 border-gray-500 px-2 focus:border-[#eb5a44] w-4/5' />
        </div>
        <div className='border-2 border-gray-500 group transition p-2 rounded-sm flex gap-3'>
          <label htmlFor="email" className="w-1/5">Email</label>
          <input type="email" name='email' placeholder='email@gmail.com' required className='bg-transparent border-l-2 border-gray-500 px-2 focus:border-[#eb5a44] w-4/5' />
        </div>
        <div className='border-2 border-gray-500 p-2 rounded-sm flex gap-3'>
          <label htmlFor="email" className="w-1/5">Password</label>
          <input type="password" name='password' placeholder='password' className='bg-transparent border-l-2 border-gray-500 px-2 focus:border-[#eb5a44] w-4/5' />
        </div>
        <div className='border-2 border-gray-500 p-2 rounded-sm flex gap-3'>
          <label htmlFor="email" className="w-max">Confirm Password</label>
          <input type="password" name='confirmPassword' placeholder='confirm password' className='bg-transparent border-l-2 border-gray-500 px-2 focus:border-[#eb5a44] w-max' />
        </div>


        <button type='submit' className='border-2 bg-[#51127a] border-gray-500 focus:border-[#51127a] transition p-2 rounded-sm flex gap-3 mt-5'>
          <span className='text-center w-full animate-pulse focus:animate-none'>Submit</span>
        </button>
      </form>
      <div className='mt-5 flex gap-2'>
        <p className='text-gray-400 text-sm'>I already have an account?</p>
        <Link to='/login' className='text-[#eb5a44] text-sm underline'>Login</Link>
      </div>

    </motion.div>
  )
}

export default SignUp;
