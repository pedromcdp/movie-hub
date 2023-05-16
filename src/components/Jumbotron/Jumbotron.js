import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
        setCurrentIndex(prevIndex => (prevIndex === 19 ? 0 : prevIndex + 1))
      }, 10000)
    }
    updateIndex()
  }, [currentIndex])

  if (isLoading || isFetching) {
    return <Loading />
  }

  const movie = movieData?.results[currentIndex]

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.1,
        ease: "easeIn",
      }}
      className="h-screen relative min-h-[680px]"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={`${movie.title ?? movie.name} imagem de capa`}
        fill={true}
        unoptimized
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        sizes="(max-width: 640px) 100vw, 1920px"
        priority
      />
      <Overlay>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
            delay: 0.05,
          }}
          className="flex flex-col h-full justify-end pb-20 md:pb-10 px-6 md:px-14 text-white tracking-wide"
        >
          <h1 className="text-5xl font-medium">{movie.title ?? movie.name}</h1>
          <p className="text-xs">
            Título original: <span className="font-medium"></span>
            <span className="font-medium">
              {movie.original_title ?? movie.original_name}
            </span>{" "}
            | Pontuação:{" "}
            <span className="font-medium">
              {Math.round(movie.vote_average * 10) / 10}
            </span>
          </p>
          <p className="pt-2 text-clip overflow-hidden w-full md:w-2/4">
            {movie.overview && `${movie.overview.substring(0, 200)}...`}
          </p>
          <Link
            href={`/${movie.media_type}/${movie.id}`}
            passHref
            className="flex items-start justify-center gap-1.5 bg-white text-opacity-100 px-3 pt-3 pb-2.5 mt-2 w-48 text-black rounded text-center"
            aria-label={`Mais informações sobre ${
              movie.original_title ?? movie.original_name
            }`}
          >
            Mais detalhes
          </Link>
          <div
            className={
              "hidden md:block border-2 border-white self-center w-5 h-8 rounded-xl animate-bounce mt-12 transition duration-500 ease-in-out " +
              (hideMouse && "opacity-0 ")
            }
          >
            <div className="absolute bg-white left-1.5 rounded-full top-1.5 right-1.5 w-1 h-1"></div>
          </div>
        </motion.div>
      </Overlay>
    </motion.section>
  )
}

export default Jumbotron
