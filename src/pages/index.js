import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

import AboutMe from '@/components/about-me/AboutMe';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Layout from '@/components/layout/Layout';
import Links from '@/components/links/Links';
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
      <Layout>
        <Header />
        <Links />
        <Flex
          align={'center'}
          as={'main'}
          direction={'column'}
          gap={24}
          justify={'center'}
        >
          <AboutMe />
          <Projects />
        </Flex>
      </Layout>
      <Footer />
    </>
  );
}
