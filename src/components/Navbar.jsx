import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";






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
    },
    {
      name:"contact",
      label:"Contact"
    }
  ]
  const [showMenu,setShowMenu] = useState(false);
  
  return (
    <motion.div variants={navVarients} initial="intial" animate="animate" 
     className={`flex justify-between px-2 md:px-10 h-14 shadow-lg text-white transition fixed duration-300x items-center w-full 
    ${scroll ? "fixed bg-zinc-900 transition z-[100]" : " absolute z-[100]"}`}
    >
      <motion.div variants={navVarients} >
        <h1 className="text-2xl font-bold  ">Portfolio</h1>
      </motion.div>

      <div className="">
        <motion.ul   className={`flex 
    fixed w-full h-[200px] left-0 bg-zinc-900 top-12 shadow-2xl border-t-[1px] border-zinc-800 gap-2 flex-col 
    px-2 py-5 ${showMenu ? "flex" : "hidden"}
    md:w-auto md:max-w-auto md:px-0 md:py-0 md:bg-transparent md:flex-row md:relative md:h-auto md:border-0 md:top-0 md:shadow-none
    md:!flex`}
         variants={navVarients} >
          {
            navItems.map((e,i)=>{
              return(
                <motion.li key={e.label}>
                <ScrollLink
                  to={e.name}
                  className="relative  before:absolute before:bottom-[-1px] cursor-pointer before:w-0 before:h-[2.5px]
                   before:bg-purple-700 hover:before:w-full before:transition-all before:duration-300
                   "
                  activeClass="text-purple-700 font-semibold"
                  smooth={true}
                  spy={true}
                  onClick={()=>setShowMenu(false)}
                >
                  {e.label}
                </ScrollLink>
              </motion.li>
              )
            })
          }

        </motion.ul>
      </div>
      <div className="flex items-center gap-2">
      <motion.div variants={navVarients} >
        <a href="https://github.com/shaheer-waqar" target="-blank" title="github" className="text-2xl cursor-pointer">
          <FaGithub/>
        </a>
      </motion.div>
      <div>

      </div>
      <motion.button 
      variants={navVarients}
      className="text-2xl block md:hidden" onClick={()=>setShowMenu(prev => !prev)}>
      {showMenu ? <IoClose className="font-extrabold text-2xl"/>:<GiHamburgerMenu />}
      </motion.button>
      </div>
    </motion.div>
  );
}

export default Navbar;
