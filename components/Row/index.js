/* eslint-disable @next/next/no-img-element */
import Lottie from "react-lottie"
import animationData from "../../animations/jumbotronLoader.json"
import Link from "next/link"
import RowHeader from "./RowHeader"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

function Row({ rowTitle, request }) {
  const { data, isFetching } = request
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  if (isFetching) {
    return (
      <div className="w-screen h-auto flex-col px-6 md:px-14 pt-8 text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">{rowTitle}</h1>
          <button>ver mais</button>
        </div>
        <Lottie options={defaultOptions} width={100} height={100} />
      </div>
    )
  }

  return (
    <div className="flex-col pl-6 md:pl-14 pt-8 text-white w-screen">
      <RowHeader rowTitle={rowTitle} />
      <div className="static w-full flex overflow-hidden scrollbar-hide overflow-x-scroll scroll-smooth space-x-6 py-8 pl-6">
        <FiChevronLeft className="absolute self-center left-14 z-10 bg-white text-black text-2xl rounded-full shadow-md" />
        <FiChevronRight className="absolute self-center right-14 z-10 bg-white text-black text-2xl rounded-full shadow-md" />

        {data?.results.map(movie => (
          <Link
            key={movie.id}
            href={`/${
              request?.originalArgs.content_type || request?.originalArgs.type
            }/${movie.id}`}
            passHref
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title || movie.name} capa`}
              className="h-52 object-cover drop-shadow-lg transition ease-in-out hover:scale-125 duration-200 cursor-pointer"
            />
          </Link>
        ))}
        <div className="pl-10"></div>
      </div>
    </div>
  )
}

export default Row
