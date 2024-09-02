import React from 'react'
import { projectData } from '../data/ProjectData';
import { RxExternalLink } from "react-icons/rx";
import {motion} from "framer-motion" 


const  cartVareints = {
  intail :{
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
function Project() {

  
  return (
    <div className='px-2 relative'>
      <div>
        <h1 className='text-3xl text-center font-semibold text-white py-10 pt-20 '>Latest <span className='text-gray-500'>Projects</span></h1>
      </div>
      <div  className='grid grid-cols-1 md:px-2 sm:grid-cols-2 m-auto text-white gap-5'>
        {
          projectData.map((e,i)=>{
            return(
        <motion.a href={e.linK} target='-blank' className='flex flex-col gap-2 group relative' key={e.title}
          initial={{y:100,opacity:0}} 
          whileInView={{y:0,opacity:1}}
          transition={{duration:1,}}
        >
          <div className='overflow-hidden relative'>
            <img className='w-full hover:scale-[1.1] transition-all duration-1000  object-contain' src={e.picture} alt="" />
          </div>
          <motion.div className='flex gap-2 flex-col'
          variants={cartVareints} initial="intail" whileInView="animate" viewport={{once:true}}
          >
            <motion.h1 variants={cartVareints} className='font-semibold'>{e.title}</motion.h1>
            <motion.p variants={cartVareints}>{e.dec}</motion.p>
            <motion.div variants={cartVareints} className='flex flex-wrap gap-2'>
              {e.technologies.map((tech,index)=> (
                <motion.span variants={cartVareints} key={tech} className='inline-block bg-neutral-800 px-2 text-purple-600 font-medium'>{tech}</motion.span>
                
              ))}
            </motion.div>
          </motion.div>
          <div className='absolute hidden bottom-0 text-xl right-0 group-hover:block '><RxExternalLink/></div>
        </motion.a>

            )
          })
        }
      </div>
    </div>
  )
}

export default Project