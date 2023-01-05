import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SectionWrapper = ({
  children,
  flexDirection = 'flex-col',
}: {
  children: React.ReactNode;
  flexDirection?: 'flex-col' | 'flex-row';
}) => {
  return <div className={`flex ${flexDirection} gap-4`}>{children}</div>;
};

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="py-0.5 text-4xl font-extrabold text-coolmint-600 sm:text-4xl">
      {children}
    </h1>
  );
};

const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative z-0 h-20 w-20">{children}</div>;
};

const SectionParagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-neutral-200 text-lg font-normal">{children}</p>;
};

const SectionList = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={'text-neutral-200 text-lg font-normal ' + className}>
      {children}
    </div>
  );
};

const SocialLinks = () => {
  return (
    <ul className="flex w-full justify-start gap-4 text-left underline-offset-2 ">
      <li>
        <Link
          target="_blank"
          className="hover:underline hover:text-neutral-50 py-1"
          href="/2022JackBiscegliaResume.pdf"
        >
          resume
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          className="hover:underline hover:text-neutral-50 py-1"
          href="https://github.com/jackbisceglia/"
        >
          github
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          className="hover:underline hover:text-neutral-50 py-1"
          href="https://www.linkedin.com/in/jackbisceglia/"
        >
          linkedin
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          className="hover:underline hover:text-neutral-50 py-1"
          href="https://www.goodreads.com/user/show/133940656-jack-bisceglia"
        >
          goodreads
        </Link>
      </li>
    </ul>
  );
};

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
      <div className="flex flex-col gap-8">
        {/* INTRODUCTION SECTION */}
        <SectionWrapper>
          <div className="flex gap-4 w-full h-full items-center ">
            <ImageWrapper>
              <Image
                src="/images/ggbridge.jpg"
                alt="me"
                className="rounded-full border-2 border-coolmint-500 object-cover"
                fill={true}
              />
            </ImageWrapper>
            <SectionHeader>
              Hi, <span className="font-normal text-white">I'm Jack</span>
            </SectionHeader>
          </div>
          <SectionParagraph>
            hi, im a senior at umass amherst majoring in computer science. im
            passionate about software engineering, and building web systems.
          </SectionParagraph>
          <SectionParagraph>
            in my free time, i love watching basketball (go celtics), making hip
            hop beats, and reading books (see my blog)!
          </SectionParagraph>
        </SectionWrapper>
        {/* MIDDLE SECTION */}
        <SectionWrapper flexDirection="flex-row">
          {/* LEFT SIDE */}
          <div className="flex flex-col w-1/2 gap-4">
            <SectionHeader>
              Tech <span className="font-normal text-white">Interests</span> 👨‍💻
            </SectionHeader>
            <SectionParagraph>
              im interested in learning new things and building cool stuff:
            </SectionParagraph>
            <SectionList>
              <ul className="list-inside list-disc font-normal">
                <li>
                  <span className="text-coolmint-500">client side:</span> react
                  and typeScript
                </li>
              </ul>
              <li>
                <span className="text-coolmint-500">server side:</span>{' '}
                typescript or go
              </li>
              <li>
                <span className="text-coolmint-500">otherwise:</span> probably
                python
              </li>
            </SectionList>
            <div className="text-coolmint-500 text-base">
              <p>*still learning golang*</p>
              <p>*i also think svelte is pretty cool*</p>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex flex-col w-1/2 gap-4">
            <SectionHeader>
              More <span className="font-normal text-white">Stuff</span> 🔗
            </SectionHeader>
            <SectionList>
              <SocialLinks />
            </SectionList>
            <SectionList className="flex flex-col gap-2">
              <p>favorite repos:</p>
              <div className="flex transition-all duration-200 ease-in-out hover:pl-6 hover:underline hover:text-white  flex-col justify-start gap-2 rounded-md   bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer py-[0.375rem] px-4 shadow-lg ">
                apptrack.tech
              </div>
              <div className="flex transition-all duration-200 ease-in-out hover:pl-6 hover:underline hover:text-white  flex-col justify-start gap-2 rounded-md   bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer py-[0.375rem] px-4 shadow-lg ">
                letsth.ink
              </div>
              <div className="flex transition-all duration-200 ease-in-out hover:pl-6 hover:underline hover:text-white  flex-col justify-start gap-2 rounded-md   bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer py-[0.375rem] px-4 shadow-lg ">
                mmapicks
              </div>
            </SectionList>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeader>
            Best <span className="font-normal text-white">Blogs</span> ✍️
          </SectionHeader>
          <Link href="/blog/2023technologies">
            <div className="group transition-all duration-200 ease-in-out hover:pl-8 hover:underline flex h-full flex-col justify-start gap-2 rounded-lg bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer p-5  shadow-lg">
              <div className="flex w-full items-start justify-between">
                <p className="text-xl group-hover:underline text-white font-bold">
                  technologies i want to learn in 2023
                </p>
              </div>
              <p className="text-base text-coolmint-500 lowercase">
                posted on x x x
              </p>
              <div>
                <p className="px-3 rounded-md bg-coolmint-500 w-min">cs</p>
              </div>
            </div>
          </Link>
          <Link href="/blog/2023technologies">
            <div className="group transition-all duration-200 ease-in-out hover:pl-8 hover:underline flex h-full flex-col justify-start gap-2 rounded-lg bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer p-5  shadow-lg">
              <div className="flex w-full items-start justify-between">
                <p className="text-xl group-hover:underline text-white font-bold">
                  technologies i want to learn in 2023
                </p>
              </div>
              <p className="text-base text-coolmint-500 lowercase">
                posted on x x x
              </p>
              <div>
                <p className="px-3 rounded-md bg-coolmint-500 w-min">cs</p>
              </div>
            </div>
          </Link>

          <Link
            className="w-fit text-coolmint-500 underline px-4 py-2 hover:bg-coolmint-700/10 hover:border-coolmint-700 border-2 border-coolmint-800 rounded-md duration-100 transition-all"
            href="/blog"
          >
            {'more blogs >'}
          </Link>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Home;
