import type { Adapter, BlogGetter, Tag } from './blogMisc';

const blogGetter = (adapter: Adapter): BlogGetter => {
  const getBlogBySlug = (slug: string) => {
    return adapter.getBlogBySlug(slug);
  };

  const getAll = () => {
    return adapter.getAll();
  };

  const getBlogsByTag = (genre: Tag) => {
    return adapter.getBlogsByTag(genre);
  };

  const getMetaData = (slug: string) => {
    return adapter.getMetaData(slug);
  };

  return {
    getBlogBySlug,
    getAll,
    getBlogsByTag,
    getMetaData,
  };
};

export default blogGetter;
