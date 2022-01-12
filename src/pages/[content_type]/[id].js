import Head from "next/head"
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

function Detail() {
  const router = useRouter()
  const { content_type, id } = router.query
  const { data, isLoading, isFetching } = useGetMovieQuery({
    content_type: content_type,
    query: id,
  })

  if (isLoading || isFetching) {
    return <Loading />
  }

  return (
    <div className="bg-slate-850 min-h-[100vh] scroll-smooth">
      <Head>
        <title>{`Movie HUB | ${data?.title || data?.name}`}</title>
      </Head>
      <main>
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
          <Jumbotron imgSource={data.backdrop_path}>
            <Overlay>
              <OverviewContainer>
                <Poster imgSource={data?.poster_path} />
                <OverviewDetail
                  content_title={data?.title || data?.name}
                  genres={data?.genres}
                  release_date={data?.release_date}
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
      </main>
    </div>
  )
}

export default Detail
