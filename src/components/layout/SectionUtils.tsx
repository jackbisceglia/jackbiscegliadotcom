export const style_defaults = {
  section_gap: 'gap-10',
  content_gap: 'gap-4',
};

export const SectionWrapper = ({
  children,
  flexDirection = 'flex-col',
  flexOptions = '',
  gap = style_defaults.content_gap,
}: {
  children: React.ReactNode;
  flexDirection?: string;
  flexOptions?: string;
  gap?: string;
}) => {
  return (
    <div className={`flex ${flexDirection} ${gap} ${flexOptions}`}>
      {children}
    </div>
  );
};

export const GenericParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="font-normal text-neutral-200 sm:text-lg ">{children}</p>;
};

export const GenericSection = ({
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
