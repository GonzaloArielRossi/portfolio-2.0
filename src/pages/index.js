import Head from 'next/head';

import AboutMe from '@/components/about-me/AboutMe';
import Footer from '@/components/footer/Footer';
import Layout from '@/components/layout/Layout';
import Links from '@/components/links/Links';
import Navbar from '@/components/navbar/Navbar';
import Projects from '@/components/projects/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Gonzalo Rossi</title>
        <meta content="Gonzalo Ariel Rossi's Portfolio" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <Layout>
          <Navbar />
          <Links />
          <AboutMe />
          <Projects />
        </Layout>
        <Footer />
      </main>
    </>
  );
}
