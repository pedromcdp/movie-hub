import Head from "next/head"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import { AppConfig } from "../utils/AppConfig"

const Meta = ({ title }) => {
  const { basePath } = useRouter()

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link
          rel="preload"
          href={`${basePath}/fonts/Calibre-Bold.woff2`}
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/Calibre-Light.woff2`}
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/Calibre-Medium.woff2`}
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/Calibre-Regular.woff2`}
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/Calibre-Semibold.woff2`}
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href={`${basePath}/assets/overlay.png`}
          as="image"
          crossOrigin=""
          type="image/png"
        />
        <link
          rel="preload"
          href={`${basePath}/assets/profile.png`}
          as="image"
          crossOrigin=""
          type="image/png"
        />
      </Head>
      <NextSeo
        title={title || AppConfig.title}
        description={AppConfig.description}
        openGraph={{
          title: title,
          description: AppConfig.description,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  )
}

export { Meta }
