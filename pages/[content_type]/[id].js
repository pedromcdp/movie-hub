import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import NavBar from "../../components/NavBar"
import { useGetMovieQuery } from "../../features/TMDB_API/moviesSlice"
import Lottie from "react-lottie"
import animationData from "../../animations/jumbotronLoader.json"

function Detail() {
  const router = useRouter()
  const content_type = router.query.content_type
  const id = router.query.id

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
    <div className="bg-slate-850 h-screen">
      <Head>
        <title>{`Movie HUB | ${data?.title || data?.name}`}</title>
      </Head>
      <main>
        <NavBar />
        <div
          className="h-[85vh] bg-cover bg-top"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
          }}
        >
          <div className="bg-jumbo-overlay bg-cover bg-no-repeat bg-center h-full w-full flex flex-col md:flex-row justify-center md:justify-start items-center px-14 md:space-x-5 space-y-5 pt-32">
            <div className="flex-none">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                alt="poster"
                width={310}
                height={440}
                layout="fixed"
                objectFit="fill"
              />
            </div>
            <div className="text-white tracking-wide antialiased font-medium flex flex-col md:items-start w-2/4 md:pt-20">
              <h1 className="text-4xl">{data?.title || data?.name}</h1>
              <span className="text-md">
                {data?.genres.map(genre => (
                  <span key={genre.id}>{genre.name} | </span>
                ))}{" "}
                {data.release_date?.substring(0, 4)}
              </span>
              <p className="overflow-hidden hidden md:block">
                {data?.overview}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Detail

//remover h-screen later
