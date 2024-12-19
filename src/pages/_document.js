import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="../css/styles.css" />
      </Head>
      <body>
        <div className="container">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
