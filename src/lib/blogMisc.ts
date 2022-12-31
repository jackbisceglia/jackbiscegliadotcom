export type Genre = 'cs' | 'reading' | 'sports';

export type BlogPostMeta = {
  title: string;
  genre: Genre;
  slug: string;
  date: string;
};

export type BlogPost = {
  data: BlogPostMeta;
  content: string;
};

export type PostData = {
  title: string;
  genre: Genre;
  slug: string;
  date: string;
};

export type BlogGetter = {
  getBlogBySlug: (slug: string) => BlogPost;
  getAll: () => string[];
  getBlogsByGenre: (genre: Genre) => string[];
  getMetaData: (slug: string) => BlogPostMeta;
};

export type Adapter = BlogGetter & {
  source: string;
};
