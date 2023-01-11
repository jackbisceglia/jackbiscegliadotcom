import { NextPage } from 'next';
import Head from 'next/head';

import {
  ProjectLinkContentType,
  TextSectionType,
} from '../data/sharedTypes/data';

export const pTypography =
  'text-white text-base leading-5 sm:leading-snug sm:text-lg font-light';
export const pTypography_purple = 'text-purple-400 font-semibold';

type LinkType = {
  title: string;
  link: string;
};

const Projects: NextPage = () => {
  const sortProjectList = (a: TextSectionType, b: TextSectionType) => {
    let atext = a.content as ProjectLinkContentType;
    let btext = b.content as ProjectLinkContentType;

    return btext.year! - atext.year!;
  };

  return (
    <>
      <Head>
        <title>Projects - Jack B</title>
        <meta name="description" content="What I've been building lately." />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>"
        />
      </Head>
      <div className="here flex flex-col items-center justify-start lg:items-start lg:justify-center lg:flex-row"></div>
    </>
  );
};

export default Projects;
