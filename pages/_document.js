import Document, { Html, Head, Main, NextScript } from "next/document";
import BackToTopButton from "../components/ui/backToTopButton/backToTopButton";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
