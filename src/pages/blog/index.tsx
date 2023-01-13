import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import { SectionHeader } from '..';
import localAdapter from '../../lib/adapters/local';
import blogGetter from '../../lib/blogGetter';
import { BlogPostMeta, Tag } from '../../lib/blogMisc';
import { formatDate } from './[slug]';

const fetchBlog = blogGetter(localAdapter());

export const getServerSideProps = async () => {
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

type Post = {
  title: string;
  date: string;
  slug: string;
};

const BlogCard = (meta: BlogPostMeta) => {
  const router = useRouter();
  return (
    <Link href={`${router.asPath}/${meta.slug}`}>
      <div className="flex h-full flex-col justify-start gap-2 rounded-xl border-[1px] border-purple-600 bg-purple-700/20 hover:bg-purple-700/50 cursor-pointer p-6 shadow-lg  transition-colors duration-75 ">
        <div className="flex items-start justify-between w-full">
          <p className="text-xl font-bold text-white">{meta.title}</p>
        </div>
        <p className="text-base text-purple-400 lowercase1">
          posted on {formatDate(meta.date)}
        </p>
        <div>
          {meta.tags.map((tag, i) => (
            <p key={i} className="px-3 bg-purple-300 rounded-md w-min">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

const NoBlogPosts = () => {
  return (
    <h1 className="py-4 text-xl font-bold text-purple-400">No Blog Posts</h1>
  );
};

const Blog: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts }) => {
  const selectStyles = 'bg-purple-700 text-left';
  const [filter, setFilter] = useState<Tag>('');

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        (post: BlogPostMeta) => filter === '' || post.tags.includes(filter),
      ),
    [posts, filter],
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
      <div className="flex flex-col items-center justify-start w-full gap-4">
        <SectionHeader>
          Jack&#39;s, <span className="font-normal text-white">Blog</span>
        </SectionHeader>
        <div className="flex items-center justify-center gap-3 text-base">
          <h3 className="text-purple-400">filter:</h3>
          <select
            onChange={(e) => setFilter(e.target.value as Tag)}
            className="rounded-md bg-transparent text-white  px-3 border-[1px] border-purple-400 outline-1 outline-purple-400 decoration-purple-400 p-1 text-left"
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
        {filteredPosts.length ? (
          <div className="grid w-full max-w-screen-xl grid-cols-1 gap-6 py-8 sm:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard key={post.date} {...post} />
            ))}
          </div>
        ) : (
          <NoBlogPosts />
        )}
      </div>
    </>
  );
};

export default Blog;
