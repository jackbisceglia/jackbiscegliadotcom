import {
  ArrowRightIcon,
  BookmarkFilledIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import {
  GenericParagraph,
  GenericSection,
  SectionWrapper,
  style_defaults,
} from '../components/layout/SectionUtils';
import type { InferGetServerSidePropsType, NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blogGetter from '../lib/blogGetter';
import localAdapter from '../lib/adapters/local';

export const Divider = () => <hr className="border-coolmint-700" />;

export const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="py-1 text-3xl font-extrabold text-coolmint-600 sm:text-4xl">
      {children}
    </h1>
  );
};

const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-0 sm:h-[4.5rem] sm:w-[4.5rem] w-14 h-14">
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

// const BlogCard = ({
//   title,
//   date,
//   tags,
//   slug,
// }: {
//   title: string;
//   date: string;
//   tags: string[];
//   slug: string;
// }) => {
//   return (
//     <Link href={`/blog/${slug}`}>
//       <div className="flex flex-col justify-start h-full gap-2 p-5 transition-all duration-200 ease-in-out border-2 rounded-lg shadow-lg cursor-pointer group hover:pl-8 bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-coolmint-700">
//         <div className="flex items-start justify-between w-full">
//           <p className="text-base font-extrabold text-white sm:text-xl group-hover:underline">
//             {title}
//           </p>
//         </div>
//         <p className="text-sm lowercase text-coolmint-500">posted on {date}</p>
//         <div className="flex gap-2">
//           {tags.map((tag) => (
//             <p
//               key={tag}
//               className="px-2 text-xs rounded-md text-coolmint-800 bg-coolmint-500 w-min"
//             >
//               {tag}
//             </p>
//           ))}
//         </div>
//       </div>
//     </Link>
//   );
// };

const BlogCard = ({
  title,
  date,
  summary,
  tags,
  slug,
}: {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
}) => {
  return (
    <Link className="w-full rounded-lg" href={`/blog/${slug}`}>
      <div className="flex flex-col justify-start h-full gap-2 p-5 transition-all duration-200 ease-in-out border-2 rounded-lg shadow-lg cursor-pointer group hover:pl-8 bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-coolmint-700">
        <h3 className="mb-1 text-lg font-extrabold text-white sm:text-xl group-hover:underline">
          {title}
        </h3>

        <p className="text-xs lowercase sm:text-sm text-coolmint-500">
          {'🌱 ' + date}
        </p>
        <div className="flex items-center gap-1">
          <p>{'🏷️ '}</p>
          {tags.map((tag) => (
            <div
              key={tag}
              className="px-2 text-xs sm:text-sm rounded-[0.25rem] text-coolmint-800 bg-coolmint-500 w-min"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

const Home: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = (
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
        className={`flex flex-col prose-strong:font-extrabold  ${style_defaults.section_gap}`}
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
          <GenericParagraph>
            hi! i&#39;m a software engineer (amts) at salesforce working on
            accessibility. i&#39;m passionate about software engineering and
            building cool apps 🙂.
          </GenericParagraph>
          <GenericParagraph>
            in my free time, i love watching basketball (go{' '}
            <Link
              target={'_blank'}
              href="/the-energy-is-about-to-shift"
              className="py-1 transition-all duration-200 ease-in-out hover:text-green-400 hover:underline"
            >
              celtics
            </Link>
            ) and mma, making hip hop beats, and reading books (see my blog)!
          </GenericParagraph>
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
            <GenericSection>
              <ul className="font-normal list-disc list-inside">
                <li>
                  <span className="text-coolmint-500">frontend:</span>{' '}
                  <strong>react</strong> and typescript
                </li>
                <li>
                  <span className="text-coolmint-500">backend:</span>{' '}
                  <strong>typescript</strong> or maybe go?
                </li>
                <li>
                  <span className="text-coolmint-500">anything random:</span>{' '}
                  <strong>python</strong>
                </li>
              </ul>
            </GenericSection>
            <div className="text-sm text-coolmint-400 sm:text-base">
              <p>
                <i>*i only used go a few times*</i>
              </p>
              <p>
                <i>*i kiiinda like svelte better than react*</i>
              </p>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex flex-col w-full gap-4 lg:w-1/2">
            <SectionHeader>
              More <span className="font-normal text-white">Stuff</span> 🔗
            </SectionHeader>
            <GenericSection>
              <ul className="grid w-full grid-flow-col grid-rows-2 text-left">
                <SocialLink href="/JackBiscegliaResumeWebsite.pdf">
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
            </GenericSection>
            <GenericSection className="flex flex-col gap-2">
              <strong>favorite repos:</strong>
              <Link
                href="https://github.com/jackbisceglia/apptrack"
                target="_blank"
              >
                <div className="flex transition-all duration-200 ease-in-out hover:pl-6 hover:underline hover:text-white  flex-col justify-start gap-2 rounded-md   bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer py-[0.375rem] px-4 shadow-lg ">
                  apptrack.tech 🚀{' '}
                </div>
              </Link>
              <Link
                href="https://github.com/LinkFrost/letsthink"
                target="_blank"
              >
                <div className="flex transition-all duration-200 ease-in-out hover:pl-6 hover:underline hover:text-white  flex-col justify-start gap-2 rounded-md   bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-2 border-coolmint-700 cursor-pointer py-[0.375rem] px-4 shadow-lg ">
                  letsth.ink 💡
                </div>
              </Link>
            </GenericSection>
          </div>
        </SectionWrapper>
        <Divider />
        <SectionWrapper>
          <SectionHeader>
            Best <span className="font-normal text-white">Blogs</span> ✍️
          </SectionHeader>
          {props.bestBlogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
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

const fetchBlog = blogGetter(localAdapter());

export const getStaticProps = async () => {
  const favoriteBlogs = ['2022readinglist', '2023technologies'];
  const getBestBlogs = () =>
    favoriteBlogs.map(fetchBlog.getBlogBySlug).map((blog) => blog.data);

  return {
    props: {
      bestBlogs: getBestBlogs(),
    },
  };
};

export default Home;
