import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Helmet from "react-helmet";

import CircularLoader from "../components/Shared/UI/Loaders/circle";
import HeadTags from "../components/Shared/HeadTags";

export default class BaseApp extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, helmet: Helmet.rewind() };
  }

  helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  helmetHeadComponents() {
    const keys = Object.keys(this.props.helmet)
      .filter(el => el !== "htmlAttributes")
      .map(el => this.props.helmet[el].toComponent())
      .filter(
        el =>
          el.length > 0 ||
          !(Object.keys(el).length === 0 && el.constructor === Object)
      );

    return keys.length ? keys : [];
  }

  render() {
    return (
      <html lang="es" {...this.helmetHtmlAttrComponents()}>
        <Head>
          {this.props.styleTags}
          <HeadTags />
        </Head>
        <body>
          <main className="root">
            <Main />
          </main>
          <div className="document-overlay">
            <CircularLoader />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
