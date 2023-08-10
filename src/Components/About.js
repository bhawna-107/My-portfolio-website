// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";
// import carrent from "../assets/carrent.png";

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()} className="text-center">
//         <h2 className="text-black font-medium text-[40px]">About Me</h2>
//       </motion.div>
//       <div className="flex flex-row gap-20">
//         <motion.div>
//           <img src={carrent} alt="dfgh" w-40 h-50 />
//         </motion.div>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
//         >
//           In addition to my web development skills, I have a strong background
//           in programming and a deep understanding of data structures. This
//           allows me to design efficient algorithms and implement optimized
//           solutions to complex problems. My portfolio features a collection of
//           projects that demonstrate my proficiency in web development,
//           programming, and data structures. From full-stack applications to
//           algorithmic problem-solving, I'm confident that my skills and
//           experience will make a valuable contribution to any project.

//           <button className="mt-5 rounded-full">Download CV</button>
//         </motion.p>

//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");

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
          className="mt-4 text-black  md:text-base lg:text-lg max-w-md md:max-w-xl lg:max-w-2xl leading-relaxed"
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
          <button className="mt-5 rounded-full px-5 py-2 bg-[#4477CE] text-[white]text-sm md:text-base lg:text-lg">
            <a href=""> Download CV</a>
          </button>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
