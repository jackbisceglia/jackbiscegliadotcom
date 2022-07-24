import "../app.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// background-image: linear-gradient(
//   305deg,
//   hsl(270deg 100% 4%) 0%,
//   hsl(270deg 94% 7%) 7%,
//   hsl(271deg 92% 10%) 14%,
//   hsl(270deg 86% 14%) 21%,
//   hsl(267deg 86% 15%) 28%,
//   hsl(262deg 90% 12%) 35%,
//   hsl(256deg 96% 9%) 42%,
//   hsl(251deg 100% 7%) 49%,
//   hsl(256deg 96% 9%) 55%,
//   hsl(262deg 90% 12%) 62%,
//   hsl(268deg 87% 15%) 69%,
//   hsl(268deg 87% 15%) 76%,
//   hsl(262deg 90% 12%) 84%,
//   hsl(256deg 96% 9%) 92%,
//   hsl(251deg 100% 7%) 100%
// );

export default MyApp;
