import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta charSet="utf-8" />
    <title>Bondux</title>
    <link rel="icon" type="image/png" href="/favicon.png" key="favicon" />
    <link
      rel="preload"
      href="/fonts/DejaVuSans-ExtraLight.woff2"
      as="font"
      type="font/woff2"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/DejaVuSansCondensed-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/DejaVuSansCondensed.woff2"
      as="font"
      type="font/woff2"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/DejaVuSerifCondensed-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin=""
    />
  </Head>
);

export default Meta;
