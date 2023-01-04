import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

const paragraphStyle = 'text-gray-100 text-lg font-base';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome - Jack B</title>
        <meta
          name="description"
          content="Senior CS Student @ UMass Amherst with an interest in Fullstack Engineering. Lots of Web stuff."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>"
        />
      </Head>
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-4">
          <Image src="/images/ggbridge.jpg" />
          <h1 className="py-0.5 text-3xl font-extrabold text-purple-400 sm:text-4xl">
            Hi, <span className="font-medium text-white">I'm Jack</span>
          </h1>
        </div>
        <p className={paragraphStyle}>
          hi, im a senior at umass amherst majoring in computer science. im
          passionate about software engineering, and building web systems.
        </p>
        <p className={paragraphStyle}>
          in my free time, i love watching basketball (go celtics), making hip
          hop beats, and reading books (see my blog)!
        </p>
      </div>
    </>
  );
};

export default Home;
