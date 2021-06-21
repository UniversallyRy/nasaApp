import Head from "next/head";

export default function Custom404() {
    return (
      <>
        <Head>
          <title>Page Not Found</title>
          <meta property="og:404" content="404" key={1} />
        </Head>
        <h1>404 - Page Not Found</h1>
      </>
    )
  }