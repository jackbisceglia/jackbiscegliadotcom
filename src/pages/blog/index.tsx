import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

import { BlogPostMeta } from '../../lib/blogMisc';
import { Column } from '../../components/layout/Columns';
import Head from 'next/head';
import { LeftSection } from '../../components/layout/ColumnSection';
import Link from 'next/link';
import SectionTitle from '../../components/SectionTitle';
import blogGetter from '../../lib/blogGetter';
import { formatDate } from './[slug]';
import localAdapter from '../../lib/adapters/local';
import { useRouter } from 'next/router';

const fetchBlog = blogGetter(localAdapter());

export const getServerSideProps = async () => {
  const postPaths = fetchBlog.getAll();

  const postsMeta = postPaths.map((postPath) =>
    fetchBlog.getMetaData(postPath.replace(/\.md$/, '')),
  );

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
      <div className="flex h-full flex-col justify-start gap-1 rounded-xl border-[1px] border-purple-600 bg-purple-700/20 hover:bg-purple-700/50 cursor-pointer p-6 shadow-lg  transition-colors duration-75 ">
        <div className="flex w-full items-start justify-between">
          <p className="text-xl text-white font-bold">{meta.title}</p>
        </div>
        <p className="text-base text-purple-400">
          posted on {formatDate(meta.date)}
        </p>
      </div>
    </Link>
  );
};

const Blog: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Projects - Jack B</title>
        <meta name="description" content="Check out the blog!" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>"
        />
      </Head>
      <div className="w-full flex flex-col justify-start items-center">
        <SectionTitle white="Blog" purple="Jack's" />
        <div className="grid w-full max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
          {posts.map((post) => (
            <BlogCard key={post.date} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
