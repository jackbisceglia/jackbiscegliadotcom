import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import Head from 'next/head';
import Link from 'next/link';
import blogGetter from '../../lib/blogGetter';
import localAdapter from '../../lib/adapters/local';
import markdownToHtml from '../../lib/markdownToHtml';

const fetchBlog = blogGetter(localAdapter());

export const getStaticProps = async (
  context: GetStaticPropsContext<{ slug: string }>,
) => {
  const { slug } = context.params ?? { slug: '' };

  const { content, data } = fetchBlog.getBlogBySlug(slug);

  const postContentAsHtml = await markdownToHtml(content);

  return {
    props: {
      postContentAsHtml,
      data,
    },
  };
};

export const getStaticPaths = () => {
  const posts = fetchBlog.getAll();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.replace(/\.md$/, ''),
        },
      };
    }),
    fallback: false,
  };
};

export const formatDate = (date: string) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateObj = new Date(date);

  return dateObj.toDateString();
};

const BlogPost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  return (
    <>
      <Head>
        <title>Projects - Jack B</title>
        <meta name="description" content={`Blog entry: ${props.data.title}`} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>"
        />
      </Head>
      <div className="flex flex-col items-center justify-start w-full gap-2">
        <Link href="/blog">
          <a className="text-sm text-purple-400 px-4 py-2 hover:bg-purple-900 rounded-md duration-100 transition-all">
            back to blogs
          </a>
        </Link>
        <h1 className="text-white  text-6xl font-bold py-4">
          {props.data.title}
        </h1>
        <p className="text-purple-400 font-bold lowercase">
          posted on {formatDate(props.data.date)}
        </p>
        <div className="flex gap-2">
          <p className="text-purple-400 lowercase">tags: </p>
          <div className="px-2 rounded-md font-bold bg-purple-300">
            {props.data.genre}
          </div>
        </div>
        <article
          // className={mdStyles['markdown']}
          className="prose prose-lg prose-invert py-12 max-w-screen-lg"
          dangerouslySetInnerHTML={{ __html: props.postContentAsHtml }}
        />
      </div>
    </>
  );
};

export default BlogPost;
