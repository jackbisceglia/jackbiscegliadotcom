import Link from 'next/link';

import { AppTrackDescription } from '../data/content/projects';

type ProjectCardProps = {
  github?: string;
  live?: string;
  title?: string;
  descriptionBlocks?: string[];
  year?: number;
  techStack?: string[];
};
const bgStyle = 'border-b-2 border-gray-300/10 bg-purple-900/40';

export const pTypography =
  'text-white text-base leading-1 sm:text-base font-light';

const ProjectCard: React.FC<ProjectCardProps> = ({
  github,
  live,
  title,
  descriptionBlocks,
  year,
  techStack,
}) => {
  const formatStack = (techStack: string[]) => {
    return techStack.map((t) => `"${t}"`).join(', ');
  };
  return (
    <div
      className={`${bgStyle} mt-4 mb-4 w-full sm:w-[95%] min-h-40 px-4 md:px-5 py-3 flex flex-col items-start rounded-md`}
    >
      <div className="flex flex-row justify-between w-full py-1">
        <h1 className="text-base font-semibold leading-5 text-left text-white sm:leading-snug sm:text-xl pointer-none">
          {title}
        </h1>
        <p className="text-base font-semibold leading-5 text-left text-purple-400 sm:leading-snug sm:text-xl pointer-none">
          {year}
        </p>
      </div>
      {descriptionBlocks!.map((description, idx) => (
        <p
          key={idx}
          className="py-1 text-base font-normal leading-tight text-white  sm:text-base"
        >
          {description}
        </p>
      ))}
      <p className="py-2 font-mono text-sm tracking-tighter text-white  sm:text-sm">{`Tech := []string{${formatStack(
        techStack!,
      )}}`}</p>
      <div className="flex mt-2">
        <Link href={github!}>
          <a className="py-0.5 pr-4 duration-100 ease-linear w-fit text-purple-400 hover:text-purple-200">
            GitHub Repo
          </a>
        </Link>
        {live && (
          <Link href={live}>
            <a className="duration-100 py-0.5 ease-linear w-fit text-purple-400 hover:text-purple-200">
              Live Site
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
