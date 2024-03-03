import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useRef } from 'react';

import AboutMe from '@/components/about-me/AboutMe';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Layout from '@/components/layout/Layout';
import Links from '@/components/links/Links';
import Projects from '@/components/projects/Projects';

export default function Home() {
  const projectsSectionRef = useRef(null);
  return (
    <>
      <Head>
        <title>Home | Gonzalo Rossi</title>
        <meta content="Gonzalo Ariel Rossi" property="og:title" />
        <meta content="Gonzalo Ariel Rossi" name="twitter:title" />

        <meta
          content="Full Stack Developer | React NextJs NodeJs Express MongoDB"
          name="description"
        />
        <meta
          content="Full Stack Developer | React NextJs NodeJs Express MongoDB"
          property="og:description"
        />
        <meta
          content="Full Stack Developer | React NextJs NodeJs Express MongoDB"
          name="twitter:description"
        />

        <meta
          content="https://i.postimg.cc/02v2zDKr/Screenshot-2024-03-03-132334.png"
          property="og:image"
        />
        <meta
          content="https://i.postimg.cc/02v2zDKr/Screenshot-2024-03-03-132334.png"
          name="twitter:image"
        />
        <meta content="index" name="robots" />
        <meta content="follow" name="robots" />
        <meta
          content="HTML, CSS, JavaScript, React, Node, Developer, Full Stack Developer, Front End Developer, Back End Developer, NextJs, Express, SQL, Gonzalo Rossi, Gonzalo Ariel Rossi, Programador, developer"
          name="keywords"
        />
        <meta content="Gonzalo Ariel Rossi" name="author" />
        <meta content="https://gonzalorossi.dev/" property="og:url" />
        <link href="/favicon.ico" rel="icon" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Layout>
        <Header />
        <Links projectsSectionRef={projectsSectionRef} />
        <Flex
          align={'center'}
          as={'main'}
          direction={'column'}
          gap={24}
          justify={'center'}
        >
          <AboutMe />
          <Projects projectsSectionRef={projectsSectionRef} />
        </Flex>
      </Layout>
      <Footer />
    </>
  );
}
