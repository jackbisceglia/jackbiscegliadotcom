import Link from 'next/link';
import React from 'react';

import { TextSectionType } from '../data/sharedTypes/data';
import { pTypography } from '../pages';

type TextBlockProps = {
  textSections: TextSectionType[];
  classOptions?: string;
};

type ParagraphSectionProps = {
  content: string;
  classOptions?: string;
};

type ListSectionProps = {
  content: string[];
  classOptions?: string;
};

type ProjectLinkSectionTypes = {
  content: {
    title: string;
    github: string;
    live: string;
    year: number;
  };
};

const ParagraphSection: React.FC<ParagraphSectionProps> = ({
  content,
  classOptions = '',
}) => <p className={`${classOptions} ${pTypography} pt-1 pb-2`}>{content}</p>;

const ListSection: React.FC<ListSectionProps> = ({ content, classOptions }) => {
  return (
    <ul className="py-1 pl-6 list-disc">
      {content.map((bullet: string, idx: number) => (
        <li className={pTypography} key={idx}>
          {bullet}
        </li>
      ))}
    </ul>
  );
};

const ProjectLinkSection: React.FC<ProjectLinkSectionTypes> = ({
  content: { title, year, github, live },
}) => (
  <div className="flex flex-col w-full py-2 pl-0 transition-all duration-200 ease-in-out hover:pl-3">
    <div className="flex flex-row items-center justify-between w-full">
      <p
        className={`pr-2 text-base font-semibold leading-5 text-left text-white sm:leading-snug sm:text-lg  pointer-none `}
      >
        {title}
      </p>
      <p
        className={`pr-2 text-base font-semibold leading-5 text-left text-purple-400 sm:leading-snug sm:text-lg  pointer-none `}
      >
        {year}
      </p>
    </div>
    <Link href={github}>
      <a className="py-0.5 duration-100 ease-linear w-fit text-purple-50 hover:text-purple-200">
        GitHub Repo
      </a>
    </Link>
    {live && (
      <Link href={live}>
        <a className="duration-100 py-0.5 ease-linear w-fit text-purple-50 hover:text-purple-200">
          Live Site
        </a>
      </Link>
    )}
  </div>
);

const TextBlock: React.FC<TextBlockProps> = ({
  textSections,
  classOptions = '',
}) => {
  const jsxMap: Record<
    string,
    typeof ParagraphSection | typeof ListSection | typeof ProjectLinkSection
  > = {
    p: ParagraphSection,
    ul: ListSection,
    a: ProjectLinkSection,
  };

  return (
    <>
      {textSections.map(({ type, content }: any, idx) => {
        {
          const CurrComponent = jsxMap[type];
          return <CurrComponent key={idx} {...{ content, classOptions }} />;
        }
      })}
    </>
  );
};

export default TextBlock;
