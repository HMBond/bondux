import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Bondux.dev" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    <link rel="manifest" href="/manifest.json" />
    <meta charSet="utf-8" />
    <title>BondUX</title>
    <link rel="icon" type="image/png" href="/favicon.png" key="favicon" />
  </Head>
);

export default Meta;
