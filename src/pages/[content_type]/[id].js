import { useMemo } from "react"
import Head from "next/head"
import Jumbotron from "../../components/Detail/Jumbotron/DetailJumbotron"
import Overlay from "../../components/Overlay/Overlay"
import Poster from "../../components/Detail/Jumbo_Poster/JumboPoster"
import { useGetMovieQuery } from "../../services/tmdb"
import OverviewContainer from "../../components/Detail/Overview/OverviewContainer"
import OverviewDetail from "../../components/Detail/Overview_Detail/OverviewDetail"
import Loading from "../../components/Loading/Loading"
import Content from "../../components/Detail/Content/Content"
import { Transition } from "@headlessui/react"
import Page from "../../layouts/Page"
import { useRouter } from "next/router"

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
    <div className="bg-slate-850 min-h-[100vh] scroll-smooth">
      <Head>
        <title>Movie HUB | {data?.title ?? data?.name}</title>
      </Head>
      <Transition
        show={true}
        appear={true}
        enter="transition ease-in-out duration-500 transform"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
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
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      >
        <Content data={data} id={id} type={content_type} />
      </Transition>
    </div>
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
