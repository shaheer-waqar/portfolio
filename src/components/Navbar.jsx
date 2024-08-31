import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";



const navVarients = {
  intial:{
    y:-15,
    opacity:0,
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.4,
      staggerChildren:0.4
    }
  }
}
function Navbar() {
  const [scroll,setScroll]= useState(false);

  const handleScroll = ()=>{
    if(window.scrollY > 210){
      setScroll(true);
    }else{
      setScroll(false);
    }
    
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

    return  ()=> window.removeEventListener("scroll",handleScroll); 
  },[scroll])
  const navItems =[
    {
      name:"home",
      label:"Home"
    },
    {
      name:"about",
      label:"About"
    },
    {
      name:"projects",
      label:"Projects"
    }
  ]
  
  return (
    <motion.div variants={navVarients} initial="intial" animate="animate" 
     className={`flex justify-between px-5 h-10 text-white transition duration-300x items-center w-full 
    ${scroll ? "fixed bg-zinc-900 transition z-[100]" : " absolute z-[100]"}`}
    >
      <motion.div variants={navVarients} >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">SHAHEER</h1>
      </motion.div>

      <div>
        <motion.ul className="md:flex gap-4 hidden" variants={navVarients} >
          {
            navItems.map((e,i)=>{
              return(
                <motion.li key={e.label}>
                <ScrollLink
                  to={e.name}
                  className="relative  before:absolute before:bottom-[-1px] cursor-pointer before:w-0 before:h-[2.5px] before:bg-purple-700 hover:before:w-full before:transition-all before:duration-300"
                  activeClass="text-purple-500 font-semibold"
                  smooth={true}
                  spy={true}
    
                >
                  {e.label}
                </ScrollLink>
              </motion.li>
              )
            })
          }


        </motion.ul>
      </div>

      <motion.div variants={navVarients} >
        <a href="#" className="text-2xl cursor-pointer">
          <FaGithub/>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
