import { useMemo } from "react"
import Head from "next/head"
import Overlay from "../../components/Overlay/Overlay"
import { useGetMovieQuery } from "../../services/tmdb"
import {
  OverviewDetail,
  OverviewContainer,
  Poster,
  DetailJumbotron as Jumbotron,
  Content,
} from "../../components/Detail"
import Loading from "../../components/Loading/Loading"
import { Page } from "../../layouts"
import { useRouter } from "next/router"
import { Transition } from "@headlessui/react"

const Detail = ({ content_type, id }) => {
  const { replace } = useRouter()
  const query = useMemo(
    () => ({ type: content_type, query: id }),
    [content_type, id]
  )
  const { data, isLoading, isFetching } = useGetMovieQuery(query)

  if (isLoading || isFetching) {
    return <Loading />
  }

  if (!data) {
    replace("/")
    return null
  }

  return (
    <article className="scroll-smooth">
      <Head>
        <title>Movie HUB | {data?.title ?? data?.name}</title>
      </Head>
      <Transition
        show={true}
        appear={true}
        enter="transition ease-in-out duration-500 transform"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        as="section"
      >
        <Jumbotron
          imgSource={data.backdrop_path}
          title={data?.title ?? data?.name}
        >
          <Overlay page>
            <OverviewContainer>
              <Poster
                imgSource={data?.poster_path}
                title={data?.title || data?.name}
              />
              <OverviewDetail
                content_title={data?.title || data?.name}
                genres={data?.genres}
                release_date={data?.release_date || data?.first_air_date}
                overview={data?.overview}
              />
            </OverviewContainer>
          </Overlay>
        </Jumbotron>
      </Transition>
      <Transition
        show={true}
        appear={true}
        enter="transition ease-in-out duration-500 transform"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        as="section"
      >
        <Content data={data} id={id} type={content_type} />
      </Transition>
    </article>
  )
}

Detail.getLayout = function getLayout(page) {
  return <Page>{page}</Page>
}

export default Detail

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export async function getStaticProps(context) {
  const { content_type, id } = context.params

  if (content_type !== "movie" && content_type !== "tv" && id === undefined) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { content_type, id },
  }
}
