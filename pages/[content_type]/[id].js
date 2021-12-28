import Head from "next/head"
import { useRouter } from "next/router"
import NavBar from "../../components/NavBar"
import Jumbotron from "../../components/Detail/Jumbotron"
import Overlay from "../../components/Overlay"
import Poster from "../../components/Detail/Jumbo_Poster"
import { useGetMovieQuery } from "../../services/tmdb"
import Lottie from "react-lottie"
import animationData from "../../animations/jumbotronLoader.json"
import OverviewContainer from "../../components/Detail/Overview"
import OverviewDetail from "../../components/Detail/Overview_Detail"

function Detail() {
  const router = useRouter()
  const { content_type, id } = router.query
  const { data, isLoading, isFetching } = useGetMovieQuery({
    content_type: content_type,
    query: id,
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  if (isLoading || isFetching) {
    return (
      <div className="w-screen h-screen bg-slate-850 flex justify-center items-center">
        <Head>
          <title>Movie HUB | Loading</title>
        </Head>
        <Lottie options={defaultOptions} width={200} height={200} />
      </div>
    )
  }

  return (
    <div className="bg-slate-850">
      <Head>
        <title>{`Movie HUB | ${data?.title || data?.name}`}</title>
      </Head>
      <main>
        <NavBar />
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
      </main>
    </div>
  )
}

export default Detail
