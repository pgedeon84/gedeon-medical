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
          {/* Critical CSS */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
      html.no-js, body.no-js {
        visibility: hidden !important;
        opacity: 0 !important;
        overflow: hidden !important;
        height: 100vh !important;
        position: fixed !important;
        width: 100% !important;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      }
    `,
            }}
          />

          {/* Proper font loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Poppins:wght@300;400;500&display=swap"
            rel="stylesheet"
            media="print"
            onLoad="e => { 
      e.target.media = 'all';
      document.documentElement.classList.add('fonts-loaded');
    }"
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
