import { useState, useEffect } from "react"
import Image from "next/image"
import Lottie from "react-lottie"
import animationData from "../../animations/jumbotronLoader.json"
import { useGetTrendingTitlesQuery } from "../../services/tmdb"
import Link from "next/link"
import Overlay from "../Overlay"

function Jumbotron() {
  const [hideMouse, setHideMouse] = useState(false)
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

  const trasitionMouse = () => {
    if (window.scrollY > 100) {
      setHideMouse(true)
    } else {
      setHideMouse(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", trasitionMouse)
    return () => {
      window.removeEventListener("scroll", trasitionMouse)
    }
  }, [])

  useEffect(() => {
    let isSubscribed = true
    if (isSubscribed) {
      window.addEventListener("scroll", trasitionMouse)
      setTimeout(() => {
        if (currentIndex === 19) {
          setCurrentIndex(0)
        } else {
          setCurrentIndex(currentIndex + 1)
        }
      }, 10000)
    }
    return () => {
      isSubscribed = false
      window.removeEventListener("scroll", trasitionMouse)
    }
  }, [currentIndex])

  if (isLoading || isFetching) {
    return (
      <div className="w-screen h-screen bg-slate-850 flex justify-center items-center">
        <Lottie options={defaultOptions} width={200} height={200} />
      </div>
    )
  }

  return (
    <div className="w-screen h-screen relative min-h-[680px]">
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
          <Link
            href={`/${movieData?.results[currentIndex].media_type}/${movieData?.results[currentIndex].id}`}
            passHref
          >
            <button className="bg-white text-opacity-100 p-3 mt-2 w-48 text-black rounded">
              Mais Informação
            </button>
          </Link>
          <div
            className={
              "hidden md:block border-2 border-white self-center w-5 h-8 rounded-xl animate-bounce mt-12 transition duration-500 ease-in-out " +
              (hideMouse && "opacity-0 ")
            }
          >
            <div className="absolute bg-white left-1.5 rounded-full top-1.5 right-1.5 w-1 h-1"></div>
          </div>
        </div>
      </Overlay>
    </div>
  )
}

export default Jumbotron
