import React, { Fragment } from "react";
import globalStyles from "../../styles/global.css";

const HeadTags = () => (
  <Fragment>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>{globalStyles}</style>
    <link rel="manifest" href="/static/manifest.json" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/icons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/icons/favicon-16x16.png"
    />
  </Fragment>
);

export default HeadTags;
