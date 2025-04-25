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
                opacity: 0;
              }
              html.visible {
                visibility: visible;
                opacity: 1;
                transition: opacity 400ms ease;
              }
              body {
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
              }
              body.visible {
                opacity: 1;
                visibility: visible;
              }
            `,
            }}
          />
          {/* Preload critical CSS */}
          <link rel="preload" href="/styles/globals.css" as="style" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
