type TitleProps = {
  white: string;
  purple: string;
};

const SectionTitle: React.FC<TitleProps> = ({ white, purple }) => {
  return (
    <h1 className="py-0.5 text-3xl font-bold text-purple-400 sm:text-5xl">
      {purple} <span className="font-light text-white">{white}</span>
    </h1>
  );
};

export default SectionTitle;
