import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y}) => {

  return (
  <motion.div className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer absolute py-3 px-6  dark:text-black dark:bg-white lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-black xs:dark:text-white xs:font-bold"
    whileHover={{scale:1.05}}
    initial={{x:0, y:0}}
    whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
  //   viewPort={{once: true}}
  >
    {name}
  </motion.div>)
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center md:text-6xl md:mt-32 pb-8">Skills</h2>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-dark cursor-pointer" 
        whileHover={{scale: 1.05}}>
          Web
        </motion.div>

        <Skill name="CSS" x="7vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="MCV" x="-3vw" y="12vw" />
        <Skill name="NextJS" x="-12vw" y="-12vw" />
        <Skill name="Web Design" x="30vw" y="-5vw" />
        <Skill name="Excalidraw" x="0vw" y="-20vw" />
        <Skill name="Tailwind" x="-20vw" y="18vw" />
        <Skill name="React" x="-30vw" y="-8vw" />
        <Skill name="Rails" x="10vw" y="20vw" />
        <Skill name="Postgres" x="20vw" y="-18vw" />

      </div>
    </>   
  )
}
export default Skills