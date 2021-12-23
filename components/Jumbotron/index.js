import { useState, useEffect } from "react"
import overlay from "../../assets/overlay.png"
import Image from "next/image"
import Lottie from "react-lottie"
import animationData from "../../animations/jumbotronLoader.json"
import { useGetTrendingTitlesQuery } from "../../features/TMDB_API/moviesSlice"

function Jumbotron() {
  const {
    data: movieData,
    isLoading,
    isFetching,
  } = useGetTrendingTitlesQuery({
    type: "all",
    time_window: "week",
    page: "1",
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex === 19) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 10000)
  }, [currentIndex])

  if (isLoading || isFetching) {
    return (
      <div className="w-screen h-[45rem] bg-slate-800 flex justify-center items-center">
        <Lottie options={defaultOptions} width={200} height={200} />
      </div>
    )
  }

  return (
    <header className="w-screen h-[45rem] bg-slate-800 ">
      <div className="relative w-full h-[45rem]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieData?.results[currentIndex].backdrop_path}`}
          alt={`${
            movieData?.results[currentIndex].title ||
            movieData?.results[currentIndex].name
          } imagem de capa`}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <Image
          src={overlay}
          alt="blur overlay"
          layout="fill"
          objectFit="cover"
          loading="eager"
          priority={true}
        />
        <div className="w-full h-full top-0 absolute px-6 text-white tracking-wide">
          <h1 className="text-5xl mt-96 font-medium">
            {movieData?.results[currentIndex].title ||
              movieData?.results[currentIndex].name}
          </h1>
          <p className="text-xs">
            Título original:{" "}
            {movieData?.results[currentIndex].original_title ||
              movieData?.results[currentIndex].original_name}{" "}
            | Pontuação: {movieData?.results[currentIndex].vote_average}
          </p>
          <p className="pt-2 text-clip overflow-hidden w-full md:w-2/4">
            {movieData?.results[currentIndex].overview &&
              `${movieData?.results[currentIndex].overview.substring(
                0,
                200
              )}...`}
          </p>
          <button className="bg-white text-opacity-100 p-3 mt-2 text-black rounded">
            Mais Informação
          </button>
        </div>
      </div>
    </header>
  )
}

export default Jumbotron
