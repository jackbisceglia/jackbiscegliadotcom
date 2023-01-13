export type Tag = '' | 'cs' | 'reading' | 'sports';

export type BlogPostMeta = {
  title: string;
  tags: Tag[];
  slug: string;
  date: string;
  summary:  string;
};

export type BlogPost = {
  data: BlogPostMeta;
  content: string;
};

export type BlogGetter = {
  getBlogBySlug: (slug: string) => BlogPost;
  getAll: () => string[];
  getBlogsByTag: (tag: Tag) => string[];
  getMetaData: (slug: string) => BlogPostMeta;
};

export type Adapter = BlogGetter & {
  source: string;
};
