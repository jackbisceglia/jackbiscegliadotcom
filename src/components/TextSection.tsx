import { pTypography } from "../pages";
import { ParagraphProps } from "../data/sharedTypes/props";

const ParagraphParse: React.FC<ParagraphProps> = ({ type, text }) => {
  if (type === "p") {
    return <p className={`${pTypography} pt-1 pb-2`}>{text}</p>;
  }
  return (
    <ul className="py-1 pl-6 list-disc">
      {(text as string[]).map((bullet: string, idx: number) => (
        <li className={pTypography} key={idx}>
          {bullet}
        </li>
      ))}
    </ul>
  );
};

const TextSection: React.FC<{ lines: ParagraphProps[] }> = ({ lines }) => {
  return (
    <>
      {lines.map(({ type, text }, idx) => (
        <ParagraphParse key={idx} type={type} text={text} />
      ))}
    </>
  );
};

export default TextSection;
