import React from 'react';

type ColumnType = {
  children: React.ReactNode;
  classSpecifics?: string;
};

type EmbedChildren = {
  children: React.ReactNode;
};

export const Column: React.FC<ColumnType> = ({
  children,
  classSpecifics = '',
}) => {
  const style = `flex flex-col w-full px-4 ${classSpecifics}`;
  return <div className={style}>{children}</div>;
};

export const LeftColumn: React.FC<EmbedChildren> = ({ children }) => (
  <Column classSpecifics="lg:w-6/12">{children}</Column>
);
export const RightColumn: React.FC<EmbedChildren> = ({ children }) => (
  <Column classSpecifics="sm:w-full lg:w-auto">{children}</Column>
);
