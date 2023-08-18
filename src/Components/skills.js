import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import {motion} from 'framer-motion';

const Skills = () => {
  return (
    <>
    <motion.div variants= {textVariant()} className='text-center'>
    <h2 className={`${styles.sectionHeadText}`}>My Skills</h2>
  </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-10 mt-4'>
    {technologies.map((technology) =>(
        <div className="w-28 h-28" key
        ={technology.name} >
        <img src={technology.icon} alt="css"/>
        <h3 className='text-black text-center'>{technology.name}</h3>
          </div>
      ))}
      
    </div>
    </>
  )
}

export default SectionWrapper(Skills, 'skills');
