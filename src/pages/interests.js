import Head from "next/head";
import Layout from "./components/Layout";
import TransitionEffect from "./components/TransitionEffect";
import Interests from './components/Interests';
import Portfolio from "./components/Portfolio";

const interests = () => {
  return (
    <>
      <Head>
      <title>Kandis Arzu-Thompson | Interests Page</title>
        <meta name="description" content="Learn more about my interests outside of coding and software development." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-white">
          <Layout className="pt-16">
            <Portfolio />
            <Interests />
          </Layout>
      </main>
    </>
  )
}
export default interests