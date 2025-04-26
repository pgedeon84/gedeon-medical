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
          {process.env.NODE_ENV === "production" && (
            <link
              rel="preload"
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/_next/static/css/${getCssFilename()}`}
              as="style"
            />
          )}
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
