import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Bondux.dev" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-navbutton-color" content="#ffffff" />
    <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    <link rel="apple-touch-icon" href="/pwa/bondux_logo_192.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Bondux</title>
    <link rel="icon" type="image/png" href="/favicon.png" key="favicon" />
  </Head>
);

export default Meta;
