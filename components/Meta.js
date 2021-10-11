import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta charSet="utf-8" />
    <title>Bondux.dev</title>
    <link rel="icon" type="image/png" href="/favicon.png" key="favicon"></link>
    <link
      href="/fonts/DejaVuSans-ExtraLight.ttf"
      rel="preload"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
    <link
      href="/fonts/DejaVuSansCondensed-Bold.ttf"
      rel="preload"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
    <link
      href="/fonts/DejaVuSansCondensed.ttf"
      rel="preload"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
    <link
      href="/fonts/DejaVuSerifCondensed-Bold.ttf"
      rel="preload"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
  </Head>
);

export default Meta;
