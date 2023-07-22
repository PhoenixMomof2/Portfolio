import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter }  from "next/router"
import { TiThMenuOutline } from 'react-icons/ti'
import { BsFillXSquareFill } from 'react-icons/bs'
import { FaLinkedin, FaDev, FaGitSquare } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../../../public/assets/logo.png';
import { motion } from 'framer-motion'
import useDarkMode from './hooks/useDarkMode'
import { MoonIcon, SunIcon } from '../components/Icons'

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-white`} >&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleTogClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-white dark:text-black my-2`}
      onClick={handleTogClick}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-white
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-black`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
    const [mode, setMode] = useDarkMode()
    const [isOpen, setIsOpen] = useState(false);  
    const [shadow, setShadow] = useState(false);
    const navBg = mode === "dark" ? '#000000' : '#FFFFFF';
   
    const handleClick = () => setMode(!mode)

    const handleMenuClick = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);

  const SOCIAL = [
  {
    id: 1, 
    link: "https://www.linkedin.com/in/kandis-arzu-thompson/",
    icon: <FaLinkedin />,
  },
  {
    id: 2, 
    link: "https://github.com/PhoenixMomof2",
    icon: <FaGitSquare />,
  },
  {
    id: 3, 
    link: "https://dev.to/kandis",
    icon: <FaDev />,
  },
  {
    id: 4, 
    link: "mailto:k.arzuthompson@gmail.com",
    icon: <AiOutlineMail />,
  },    
]
  return (
    <header style={{ backgroundColor: navBg}} className={shadow ? 'w-full fixed top-0 left-0 right-0 px-32 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8 shadow-xl' : 'w-full fixed top-0 left-0 right-0 px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8'}>

     <button className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleMenuClick}
      >
      { isOpen ? <BsFillXSquareFill /> : <TiThMenuOutline /> }      
    </button>
   
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
        <CustomLink href="/" title="Home" className='mx-4'/>
        <CustomLink href="/about" title="About" className='mr-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/blogs" title="Blogs" className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          {SOCIAL.map(({id, link, icon}) => (
            <motion.a 
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            key={id} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleClick}
            className="text-3xl m-3 cursor-pointer hover:text-rose-600 hover:scale-110">                  
            {icon}                  
            </motion.a>
          ))}
          <div className="flex gap-2 items-center justify-between">        
            <div onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1 ease
            ${mode === "light" ? "bg-black text-white" : "bg-white text-black"}
            `}>
              {mode === "dark" ? (
                <MoonIcon className="text-2xl cursor-pointer items-center justify-end" />
                ) : (
                <SunIcon className="text-2xl cursor-pointer items-center justify-end" />
              )}         
            </div>
          </div>
        </nav>
      </div>

      {/* sidebar */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center">            
            <CustomMobileLink
              href="/"
              title="Home"
              className="text-xl hover:scale-105 cursor-pointer"
              toggle={handleMenuClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="text-xl hover:scale-105 cursor-pointer"
              toggle={handleMenuClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="text-xl hover:scale-105 cursor-pointer"
              toggle={handleMenuClick}
            />
            <CustomMobileLink
              href="/blogs"
              title="Blogs"
              className="text-xl hover:scale-105 cursor-pointer"
              toggle={handleMenuClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
          {SOCIAL.map(({id, link, icon}) => (
            <motion.a
              key={id}
              href={link}
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1 text-3xl hover:text-orange-400 text-white dark:text-black dark:hover:text-orange-400"
            >
              {icon}
            </motion.a>))}
            
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1
      ${mode === "light" ? "bg-black text-white" : "bg-white text-black"}
      `}
            >
              {mode === "light" ? (
            <SunIcon className={"fill-black"} />
          ) : (
            <MoonIcon className={"fill-black"} />
          )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 transform translate-x-[-50%]">
        <Image src={logo} alt="logo" width={shadow ? 40 : 100} height={shadow ? 40 : 100} className="rounded-full shadow-xl dark:bg-white dark:shadow-white"/>
      </div>
    </header>
  )
}
export default Navbar