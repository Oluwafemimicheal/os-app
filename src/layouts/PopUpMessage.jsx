import { motion } from 'framer-motion'

const PopUpMessage = ({ message }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.2 }} className="py-2 px-8 bg-green-500 w-max rounded-md shadow-lg">
      <p className='text-gray-800 font-semibold'>{message}</p>
    </motion.div>
  )
}

export default PopUpMessage
