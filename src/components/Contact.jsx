import { motion } from 'framer-motion';
import React from 'react'


const contactVarient = {
    initail :{
        y:20,
        opacity:0
      },
      animate:{
        y:0,
        opacity:1,
        transition:{
          duration:0.5,
          staggerChildren:.4
        }
      }
}
function Contact() {
  return (
    <div 
     className='w-full pt-14 px-2'>
        <motion.div variants={contactVarient} initial="initial" whileInView="animate"
        className='flex flex-col max-w-[500px] m-auto gap-2'>
            <motion.h1 variants={contactVarient} className='text-white text-xl font-semibold py-1'>Get In Touch</motion.h1>
            <motion.div variants={contactVarient} className='w-full'>
                <input className='w-full px-2 py-2 bg-neutral-800 rounded-sm placeholder:text-zinc-600 text-white' type="text" placeholder='Name' />
            </motion.div>
            <motion.div variants={contactVarient} className='w-full'>
                <input className='w-full px-2 py-2 bg-neutral-800 rounded-sm placeholder:text-zinc-600 text-white' type="email" placeholder='Email' />
            </motion.div>
            <motion.div variants={contactVarient} className='w-full'>
                <textarea rows={4}
                placeholder='Message'
                 className='w-full px-2 py-2 bg-neutral-800 rounded-sm placeholder:text-zinc-600 text-white resize-none'
                ></textarea>
            </motion.div>
                <motion.button variants={contactVarient} className='bg-gradient-to-r  from-pink-600 to-purple-600 text-white py-1'>Sumbit</motion.button>
        </motion.div>
    </div>
  )
}

export default Contact