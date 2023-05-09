import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGetTrendingTitlesQuery } from "../../services/tmdb"
import Overlay from "../Overlay/Overlay"
import Loading from "../Loading/Loading"
import { useHideMouse } from "../../hooks/useHideMouse"

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
  const { hideMouse } = useHideMouse()

  useEffect(() => {
    const updateIndex = () => {
      setTimeout(() => {
        if (currentIndex === 19) {
          setCurrentIndex(0)
        } else {
          setCurrentIndex(currentIndex + 1)
        }
      }, 10000)
    }
    updateIndex()
  }, [currentIndex])

  if (isLoading || isFetching) {
    return <Loading />
  }

  return (
    <section className="h-screen relative min-h-[680px]">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movieData?.results[currentIndex].backdrop_path}`}
        alt={`${
          movieData?.results[currentIndex].title ||
          movieData?.results[currentIndex].name
        } imagem de capa`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <Overlay>
        <div className="flex flex-col h-full justify-end pb-20 md:pb-10 px-6 md:px-14 text-white tracking-wide">
          <h1 className="text-5xl font-medium">
            {movieData?.results[currentIndex].title ||
              movieData?.results[currentIndex].name}
          </h1>
          <p className="text-xs">
            Título original: <span className="font-medium"></span>
            <span className="font-medium">
              {movieData?.results[currentIndex].original_title ||
                movieData?.results[currentIndex].original_name}
            </span>{" "}
            | Pontuação:{" "}
            <span className="font-medium">
              {Math.round(movieData?.results[currentIndex].vote_average * 10) /
                10}
            </span>
          </p>
          <p className="pt-2 text-clip overflow-hidden w-full md:w-2/4">
            {movieData?.results[currentIndex].overview &&
              `${movieData?.results[currentIndex].overview.substring(
                0,
                200
              )}...`}
          </p>
          <Link
            href={`/${movieData?.results[currentIndex].media_type}/${movieData?.results[currentIndex].id}`}
            passHref
          >
            <button
              aria-label={`Ver mais informações sobre ${
                movieData?.results[currentIndex].original_title ||
                movieData?.results[currentIndex].original_name
              }`}
              className="bg-white text-opacity-100 px-3 pt-3 pb-2.5 mt-2 w-48 text-black rounded"
            >
              Mais Informações
            </button>
          </Link>
          {/* MOUSE */}
          <div
            className={
              "hidden md:block border-2 border-white self-center w-5 h-8 rounded-xl animate-bounce mt-12 transition duration-500 ease-in-out " +
              (hideMouse && "opacity-0 ")
            }
          >
            <div className="absolute bg-white left-1.5 rounded-full top-1.5 right-1.5 w-1 h-1"></div>
          </div>
          {/* //////// */}
        </div>
      </Overlay>
    </section>
  )
}

export default Jumbotron
