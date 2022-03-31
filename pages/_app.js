import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Are you sick or not feeling well? Need an annual medical exam? We do it all! Our doctor also
            perform sports physicals, referrals for injuries, botox, testosterone replacements and more. Get Started on your path to health with Gedeon Medical Center."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" type="image/png" href="GMC-favicon-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
