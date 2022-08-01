import { NextPage } from 'next';
import Head from 'next/head';

import SectionTitle from '../components/SectionTitle';
import { LeftSection } from '../components/layout/ColumnSection';
import { Column } from '../components/layout/Columns';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Jack B</title>
        <meta name="description" content="What I've been building lately." />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>"
        />
      </Head>
      <Column>
        <LeftSection>
          <SectionTitle white={'Soon 🔜'} purple={'Coming'} />
        </LeftSection>
      </Column>
    </>
  );
};

export default Blog;
