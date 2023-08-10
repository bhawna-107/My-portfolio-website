
import React from "react";
import { styles } from '../styles.js';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion.js";
import "../App.css";
import { fadeIn } from "../utils/motion.js";
import { FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';


const Home = () => {
  return (
    <section className="relative w-full h-auto mx-auto">
    <div className={` flex flex-col  sm:flex-row gap-50 top-0 sm:items-center `}>
        <div className="flex flex-col mt-5 w-200 mr-20">
          <h1 className={`${styles.heroHeadText}  text-[black]`}>Hi, I'm <span className="text-[#4477CE]"> Bhawna 👋</span></h1>
          <h3 className="text-[#4477CE]  text-[18px]">Developer | Programmer </h3>
          <p className={`${styles.heroSubText} mt-3 sm:mt-0 text-black`}> Passionate software and frontend developer. Transforming ideas into elegant, functional solutions. Bridging creativity and code for exceptional user experiences. </p>
        </div>

        <div className="h-500px md:w-1/2 lg:w-1/3 ml-10 md:shrink-0 ">        
        <img src={require('../assets/hero-size.gif')} alt="hero"/>
        </div>
        </div>

                <div className={`${styles.iconsText} text-[#4477CE] mt-0 flex flex-row gap-5`}>
                     <a className="color-[blue]" href="www.twitter.com" ><FaTwitter /></a>
                     <a href="https://www.linkedin.com/in/bhawna-batra-07102000/" ><FaLinkedin /></a> 
                     <a href="https://github.com/bhawna-107" ><FaGithub /></a>
                </div>
                <div>
        <button className={`${styles.buttontext} mt-4  cursor-pointer rounded-full bg-[#4477CE] text-[white]`}><a href="https://drive.google.com/file/d/192MxqLcNUUmwINff-TcIIFvkC1EAaNP7/view?usp=sharing">Hire Me </a></button>
      </div>

      <div className={` text-[#4477CE] absolute xs:bottom-19 bottom-42 w-full flex gap-10 justify-center items-center  mt-3`}>
        <a href="#about">
          <div className="text-[#4477CE] w-[35px] h-[54px] rounded-full border-4 border-secondary flex justify-center items-center p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 color:[#4477CE] cursor-pointer"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Home, 'home');
