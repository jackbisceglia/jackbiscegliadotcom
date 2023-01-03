import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

import { BlogPostMeta, Tag } from '../../lib/blogMisc';
import Head from 'next/head';
import Link from 'next/link';
import SectionTitle from '../../components/SectionTitle';
import blogGetter from '../../lib/blogGetter';
import { formatDate } from './[slug]';
import localAdapter from '../../lib/adapters/local';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

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
        <div className="flex w-full items-start justify-between">
          <p className="text-xl text-white font-bold">{meta.title}</p>
        </div>
        <p className="text-base text-purple-400">
          posted on {formatDate(meta.date)}
        </p>
        <div>

            {meta.tags.map((tag, i) => (<p key={i} className="px-3 rounded-md bg-purple-300 w-min" >{tag}</p>))}
        </div>
      </div>
    </Link>
  );
};

const NoBlogPosts = () => {
  return <h1 className="text-purple-400 font-bold text-xl py-4">No Blog Posts</h1>
}


const Blog: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts }) => {
  const selectStyles = "bg-purple-700 text-left"
  const [filter, setFilter] = useState<Tag>("")
  
  const filteredPosts = useMemo(() => posts.filter((post: BlogPostMeta) => filter === "" || post.tags.includes(filter)), [filter])

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
      <div className="w-full flex flex-col justify-start items-center gap-4">
        <SectionTitle white="Blog" purple="Jack's" />
        <div className='flex text-base justify-center items-center gap-3'>
          <h3 className="text-purple-400">filter:</h3>
          <select onChange={(e) => setFilter(e.target.value as Tag)} className="rounded-md bg-transparent text-white  px-3 border-[1px] border-purple-400 outline-1 outline-purple-400 decoration-purple-400 p-1 text-left">
            <option value="" className={selectStyles}>none</option>
            <option value="cs" className={selectStyles}>cs</option>
            <option className={selectStyles} value="reading">reading</option>
            <option className={selectStyles} value="sports">sports</option>
          </select>
        </div>
        {
          filteredPosts.length ? 

        <div className="grid w-full max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.date} {...post} />
          ))}
        </div>
        :
        <NoBlogPosts/>
        }
      </div>
    </>
  );
};

export default Blog;
