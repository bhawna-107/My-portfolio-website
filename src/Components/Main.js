<<<<<<< HEAD

=======
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
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
    <div className={` flex flex-col-reverse  sm:flex-row gap-30 top-0`}>
<<<<<<< HEAD
        <div className="flex flex-col  w-300 ">
          <h1 className={`${styles.heroHeadText}  text-[black]`}>Hi, I'm <span className="text-[#4477CE]"> Bhawna👋</span></h1>
          <h3 className="text-[#4477CE]  text-[18px]">Developer | Programmer </h3>
          <p className={`${styles.heroSubText} mt-2 sm:mt-0 text-black`}> Passionate software and frontend developer. Transforming ideas into elegant, functional solutions. Bridging creativity and code for exceptional user experiences. </p>
=======
        <div className="flex flex-col w-300">
          <h1 className={`${styles.heroHeadText}  text-[black]`}>Hi, I'm <span className="text-[#4477CE]"> Bhawna 👋</span></h1>
          <h3 className="text-[#4477CE]  text-[18px]">Developer | Programmer </h3>
          <p className={`${styles.heroSubText} mt-3 sm:mt-0 text-black`}> Passionate software and frontend developer. Transforming ideas into elegant, functional solutions. Bridging creativity and code for exceptional user experiences. </p>
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
          <div className={"text-[#4477CE] mt-0 flex flex-row gap-5"}>
                     <a className={`${styles.iconsText}`} href="www.twitter.com" ><FaTwitter /></a>
                     <a className={`${styles.iconsText}`}href="https://www.linkedin.com/in/bhawna-batra-07102000/" ><FaLinkedin /></a> 
                     <a className={`${styles.iconsText}`}href="https://github.com/bhawna-107" ><FaGithub /></a>
                </div>
                <div>
        <button className={` ${styles.buttontext} bg-[#4477CE] mt-2 py-2 px-5 outline-none w-fit text-white font-bold 
        shadow-md shadow-primary rounded-full  cursor-pointer hover:text-[black]`}><a href="https://drive.google.com/file/d/192MxqLcNUUmwINff-TcIIFvkC1EAaNP7/view?usp=sharing">Hire Me </a></button>
      </div>
        </div>

<<<<<<< HEAD
        <div className="h-700px md:w-1/2 lg:w-1/2  md:shrink-0 ">        
=======
        <div className="h-500px md:w-1/2 lg:w-1/2 md:shrink-0 ">        
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
        <img src={require('../assets/hero-size.gif')} alt="hero"/>
        </div>
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
