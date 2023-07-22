import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HTML from '../../../public/assets/html.png'
import CSS from '../../../public/assets/css.png';
import Javascript from '../../../public/assets/javascript.png';
import ReactImg from '../../../public/assets/react.png';
import Tailwind from '../../../public/assets/tailwind.png';
import Rails from '../../../public/assets/rails.png';
import Node from '../../../public/assets/node.png';
import Ruby from '../../../public/assets/ruby.png'
import GitHub from '../../../public/assets/github.png'
import Postgre from '../../../public/assets/postgresql.png'
import Next from '../../../public/assets/nextjs.png'
import Redux from '../../../public/assets/redux.png'

const Technologies = () => {
  return (
    <>
        <h1 className='tracking-widest uppercase font-bold text-red-600 pt-12'>
          Technologies
        </h1>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8'>
          <Link  href="https://www.w3schools.com/js/default.asp"
          target="_blank" 
          rel="noopener noreferrer">                 
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                    <Image src={Javascript} width='64px' height='64px' alt="JavaScript" priority={true}/>                 
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">JavaScript</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.w3schools.com/html/default.asp"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                  <Image src={HTML} width='64px' height='64px' alt="html" priority={true}/> 
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">HTML</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.w3schools.com/css/default.asp"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={CSS} width='64px' height='64px' alt="CSS" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">CSS</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.w3schools.com/react/default.asp"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt="React" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">React</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://guides.rubyonrails.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto '>
                <Image src={Rails} width='64px' height='64px' alt="Rails" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Rails</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://tailwindcss.com/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt="Tailwind" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Tailwind</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.w3schools.com/nodejs/default.asp"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Node} width='64px' height='64px' alt="Node" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Node.js</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://ruby-doc.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Ruby} width='64px' height='64px' alt="Ruby" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Ruby</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.postgresql.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Postgre} width='64px' height='64px' alt="Postgre" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-lg">PostgreSQL</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://github.com/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={GitHub} width='64px' height='64px' alt="GitHub" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">GitHub</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://nextjs.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className="dark:bg-white" src={Next} width='64px' height='64px' alt="GitHub" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-lg">Next.js</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://redux.js.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Redux} width='64px' height='64px' alt="Redux" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Redux</h3>
              </div>
            </div>
          </div>
          </Link>
        </div>      
    </>
  );
};
export default Technologies;