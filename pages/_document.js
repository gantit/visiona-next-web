import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "utils/analyticsTracker";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="https://visiona.cat/img/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="https://visiona.cat/img/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="https://visiona.cat/img/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="https://visiona.cat/img/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="https://visiona.cat/img/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="https://visiona.cat/img/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="https://visiona.cat/img/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="https://visiona.cat/img/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://visiona.cat/img/icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="https://visiona.cat/img/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://visiona.cat/img/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="https://visiona.cat/img/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://visiona.cat/img/icons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/img/icons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
