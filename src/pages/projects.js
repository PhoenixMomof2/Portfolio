import AnimatedText from "./components/AnimatedText";
import {GithubIcon} from '../pages/components/Icons'
import Layout from "./components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "./components/TransitionEffect";
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import p1 from '../assets/TVApp.png'
import p2 from '../assets/HungerSmash.jpg'
import p3 from '../assets/Hogwarts-ish.jpg'
import p4 from '../assets/Awaken.jpg'
import p5 from '../assets/B-Clever.jpg'
import p6 from '../assets/BudgetApp.png'
import p7 from '../assets/RecipeApp.png'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-black bg-white shadow-2xl p-12 dark:bg-black dark:border-white
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black dark:bg-white
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-red-600 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-white lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-white sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 hover:text-purple-500 dark:hover:text-purple-500">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex gap-2 items-center ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold
            dark:bg-white dark:text-black sm:px-4 sm:text-base hover:text-orange-400 dark:hover:text-red-600">
            Project Demo <FaExternalLinkSquareAlt />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-black bg-white p-6 relative dark:bg-black dark:border-white xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black
    rounded-br-3xl dark:bg-white md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-red-600 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base hover:text-orange-400"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6 hover:text-purple-500">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Kandis Arzu-Thompson | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-6 flex flex-col items-center justify-center dark:text-white">
        <Layout className="pt-16">
        <AnimatedText
            text="Limitless Imagination!"
            className="mb-6 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
      
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="React & Ruby on Rails"
                title="Awaken Social Book Club"
                summary="Full stack application with React front end and a Ruby on Rails backend."
                img={p4}
                link="https://youtu.be/myubSd26GxA"
                github="https://github.com/PhoenixMomof2/AwakenBookClub.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Budget App"
                title="B-Clever"
                img={p5}
                link="#"
                github="https://github.com/PhoenixMomof2/B-Clever.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="One-Page JavaScript App"
                title="TV Show Search"
                img={p1}
                link="https://youtu.be/owoN-BG4y60"
                github="https://github.com/PhoenixMomof2/TVShowSearchApp.git"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="React Application"
                title="Hunger Smash"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={p2}
                link="https://youtu.be/GYz5dWCB_yQ"
                github="https://github.com/PhoenixMomof2/hunger-smash.git"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="React, Sinatra, & Active Record"
                img={p3}
                title="Hogwarts-ish"
                link="https://youtu.be/Lpn5gzCd7Cs"
                github="https://github.com/PhoenixMomof2/Hogwarts-ish.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="React & Ruby on Rails"
                img={p6}
                title="Clever Munchkins"
                link="#"
                github="https://github.com/PhoenixMomof2/clever-munchkins-app.git"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Tailwindcss"
                title="Recipe App"
                summary="One page recipe displaying application to practice tailwindcss styling basics."
                img={p7}
                link="https://youtu.be/myubSd26GxA"
                github="https://github.com/PhoenixMomof2/AwakenBookClub.git"
              />
            </div>
          </div> 
        </Layout>
      </main>
    </>
  );
};
export default projects;