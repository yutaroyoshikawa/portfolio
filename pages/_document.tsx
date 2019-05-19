import React from 'react'
import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { AppComponentProps } from 'next/app'

interface IProps extends AppComponentProps {
  styleTags: React.ReactElement<{}>[];
}

export default class extends Document<IProps> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="吉川勇太郎のポートフォリオ" />
          <meta name="description" content="吉川勇太郎のポートフォリオサイト" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:url" content="https://yutaro-yoshikawa.tokyo" />
          <meta property="og:title" content="吉川勇太郎のポートフォリオ" />
          <meta property="og:description" content="吉川勇太郎のポートフォリオサイト" />
          <meta property="og:image" content="https://user-images.githubusercontent.com/38146004/57978004-09f39f00-7a3f-11e9-8708-f73d40480e1c.png" />
          <link rel="shortcut icon" href="https://user-images.githubusercontent.com/38146004/57978004-09f39f00-7a3f-11e9-8708-f73d40480e1c.png" />
          <link rel="apple-touch-icon-precomposed" href="https://user-images.githubusercontent.com/38146004/57978004-09f39f00-7a3f-11e9-8708-f73d40480e1c.png" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
