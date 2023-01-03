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

const BackToBlogsButton = () => (
  <Link href="/blog">
    <a className="text-sm text-purple-400 px-4 py-2 hover:bg-purple-900 rounded-md duration-100 transition-all">
      {'< back to blogs'}
    </a>
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
      <div className="flex flex-col items-center justify-start w-full gap-2 px-4 max-w-full">
        <BackToBlogsButton />
        <h1 className="text-white text-5xl sm:text-6xl font-bold py-3 text-center">
          {props.data.title}
        </h1>
        <p className="text-purple-400 font-bold lowercase">
          posted on {formatDate(props.data.date)}
        </p>
        <div className="flex gap-2">
          <p className="text-purple-400 lowercase">tags: </p>
            {props.data.tags.map((tag, i) => (<p key={i} className="px-3 rounded-md bg-purple-300" >{tag}</p>))}
        </div>
        <article
          // className={mdStyles['markdown']}
          className="prose prose-base sm:prose-lg prose-invert py-8 max-w-screen-md w-full prose-code:rounded-xl prose-pre:border-[1px] prose-pre:border-purple-600 prose-pre:bg-purple-900/40 prose-code:leading-[0.5rem] sm:prose-p:my-2 sm:prose-headings:my-4 sm:prose-hr:my-8 sm:prose-hr:border-purple-600"
          dangerouslySetInnerHTML={{ __html: props.postContentAsHtml }}
        />
        <BackToBlogsButton />
      </div>
    </>
  );
};

export default BlogPost;
