import React from "react";
import { delay, motion } from "framer-motion";
import profileImg from "../assets/git.jpg";
import resume from "../assets/ruseme.pdf"
const ImgAnimation = {
  animate: {
    y: [10,-10], // increased distance to make the effect more noticeable
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse",
      yoyo: Infinity,

    },
  },
};
const textAnimation = {
  initial: {
    x: -600,
  },
  animate: {
    x: 0, // increased distance to make the effect more noticeable
    transition: {
      duration: 0.5,
      staggerChildren:0.3
    },
  },
};

function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse justify-center text-white gap-y-5 sm:justify-between px-2 sm:px-10 items-center h-screen sm:flex-row bg-zinc-900 ">
        <motion.div className="flex flex-col   gap-2" variants={textAnimation} initial="initial" animate="animate">
          <motion.h1 variants={textAnimation}  className="text-2xl md:text-4xl font-extralight leading-tight">
            Muhammad Shaheer
            {/* <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text "></span> */}
          </motion.h1>
          <motion.h1 variants={textAnimation} className="text-2xl md:text-4xl leading-tight font-bold bg-gradient-to-r  from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Web Developer            
            {/* <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text "></span> */}
          </motion.h1>
          <motion.button variants={textAnimation}
            className="border-2 px-2 py-1 w-[200px] rounded-sm border-white  hover:text-white
          relative before:absolute before:bottom-0 before:z-[0] before:left-0 cursor-pointer before:w-0 
          before:h-full hover:before:w-full before:transition-all before:duration-500
          before:bg-gradient-to-r before:from-pink-500 before:to-purple-600  hover:border-transparent
          
          "
          >
            <a href={resume} download={true} className="relative z-[10]">Download CV</a>
          </motion.button>
        </motion.div>
        <div >
          <motion.div
            className="h-[250px] sm:h-[300px] w-[250px] sm:w-[300px] border-[5px] border-purple-600 boxshadow rounded-full  relative flex justify-center items-center "
            variants={ImgAnimation}
            animate="animate"
          >
            <img
              src={profileImg}
              className="h-full w-full object-cover rounded-full"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
