import Link from 'next/link';

import {
  TextSectionType,
  anchorTagType,
  listTagType,
  paragraphTagType,
} from '../data/sharedTypes/data';
import { pTypography } from '../pages';

type TextSectionParserProps = {
  textSection: TextSectionType;
  classOptions?: string;
};

type TextBlockProps = {
  textSections: TextSectionType[];
  classOptions?: string;
};

const TextSectionParser: React.FC<TextSectionParserProps> = ({
  textSection: { type, text },
  classOptions = '',
}) => {
  if (type === 'p') {
    text = text as paragraphTagType;
    return <p className={`${classOptions} ${pTypography} pt-1 pb-2`}>{text}</p>;
  } else if (type === 'l') {
    return (
      (text = text as listTagType),
      (
        <ul className="py-1 pl-6 list-disc">
          {text.map((bullet: string, idx: number) => (
            <li className={pTypography} key={idx}>
              {bullet}
            </li>
          ))}
        </ul>
      )
    );
  } else if (type === 'a') {
    text = text as anchorTagType;
    return (
      <div className="flex flex-col w-full py-2 pl-0 transition-all duration-200 ease-in-out hover:pl-3">
        <div className="flex flex-row items-center justify-between w-full">
          <p
            className={`pr-2 text-base font-semibold leading-5 text-left text-white sm:leading-snug sm:text-lg  pointer-none `}
          >
            {text.text}
          </p>
          <p
            className={`pr-2 text-base font-semibold leading-5 text-left text-purple-400 sm:leading-snug sm:text-lg  pointer-none `}
          >
            {text.year}
          </p>
        </div>
        <Link href={text.github}>
          <a className="py-0.5 duration-100 ease-linear w-fit text-purple-50 hover:text-purple-200">
            GitHub Repo
          </a>
        </Link>
        {text.live && (
          <Link href={text.live}>
            <a className="duration-100 py-0.5 ease-linear w-fit text-purple-50 hover:text-purple-200">
              Live Site
            </a>
          </Link>
        )}
      </div>
    );
  }

  return <p>Incorrect</p>;
};

const TextBlock: React.FC<TextBlockProps> = ({
  textSections,
  classOptions = '',
}) => {
  return (
    <div className="flex-wrap w-full">
      {textSections.map((textSection, idx) => (
        <TextSectionParser
          key={idx}
          textSection={textSection}
          classOptions={classOptions}
        />
      ))}
    </div>
  );
};

export default TextBlock;
