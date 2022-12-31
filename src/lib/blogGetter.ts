import type { Adapter, BlogGetter, Genre } from './blogMisc';

const blogGetter = (adapter: Adapter): BlogGetter => {
  const getBlogBySlug = (slug: string) => {
    return adapter.getBlogBySlug(slug);
  };

  const getAll = () => {
    return adapter.getAll();
  };

  const getBlogsByGenre = (genre: Genre) => {
    return adapter.getBlogsByGenre(genre);
  };

  const getMetaData = (slug: string) => {
    return adapter.getMetaData(slug);
  };

  return {
    getBlogBySlug,
    getAll,
    getBlogsByGenre,
    getMetaData,
  };
};

export default blogGetter;
