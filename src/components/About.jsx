import React, { } from "react";
import { motion,} from "framer-motion";
import AboutPic from "../assets/git.jpg";


const aboutPicture={
    initial:{
      x:-100,opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
      }
    }
          
  
}
function About() {
  return (
    <div className="text-white ">
      <h1 className="text-center text-3xl font-semibold py-10">About <span className="text-gray-400">Me</span></h1>
      <div className="flex  flex-wrap  overflow-hidden">
        <motion.div className="w-full md:w-1/2"
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:.5}}
        >
          <div className="flex  justify-center ">
            <img className="w-full max-w-[400px] rounded-xl" src={AboutPic} alt="" />
          </div>

        </motion.div>
          <motion.div 
          initial={{x:100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:.5}}
           className="w-full md:w-1/2 flex justify-center">
            <h1 className="text-white max-w-[600px] px-0 md:px-2">
              I am Pasionate Front-end Develpoper with knack for crafting Web
              applications. I bring a solid foundation in web development
              technologies, along with a strong desire to learn more and grow in the
              field. My Coursework has focused on HTML, CSS, Javascript, and
              React js , equipping me web development. I am always ready to apply my
              knowledge and passoion for coding to real-world projects, and gain
              hand-on-experince.I am comitted to continous learning and
              develpoment, always seeking opportinities to enhance my skills and
              stay up-to-date with industry advancements.
            </h1>
          </motion.div>
      </div>
    </div> 
  );
}

export default About;
