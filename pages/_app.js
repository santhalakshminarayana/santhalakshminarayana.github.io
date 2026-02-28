import React, { Component } from "react";
import Head from "next/head";

import "../styles/GlobalStyles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Maven+Pro&family=Share+Tech+Mono&family=Source+Sans+Pro&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
