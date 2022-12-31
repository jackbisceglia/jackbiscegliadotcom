import * as Content from '../data/content/projects';

import { LeftColumn, RightColumn } from '../components/layout/Columns';
import { LeftSection, RightSection } from '../components/layout/ColumnSection';
import {
  ProjectLinkContentType,
  TextSectionType,
} from '../data/sharedTypes/data';

import Head from 'next/head';
import { NextPage } from 'next';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import TextBlock from '../components/TextBlock';
import { text } from 'stream/consumers';

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
  console.log('TEST');
  console.log(
    'a',
    Content.ProjectsInfo.body[0].content as ProjectLinkContentType,
  );

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
      <div className="flex flex-col items-center justify-start lg:items-start lg:justify-center lg:flex-row">
        <LeftColumn>
          <LeftSection>
            <SectionTitle
              white={Content.ProjectsInfo.title!.white}
              purple={Content.ProjectsInfo.title!.purple}
            />
            <TextBlock textSections={Content.ProjectsInfo.body} />
          </LeftSection>
          <LeftSection>
            <SectionTitle purple="Featured" white="Projects" />
            <ProjectCard
              useGoSyntax={true}
              {...(Content.ProjectsList.body[0]
                .content as ProjectLinkContentType)}
            />
            <ProjectCard
              useGoSyntax={false}
              {...(Content.ProjectsList.body[2]
                .content as ProjectLinkContentType)}
            />
          </LeftSection>
        </LeftColumn>
        <RightColumn>
          <RightSection>
            <SectionTitle purple="All" white="Projects" />
            <TextBlock
              classOptions="lg:max-w-xs"
              textSections={Content.SideBar.body}
            />
            <TextBlock
              textSections={Content.ProjectsList.body.sort(sortProjectList)}
            />
          </RightSection>
        </RightColumn>
      </div>
    </>
  );
};

export default Projects;
