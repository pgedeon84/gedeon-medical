import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initail-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="GMC-favicon-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
