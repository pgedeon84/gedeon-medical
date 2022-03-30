import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initail-scale=1.0, width=device-width" />
        <link rel="icon" href="GMC-favicon-logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
