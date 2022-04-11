import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="At Gedeon Medical Center Our doctors
            perform sports physicals, testosterone replacements, botox injections, fillers and more!"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" type="image/png" href="GMC-favicon-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
