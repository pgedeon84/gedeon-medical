import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add this critical CSS to prevent initial FOUC */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              body {
                opacity: 0;
                visibility: hidden;
              }
              body.visible {
                opacity: 1;
                visibility: visible;
                transition: opacity 0.4s ease;
              }
            `,
            }}
          />
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
