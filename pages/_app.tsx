import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
