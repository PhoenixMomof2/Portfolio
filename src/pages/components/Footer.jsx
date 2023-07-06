import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black
    font-medium dark:text-white dark:border-white sm:text-base
    ">
      <Layout className="py-2 flex items-center justify-between lg:flex-col">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With <span className="px-1 text-2xl text-orange-700 dark:text-green-300">&#9825;</span> 
          by&nbsp;<Link href="https://theultimatesidehustlista.com" className="underline underline-offset-2 hover:text-green-500"
          target={"_blank"}>The Dev Phoenix</Link>
        </div>
          <Link  href="https://theultimatesidehustlista.com" className="underline underline-offset-2  hover:text-green-500"
          target={"_blank"}>Say Hello </Link>
      </Layout>
    </footer>
  )
}
export default Footer