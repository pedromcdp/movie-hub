import { useState, useEffect } from "react"
import overlay from "../../assets/overlay.png"
import Image from "next/image"
function Jumbotron({ movieData }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex === 19) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 10000)
  }, [currentIndex])

  return (
    <header className="w-screen h-[45rem] bg-black ">
      <div className="w-full h-full absolute">
        <div className="relative w-full h-[45rem]">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieData?.results[currentIndex].backdrop_path}`}
            alt={`${
              movieData?.results[currentIndex].title ||
              movieData?.results[currentIndex].name
            } imagem de capa`}
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
          <Image
            src={overlay}
            alt="blur overlay"
            layout="fill"
            objectFit="cover"
            loading="eager"
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
              {movieData?.results[currentIndex].overview.substring(0, 300)}
              ...
            </p>
            <button className="bg-white text-opacity-100 p-3 mt-2 text-black rounded">
              Mais Informação
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Jumbotron
