import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class Document extends React.Component {
  render() {
    return (
      <Html lang="en" className="no-js">
        <Head>
          {/* Inline critical CSS */}
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
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              }
            `,
            }}
          />

          {/* Font loading */}
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
    // First make visible
    document.documentElement.classList.add('visible');
    
    // Then handle fonts
    if (document.fonts) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-ready');
      });
    }
  `,
          }}
        />
        <body>
          <Main />
          <NextScript />
          {/* Critical hydration script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              document.documentElement.classList.add('visible');
              document.documentElement.classList.remove('no-js');
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}
