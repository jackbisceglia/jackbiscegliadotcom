import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

import { ArrowLeftIcon } from '@radix-ui/react-icons';
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

export const BackToBlogsButton = () => (
  <Link
    className="flex items-center gap-1 px-2 py-1 transition-all duration-200 ease-in-out hover:underline flex-start text-neutral-200 hover:text-coolmint-500"
    href="/blog"
  >
    <ArrowLeftIcon />
    {'back to blogs'}
  </Link>
);

const BlogPost: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  return (
    <>
      <Head>
        <title>{props.data.title}</title>
        <meta name="description" content={`Blog entry: ${props.data.date}`} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>"
        />
      </Head>
      <div className="flex flex-col items-center justify-start w-full max-w-full gap-2">
        <BackToBlogsButton />
        <h1 className="py-3 text-2xl font-bold text-center text-white sm:text-4xl">
          {props.data.title}
        </h1>
        <p className="text-sm lowercase text-coolmint-500 sm:text-base">
          {'🌱 ' + props.data.date}
        </p>
        <div className="flex gap-2 text-sm sm:text-base">
          <p className="lowercase text-coolmint-500">🏷️</p>
          {props.data.tags.map((tag, i) => (
            <p
              key={i}
              className="px-3 rounded-md bg-coolmint-500 text-coolmint-800 "
            >
              {tag}
            </p>
          ))}
        </div>
        <article
          // className={mdStyles['markdown']}
          className="prose prose-base sm:prose-lg prose-invert py-8 sm:max-w-screen-lg   max-w-screen-md w-full prose-code:rounded-xl prose-p:py-1 prose-pre:border-[1px] prose-pre:border-coolmint-700 prose-pre:bg-purple-700/20 prose-code:leading-[0.5rem] sm:prose-p:my-2 sm:prose-headings:my-4 sm:prose-hr:my-8 sm:prose-hr:border-coolmint-700"
          dangerouslySetInnerHTML={{ __html: props.postContentAsHtml }}
        />
        <BackToBlogsButton />
      </div>
    </>
  );
};

export default BlogPost;
