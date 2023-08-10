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

      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center mt-8">
        <div className="md:w-1/2 lg:w-1/3 md:shrink-0">
          <img src={main2unscreen} alt="dfgh" />
        </div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-black text-[17px] max-w-3xl leading-[30px] leading-relaxed"
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
          <button className={`${styles.buttontext} mt-5 rounded-full px-5 py-2 bg-[#4477CE] text-[white]text-sm md:text-base lg:text-lg`}>
            <a href="https://drive.google.com/file/d/192MxqLcNUUmwINff-TcIIFvkC1EAaNP7/view?usp=sharing"> Download CV</a>
          </button>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
