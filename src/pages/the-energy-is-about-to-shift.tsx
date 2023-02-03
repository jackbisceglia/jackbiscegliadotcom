import { InferGetServerSidePropsType, NextPage } from 'next';

import { getStaticProps } from '.';

const JaylenBrown: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = (props) => {
  return <h1>test</h1>;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: 'https://twitter.com/FCHWPO/status/1488188490001096707',
    },
  };
};

export default JaylenBrown;
