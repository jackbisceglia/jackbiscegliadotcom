import { BlogPostMeta, Tag } from '../../lib/blogMisc';
import {
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useMemo, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { SectionWrapper } from '../../components/layout/SectionUtils';
import blogGetter from '../../lib/blogGetter';
import localAdapter from '../../lib/adapters/local';

const BlogCard = ({
  title,
  date,
  summary,
  tags,
  slug,
}: {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
}) => {
  return (
    <Link
      className="w-full outline-offset-4 focus:outline-coolmint-500 rounded-lg"
      href={`/blog/${slug}`}
    >
      <div className="flex  flex-col justify-start h-full gap-2 p-5 transition-all rounded-lg duration-200 ease-in-out border-2 shadow-lg cursor-pointer group hover:pl-8 bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-coolmint-700">
        <h3 className="mb-1 text-lg font-extrabold text-white sm:text-xl group-hover:underline">
          {title}
        </h3>
        <p className="text-sm lowercase text-neutral-400 sm:text-base">
          {summary}
        </p>
        <div className="flex items-center gap-1">
          <p className="text-xs lowercase sm:text-sm text-coolmint-500">
            {'🌱 ' + date}
          </p>
          <p>{'🏷️ '}</p>
          {tags.map((tag) => (
            <div
              key={tag}
              className="px-2 text-xs sm:text-sm rounded-[0.25rem] text-coolmint-800 bg-coolmint-500 w-min"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

const NoBlogPosts = () => {
  return (
    <h1 className="py-4 text-xl font-bold text-coolmint-600">
      No Blog Posts 🗑️
    </h1>
  );
};

const normalizeHasFilterTag = (filter: Tag, tags: BlogPostMeta['tags']) =>
  filter === '' || tags.includes(filter);

const normalizeHasSearchTerm = (search: string, post: BlogPostMeta) =>
  search === '' ||
  post.title.toLowerCase().includes(search.toLowerCase()) ||
  post.summary.toLowerCase().includes(search.toLowerCase());

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const selectStyles = 'bg-coolmint-700 text-left';
  const [filter, setFilter] = useState<Tag>('');
  const [search, setSearch] = useState<string>('');

  // const filteredPosts = useMemo(
  //   () =>
  //     posts.filter(
  //       (post: BlogPostMeta) => filter === '' || post.tags.includes(filter),
  //     ),
  //   [posts, filter],
  // );
  const filteredPosts = posts.filter(
    (post: BlogPostMeta) =>
      normalizeHasFilterTag(filter, post.tags) &&
      normalizeHasSearchTerm(search, post),
  );

  return (
    <>
      <Head>
        <title>Blog - Jack B</title>
        <meta name="description" content="Check out the blog!" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>"
        />
      </Head>
      <div
        className={`flex flex-col justify-start items-center prose-strong:font-extrabold gap-10`}
      >
        <SectionWrapper flexOptions="items-center" gap="gap-4">
          <h1 className="text-3xl font-extrabold text-coolmint-600 sm:text-4xl">
            {' '}
            Jack&#39;s <span className="font-normal text-white">Blog</span>
          </h1>
          <p className="px-3 font-normal text-center text-neutral-200 sm:text-lg">
            i write about anything and everything, from my thoughts on
            programming to my interests in sports and reading!
          </p>
          <div className="flex items-center justify-center gap-3 text-base">
            <h3 className="text-coolmint-600">filter:</h3>
            <select
              aria-label="filter blog posts by tag"
              onChange={(e) => setFilter(e.target.value as Tag)}
              className="rounded-md bg-transparent focus:outline-coolmint-500 outline-offset-4 text-white px-3 border-[1px] border-coolmint-600 outline-1 outline-coolmint-400 decoration-coolmint-400 p-1 text-left"
            >
              <option value="" className={selectStyles}>
                none
              </option>
              <option value="cs" className={selectStyles}>
                cs
              </option>
              <option className={selectStyles} value="reading">
                reading
              </option>
              <option className={selectStyles} value="sports">
                sports
              </option>
            </select>
          </div>
          <input
            className="w-full focus:outline-coolmint-500 outline-offset-4  px-4 py-2 mt-2 border-2 rounded-lg text-neutral-200 bg-coolmint-700/20 border-coolmint-700"
            type="text"
            name=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="searchbar"
            placeholder="search..."
          />
        </SectionWrapper>
        <div className="flex flex-col justify-start w-full gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((blog) => <BlogCard key={blog.slug} {...blog} />)
          ) : (
            <NoBlogPosts />
          )}
        </div>
      </div>
    </>
  );
};

const fetchBlog = blogGetter(localAdapter());

export const getStaticProps = async () => {
  const postPaths = fetchBlog.getAll();

  const postsMeta = postPaths
    .map((postPath) => fetchBlog.getMetaData(postPath.replace(/\.md$/, '')))
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return {
    props: {
      posts: postsMeta,
    },
  };
};

export default Blog;
