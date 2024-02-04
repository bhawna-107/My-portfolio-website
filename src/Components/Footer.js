import {styles} from '../styles.js';
import { FaTwitter, FaLinkedin, FaGithub, FaCopyright } from 'react-icons/fa';
import copyright from '../assets/copyright.png'

const Footer=()=>{
    return(
        <div className="py-5 bg-[#4477CE] ">
            <div className="flex  justify-between px-28 ">
            <h1>Bhawna Batra</h1>
            <div className={`text-[30px] text-[white] mt-0 flex flex-row gap-5`}>
<<<<<<< HEAD
                     <a href="www.twitter.com" ><FaTwitter /></a>
=======
                     <a className="color-[blue]" href="www.twitter.com" ><FaTwitter /></a>
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
                     <a href="https://www.linkedin.com/in/bhawna-batra-07102000/" ><FaLinkedin /></a> 
                     <a href="https://github.com/bhawna-107" ><FaGithub /></a>
                </div>
            
            </div>
            <h6 className='text-center'>Made By Bhawna Batra</h6>
             <div className=" flex flex-row justify-center">
<<<<<<< HEAD
            
=======
                
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
                <span className='text-center mr-1 mt-1'><FaCopyright /></span>2023. All rights reserved
                </div>
        </div>
    )
}
export default Footer;