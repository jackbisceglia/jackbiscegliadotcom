export type TextBlockType = {
  title?: {
    purple: string;
    white: string;
  };
  body: (ParagraphType | ListType | ProjectLinkType)[];
};

export type ParagraphContentType = string;

export type ListContentType = string[];

export type ProjectLinkContentType = {
  github: string;
  title: string;
  live?: string;
  year?: number;
  descriptionBlocks?: string[];
  techStack?: string[];
};
export type ParagraphType = {
  type: 'p';
  content: ParagraphContentType;
};

export type ListType = {
  type: 'ul';
  content: string[];
};

export type ProjectLinkType = {
  type: 'a';
  content: ProjectLinkContentType;
};

export type TextSectionType = ParagraphType | ListType | ProjectLinkType;
