<<<<<<< HEAD


=======
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import main2unscreen from "../assets/main2unscreen.gif";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mt-5">
        <h2 className={`${styles.sectionHeadText} `}>About Me</h2>
      </motion.div>

<<<<<<< HEAD
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center mt-3">
=======
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center mt-4">
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
        <div className="md:w-1/2 lg:w-1/3 md:shrink-0">
          <img src={main2unscreen} alt="dfgh" />
        </div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
<<<<<<< HEAD
          className="mt-4 text-black  md:text-base lg:text-lg max-w-md md:max-w-xl lg:max-w-2xl leading-relaxed"
=======
          className="mt-2 text-black text-[17px] max-w-3xl leading-[30px] leading-relaxed"
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
        >
          <p>
            Beyond my web development expertise, I possess a robust programming
            background and profound grasp of data structures which empowers me
            to create efficient algorithms to solve complex challenges. My
            portfolio features a collection of projects that demonstrate my
            proficiency in web development, programming, and data structures.
            From crafting comprehensive full-stack applications to tackling
            algorithmic problem-solving, my skills and experience are ready to
            contribute to any project."
          </p>
          <button className={` ${styles.buttontext} bg-[#4477CE] mt-2 py-2 px-5 outline-none w-fit text-white font-bold 
        shadow-md shadow-primary rounded-full  cursor-pointer hover:text-[black]`}>
<<<<<<< HEAD
            <a href=""> Download CV</a>
=======
            <a href="https://drive.google.com/file/d/192MxqLcNUUmwINff-TcIIFvkC1EAaNP7/view?usp=sharing"> Download CV</a>
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
          </button>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
