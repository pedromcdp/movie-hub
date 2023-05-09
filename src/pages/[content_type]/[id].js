import { useRouter } from "next/router"
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
import Head from "next/head"

const Detail = () => {
  const { content_type, id } = useRouter().query
  const { data, isLoading, isFetching } = useGetMovieQuery({
    type: content_type,
    query: id,
  })

  if (isLoading || isFetching) {
    return <Loading />
  }

  return (
    <div className="bg-slate-850 min-h-[100vh] scroll-smooth">
      <Head>
        <title>Movie HUB | {data?.title || data?.name}</title>
      </Head>
      <Transition
        show={true}
        appear={true}
        enter="transition ease-in-out duration-500 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <Jumbotron
          imgSource={data.backdrop_path}
          title={data?.title || data?.name}
        >
          <Overlay>
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
