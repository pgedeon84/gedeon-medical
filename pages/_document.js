import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="no-js">
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              html.no-js {
                visibility: hidden;
                overflow: hidden;
              }
              html.visible {
                visibility: visible;
                overflow: auto;
              }
            `,
            }}
          />
          {/* Inline critical CSS */}
          {/* <link rel="preload" href="/styles/globals.css" as="style" /> */}
          {/* <link rel="stylesheet" href="/styles/globals.css" /> */}
        </Head>
        <body className="no-js">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
