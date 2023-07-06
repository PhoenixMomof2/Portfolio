import React from 'react'
import circle_text from '../../assets/roles.png'
import Image from 'next/image'
import Link from 'next/link'

const HIre = () => {
  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-20 md:bottom-auto md:absolute
    sm:right-4">   
    <div className="w-48 h-auto flex items-center justify-center relative md:w-24">      
      <div className="animate-spin-slow">
        <Image
        priority
        src={circle_text}
        alt="circle_text"
        />   
      </div>
      <Link href="/contact" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-slate-500  hover:dark:border-white md:w-12 md:h-12 md:text-[10px]">Hire Me</Link> 
      </div>   
    </div>
  )
}
export default HIre