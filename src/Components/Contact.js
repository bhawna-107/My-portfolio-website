import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import mail from '../assets/mail.png';
import  location  from '../assets/location.png';
import { FaTwitter, FaLinkedin, FaGithub, FaGit } from 'react-icons/fa';



///template_0er8hy7  temp
//service_1qdrbjo serv

const Contact = () => {
  const formRef = useRef();
  const [form, setForm]= useState({
    name: '',
    email:'',
    message: ''
  })
  const [loading,setLoading] = useState(false);

  const handleChange=(e) =>{
    const { target } =e;
    const {name, value} = e.target;
    setForm({...form, [name] : value })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_1qdrbjo','template_0er8hy7',{
      from_name: form.name,
      to_name: 'Bhawna',
      from_email: form.email,
      to_email: 'contact@bhawnabatra107@gmail.com',
      message: form.message,
    },
    'u8FH2zcT0C-pp4nB_'
    ).then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong')
    })
  }

  return (
   <div className='  flex xl:flex-row flex-col flex sm:gap-20 overflow-hidden'
   >
    <motion.div variants = {slideIn('left', 'tween', 0.2, 1)} className=
    'flex-[0.75]   rounded-2xl'>
      <p className={`${styles.sectionSubText} text-[black]`}>Get in Touch</p>
      <h3 className={styles.sectionHeadText}>Contact</h3>

      <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8 sm:h-[650px] h-[750px] sm:w-[550px]  w-full'>
        <label className='flex flex-col'>
          <span className='text-[#4477CE] font-medium mb-4'>Your Name</span>
          <input type='text'
          required
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='Type your name here'
          className='bg-white py-4 px-6
           placeholder:text-secondary text-white 
           rounded-lg outlined-none border-black font-medium '
          />
        </label>

        <label className='flex flex-col'>
          <span className='text-[#4477CE] font-medium mb-4'>Your Email</span>
          <input type='email'
           required
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder='Type your email here'
          className='bg-white  py-4 px-6
           placeholder:text-secondary text-white 
           rounded-lg outlined-none border-black font-medium'
          />
        </label>

        <label className='flex flex-col'>
          <span className='text-[#4477CE] font-medium mb-4'>Your Message</span>
          <textarea
           required
          rows='7'
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder='Type your Message here'
          className='bg-white  py-4 px-6
           placeholder:text-secondary text-white 
           rounded-lg outlined-none border-black font-medium'
          />
        </label>

<<<<<<< HEAD
        <button type='submit' className={` ${styles.buttontext} bg-[#4477CE] py-3 px-8 outline-none w-fit text-white font-bold 
=======
        <button type='submit'className={` ${styles.buttontext} bg-[#4477CE] mt-2 py-2 px-5 outline-none w-fit text-white font-bold 
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
        shadow-md shadow-primary rounded-full  cursor-pointer hover:text-[black]`} >
          {loading ? 'Sending...': 'Send'}
        </button>
      </form>
    </motion.div>

    <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto  h-auto ' >
        <div className='flex flex-col'>
        <p className={`${styles.contactText}`}> Don't be shy !</p> 
        <p className={`${styles.contactText}`}>  Connect with me ! </p> 

                <div className={` py-5 text-[#4477CE] flex flex-row gap-5`}>
                     <a className={`${styles.iconsText} `} href="www.twitter.com" ><FaTwitter /></a>
                     <a className={`${styles.iconsText} `}href="https://www.linkedin.com/in/bhawna-batra-07102000/" ><FaLinkedin /></a> 
                     <a className={`${styles.iconsText} `}href="https://github.com/bhawna-107" ><FaGithub /></a>
                </div>
                <div className='flex flex-row gap-10 mt-5'>
                  <img src={mail} alt='mail'/>
                  <div className='text-black'>
                    <h2>E-mail</h2>
                    <p className='text-[grey]'>bhawnabatra107@gmail.com</p>
                  </div>
                </div>

                <div className='flex flex-row gap-10 mt-5'>
                  <img src={location} alt='location'/>
                  <div className='text-black'>
                    <h2>Location</h2>
                    <p className='text-[grey]'>Haryana,India</p>
                  </div>
                </div>
                </div>
    </motion.div>
    </div>
  )
}
<<<<<<< HEAD
export default SectionWrapper(Contact,'contact');
=======
export default SectionWrapper(Contact,'contact');
>>>>>>> 6617c838fac79a361482d06f18f86cefa0a3ef2f
