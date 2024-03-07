import React, { Component } from "react";
import Head from "next/head";

import "../styles/global_styles.css";

/*
export function reportWebVitals(metric) {
  console.log(metric)
}        

<meta name="google-site-verification" content="3p5W6wHr-TDhnkyuewv0nYJd2S9OuTQlj5__OUyLLcU" />
*/

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
