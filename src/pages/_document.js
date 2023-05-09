import Document, { Head, Html, Main, NextScript } from "next/document"
import { AppConfig } from "../utils/AppConfig"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body className="bg-slate-850">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
