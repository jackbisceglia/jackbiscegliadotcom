export type paragraphTagType = string;
export type listTagType = string[];
export type anchorTagType = {
  github: string;
  text: string;
  live?: string;
  year?: number;
};

export type TextSectionType = {
  type: 'p' | 'l' | 'a';
  text: paragraphTagType | listTagType | anchorTagType;
};

export type TextBlockType = {
  title?: {
    white: string;
    purple: string;
  };
  body: TextSectionType[];
};

export type LinkType = {
  title: string;
  link: string;
};
