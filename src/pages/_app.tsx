import '../app.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import localFont from 'next/font/local';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
