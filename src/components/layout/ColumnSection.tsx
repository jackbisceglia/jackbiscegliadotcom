type ColumnSectionTypes = {
  children: React.ReactNode;
  classSpecifics?: string;
};

type EmbedChildren = {
  children: React.ReactNode;
};

const ColumnSection: React.FC<ColumnSectionTypes> = ({
  children,
  classSpecifics = "",
}) => {
  const style = `py-2 flex  flex-col ${classSpecifics}`;
  return <div className={style}>{children}</div>;
};

export const LeftSection: React.FC<EmbedChildren> = ({ children }) => (
  <ColumnSection classSpecifics="lg:py-4">{children}</ColumnSection>
);

export const RightSection: React.FC<EmbedChildren> = ({ children }) => (
  <ColumnSection classSpecifics="w-full lg:py-4">{children}</ColumnSection>
);
