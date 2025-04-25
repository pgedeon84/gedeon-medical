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
