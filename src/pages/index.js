import Head from "next/head";
import AnimatedText from "./components/AnimatedText";
import Layout from "./components/Layout";
import TransitionEffect from "./components/TransitionEffect";
import phoenix from "../../public/assets/phoenix.png";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkSquareAlt, FaMailBulk } from "react-icons/fa";
import HIreMe from "./components/HIre";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";

function Home() {
  return (
    <>
      <Head>
        <title>Kandis Arzu-Thompson | Portfolio</title>
        <meta
          name="description"
          content="Explore Kandis Arzu-Thompson's software engineering portfolio and 
        discover my latest React & Rails applications and software engineering blog articles."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-black w-full min-h-screen dark:text-white sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col gap-8">
            <div className="w-1/2 md:w-full">
              <Image
                src={phoenix}
                alt="phoenix"
                className="lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center pb-16">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design"
                className="!text-6xl !text-left md:!text-4xl"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and blogs, showcasing my expertise in React.js and web
                development.
              </p>
              <div className="flex items-center self-start mt-2 gap-4">
                <Link
                  href="/KandisArzu-ThompsonResume.pdf"
                  target="_blank"
                  download={true}
                  className="flex items-center rounded-xl text-black dark:text-white uppercase p-2.5 px-6 text-lg font-semibold bg-gradient-to-r from-rose-600 to-yellow-500 hover:scale-105 ease-out duration-300 gap-2"
                >
                  Resume <FaExternalLinkSquareAlt />{" "}
                </Link>
                <Link
                  href="mailto:k.arzuthompson@gmail.com"
                  target={"_blank"}
                  className="flex underline text-red-600 text-2xl ml-4 capitalize hover:scale-105 dark:hover:text-yellow-300 hover:text-green-500 ease-out duration-300 gap-2"
                >
                  Contact Me
                  <FaMailBulk />{" "}
                </Link>
              </div>
            </div>
          </div>
          <Main />
          <Testimonials />
        </Layout>

        <HIreMe />
      </main>
    </>
  );
}
export default Home;
