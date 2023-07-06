import Head from "next/head";
import Layout from "./components/Layout";
import TransitionEffect from "./components/TransitionEffect";
import Contact from "../pages/components/Contact";

const contact = () => {
  return (
    <>
      <Head>
      <title>Kandis Arzu-Thompson | Contact Page</title>
        <meta name="description" content="Ways to get in touch with me." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-white">
          <Layout className="pt-16">          
            <Contact />
          </Layout>
      </main>
    </>
  )
}
export default contact