// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import bhawnalogo from "../assets/bhawnalogo.png";
// import menu from "../assets/menu.svg";
// import close from "../assets/close.svg";

// const Navbar = () => {
//   const [active, setActive] = useState();
//   const [toggle, setToggle] = useState(false);
//   return (
//     <>
//     <nav
//       className={`${styles.paddingX}  sm:flex flex-col w-full justify-center  py-1
//      bg-primary sticky`}
//     >
//       <div
//         className="w-full flex justify-between
//        items-center max-w-7xl mx-auto "
//       >
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img
//             src={bhawnalogo}
//             alt="fgh"
//             className="w-12 h-18 object-contain rounded-full"
//           />
//           |
//           <p
//             className="text-white text-[25px] 
//           font-bold cursor-pointer flex"
//           >
//             Bhawna Batra
//           </p>
//         </Link>

//         <ul className="list-none  hidden sm:flex flex flex-column gap-10 fixed">
//           {navLinks.map((link) => (
//             <li
//               key={link.id}
//               className={`${
//                 active === link.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => {
//                 setToggle(!toggle);
//                 setActive(link.title);
//               }}
//             >
//               <a href={`#${link.id}`}>{link.title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className=" sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain
//            cursor-pointer"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "block"
//           } p-6 black-gradient absolute top-20 right-0 mx-4 ,min-w-[140px] z-10 rounded-xl`}
//         >
//           <ul className="list-none  flex  flex-1 justify-end items-start flex-col gap-10">
//             {navLinks.map((link) => (
//               <li
//                 key={link.id}
//                 className={`${
//                   active === link.title ? "text-white" : "text-secondary"
//                 } font-poppins text-[16px] font-medium cursor-pointer`}
//                 onClick={() => {
//                   setToggle(!toggle);
//                   setActive(link.title);
//                 }}
//               >
//                 <a href={`#${link.id}`}>{link.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import close from "../assets/close.png";
import menu1 from '../assets/menu1.png';
import logobhawna from '../assets/logobhawna.png';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex  py-5 sm:px-28 px-5 sticky top-0 z-20 bg-[#fff] `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logobhawna} alt='logo' className='w-10 h-9 object-contain' />
          <p className='text-[#4477CE] text-[18px] font-bold cursor-pointer flex '>
            Bhawna Batra &nbsp;
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[black]
               hover:text-[#4477CE] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu1}
            alt='menu'
            className='w-[28px] h-[28px] object-contain color:black'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-black"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
