import { Adapter, BlogPost, Tag } from '../blogMisc';

import { blogMetaSchema } from '../zod';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentDir = join(process.cwd(), 'src/data/posts');

const localAdapter = function (): Adapter {
  const getAll = function () {
    return fs.readdirSync(contentDir);
  };

  const getBlogBySlug = function (slug: string) {
    const fileName = `${slug}.md`;
    const fullPath = join(contentDir, fileName);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    const blogMetaData = { ...data, date: data.date.toString() };

    blogMetaSchema.parse(blogMetaData);

    return {
      data: blogMetaData,
      content,
    } as BlogPost;
  };

  const getBlogsByTag = function (tag: Tag) {
    return [
      `This is a blog post about ${tag}`,
      `This is another blog post about ${tag}`,
    ];
  };

  const getMetaData = function (slug: string) {
    const fileName = `${slug}.md`;
    const fullPath = join(contentDir, fileName);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    const blogMetaData = { ...data, date: data.date.toString() };

    blogMetaSchema.parse(blogMetaData);

    return blogMetaData as BlogPost['data'];
  };

  return {
    source: 'local',
    getBlogBySlug,
    getAll,
    getBlogsByTag,
    getMetaData,
  };
};

export default localAdapter;
