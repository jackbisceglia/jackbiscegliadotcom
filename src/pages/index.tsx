import {
  ArrowRightIcon,
  BookmarkFilledIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const style_defaults = {
  section_gap: 'gap-10',
  content_gap: 'gap-4',
};

export const Divider = () => <hr className="border-coolmint-700" />;

const SectionWrapper = ({
  children,
  flexDirection = 'flex-col',
  gap = style_defaults.content_gap,
}: {
  children: React.ReactNode;
  flexDirection?: string;
  gap?: string;
}) => {
  return <div className={`flex ${flexDirection} ${gap}`}>{children}</div>;
};

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="py-1 text-3xl font-extrabold text-coolmint-600 sm:text-4xl">
      {children}
    </h1>
  );
};

const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-0 sm:h-20 sm:w-20 w-14 h-14">{children}</div>
  );
};

const SectionParagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="font-normal text-neutral-200 sm:text-lg ">{children}</p>;
};

const SectionList = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={'text-neutral-200 sm:text-lg font-normal ' + className}>
      {children}
    </div>
  );
};

export const SocialLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const LinkStyle =
    'flex justify-center items-center gap-2  hover:text-coolmint-500 hover:underline py-1 transition-all duration-200 ease-in-out ';
  return (
    <li className="mr-auto">
      <Link target="_blank" className={LinkStyle} href={href}>
        {children}
      </Link>
    </li>
  );
};

const BlogCard = ({
  title,
  date,
  tags,
  slug,
}: {
  title: string;
  date: string;
  tags: string[];
  slug: string;
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex flex-col justify-start h-full gap-2 p-5 lowercase transition-all duration-200 ease-in-out border-2 rounded-lg shadow-lg cursor-pointer group hover:pl-8 bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-coolmint-700">
        <div className="flex items-start justify-between w-full">
          <p className="text-base font-extrabold text-white sm:text-xl group-hover:underline">
            {title}
          </p>
        </div>
        <p className="text-sm lowercase text-coolmint-500">posted on {date}</p>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <p
              key={tag}
              className="px-2 text-xs rounded-md text-coolmint-800 bg-coolmint-500 w-min"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props,
) => {
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
      <div
        className={`flex flex-col prose-strong:font-extrabold ${style_defaults.section_gap}`}
      >
        {/* INTRODUCTION SECTION */}
        <SectionWrapper>
          <div className="flex items-center w-full h-full gap-4">
            <ImageWrapper>
              <Image
                src="/images/ggbridge4.jpg"
                alt="me"
                className="object-cover rounded-full border-coolmint-600"
                fill={true}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                quality={100}
              />
            </ImageWrapper>
            <SectionHeader>
              Hi, <span className="font-normal text-white">I&#39;m Jack</span>
            </SectionHeader>
          </div>
          <SectionParagraph>
            hi, im a senior at <strong>umass amherst</strong> majoring in
            computer science, and im passionate about software engineering and
            building web systems. recently, i&#39;ve interned at{' '}
            <strong>salesforce</strong> and <strong>hubspot</strong> working as
            a software engineer! currently working on{' '}
            <Link
              className="underline hover:text-coolmint-500"
              href="https://apptrack.tech"
            >
              apptrack
            </Link>
            🙂.
          </SectionParagraph>
          <SectionParagraph>
            in my free time, i love watching basketball (go celtics), making hip
            hop beats, and reading books (see my blog)!
          </SectionParagraph>
        </SectionWrapper>
        {/* MIDDLE SECTION */}
        <SectionWrapper
          flexDirection="flex-col lg:flex-row"
          gap={style_defaults.section_gap}
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col w-full gap-4 lg:w-1/2">
            <SectionHeader>
              Tech <span className="font-normal text-white">Interests</span> 👨‍💻
            </SectionHeader>
            <SectionParagraph>
              always learning things and building stuff
            </SectionParagraph>
            <SectionList>
              <ul className="font-normal list-disc list-inside">
                <li>
                  <span className="text-coolmint-500">client side:</span>{' '}
                  <strong>react</strong> and typeScript
                </li>
                <li>
                  <span className="text-coolmint-500">server side:</span>{' '}
                  <strong>typescript</strong> or go
                </li>
                <li>
                  <span className="text-coolmint-500">otherwise:</span> probably{' '}
                  <strong>python</strong>
                </li>
              </ul>
            </SectionList>
            <div className="text-sm text-coolmint-500/30 sm:text-base">
              <p>*still learning golang*</p>
              <p>*i also think svelte is pretty cool*</p>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex flex-col w-full gap-4 lg:w-1/2">
            <SectionHeader>
              More <span className="font-normal text-white">Stuff</span> 🔗
            </SectionHeader>
            <SectionList>
              <ul className="grid w-full grid-flow-col grid-rows-2 text-left">
                <SocialLink href="/2022JackBiscegliaResume.pdf">
                  <FileTextIcon />
                  resume
                </SocialLink>
                <SocialLink href="https://github.com/jackbisceglia/">
                  <GitHubLogoIcon />
                  github
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/jackbisceglia/">
                  <LinkedInLogoIcon />
                  linkedin
                </SocialLink>
                <SocialLink href="https://www.goodreads.com/user/show/133940656-jack-bisceglia">
                  <BookmarkFilledIcon />
                  goodreads
                </SocialLink>
              </ul>
            </SectionList>
            <SectionList className="flex flex-col gap-2">
              <strong>favorite repos:</strong>
              <div className="flex transition-all duration-200 ease-in-out hover:pl-6 hover:underline hover:text-white  flex-col justify-start gap-2 rounded-md   bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer py-[0.375rem] px-4 shadow-lg ">
                <Link
                  href="https://github.com/jackbisceglia/apptrack"
                  target="_blank"
                >
                  apptrack.tech 🚀{' '}
                </Link>
              </div>
              <div className="flex transition-all duration-200 ease-in-out hover:pl-6 hover:underline hover:text-white  flex-col justify-start gap-2 rounded-md   bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer py-[0.375rem] px-4 shadow-lg ">
                <Link
                  href="https://github.com/LinkFrost/letsthink"
                  target="_blank"
                >
                  letsth.ink 💡
                </Link>
              </div>
            </SectionList>
          </div>
        </SectionWrapper>
        <Divider />
        <SectionWrapper>
          <SectionHeader>
            Best <span className="font-normal text-white">Blogs</span> ✍️
          </SectionHeader>
          {props.bestBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              title={blog.title}
              date={blog.date}
              tags={blog.tags}
              slug={blog.slug}
            />
          ))}
          <Link
            className="flex items-center gap-1 px-2 py-1 transition-all duration-200 ease-in-out hover:underline flex-start text-neutral-200 hover:text-coolmint-500"
            href="/blog"
          >
            {'read more blogs'}
            <ArrowRightIcon />
          </Link>
        </SectionWrapper>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const getBestBlogs = () => [
    {
      title: 'Technologies I Want to Learn in 2023',
      date: 'jan 02, 2023',
      tags: ['cs'],
      slug: '2023technologies',
    },
    {
      title: 'What I Read in 2022',
      date: 'dec 31, 2022',
      tags: ['reading'],
      slug: '2022readinglist',
    },
  ];

  return {
    props: {
      bestBlogs: getBestBlogs(),
    },
  };
};

export default Home;
