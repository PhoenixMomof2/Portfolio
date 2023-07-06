import AnimatedText from "./components/AnimatedText";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Layout from "./components/Layout";
import Orbit from "./components/Skills";
import TransitionEffect from "./components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profile from "../assets/recentpic.jpeg";
import Skills from "./components/Technologies"

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
      <title>Kandis Arzu-Thompson | About Page</title>
        <meta name="description" content="Learn more about Kandis, a junior full stack developer with a passion for exploring new technologies." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-white">
      <Layout className="pt-16">
        <AnimatedText text="Purpose driven!" className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-3xl sm:mb-8"/>
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-2xl font-bold uppercase text-black/75 dark:text-white">Biography</h2>
            <p className="py-4 font-light text-justify">Queens, New York born Navy brat.  MetroDC transient.  Tidewater region VA influenced.  Princess Anne High School Grad.  Elementary School Salutatorian.  Proud alumni of the incomparable Howard University.  Fierce social justice warrior.  Passionate early education advocate.  Lover of all things Harry Potter, Game of Thrones, and Lord of the Rings.  Aspiring pod-caster.  Basketball coach.  Track coach.  Serial DIYer.  Artist.  Comedian.  Fitness Enthusiast.  STEAM lover.  Thrill seeker.  Social butterfly.  Progressive.  Environmentalist.  Gardner.  Painter.  Hair & Make-Up Enthusiast.  The Ultimate Side Hustlista.</p>       
          </div>

          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 dark:bg-black dark:border-white xl:col-span-4 md:order-1 md:col-span-8">
          <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black dark:bg-red-600"/>
            <Image src={profile} alt="profile-pic" className="w-full h-auto rounded-2xl" layout="intrinsic" width={500} height={500} priority sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>        
          </div>
          
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-medium md:text-5xl sm:text-4xl xs:text-2xl">
                <AnimatedNumbers value={1500}/>+</span>
              <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white xl:text-center md:text-lg sm:text-base xs:text-sm">hours coding</h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-medium md:text-5xl sm:text-4xl xs:text-2xl">
              <AnimatedNumbers value={260}/>+</span>
              <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white xl:text-center md:text-lg sm:text-base
                xs:text-sm">Git repos</h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-medium md:text-5xl sm:text-4xl xs:text-2xl">
              <AnimatedNumbers value={10}/>+</span>
              <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white xl:text-center md:text-lg sm:text-base
                xs:text-sm">applications built</h2>
            </div>            
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-medium md:text-5xl sm:text-4xl xs:text-2xl">
              <AnimatedNumbers value={1} />+</span>
              <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white xl:text-center md:text-lg sm:text-base
                xs:text-sm">years experience</h2>
            </div>            
          </div>
        </div>

        <Orbit />
        <Experience />
        <Education />
        <Skills />
      </Layout>
      </main>
    </>
  );
};

export default about;
