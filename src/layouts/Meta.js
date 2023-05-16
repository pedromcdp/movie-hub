import Head from "next/head"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import { AppConfig } from "../utils/AppConfig"
import { Fragment } from "react"

const Meta = ({ title }) => {
  const { basePath } = useRouter()

  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
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
    </Fragment>
  )
}

export { Meta }
