/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react"
import Lottie from "react-lottie"
import { loading } from "../../utils/lottie_options"
import Link from "next/link"
import RowHeader from "./RowHeader"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

function Row({ rowTitle, request }) {
  const scrollRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const { data, isFetching, isLoading } = request

  const onScroll = () => {
    if (scrollRef.current.scrollLeft > 0) {
      setShowLeft(true)
    } else {
      setShowLeft(false)
    }
    if (
      scrollRef.current.scrollLeft ===
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    ) {
      setShowRight(false)
    } else {
      setShowRight(true)
    }
  }

  if (isLoading || isFetching) {
    return (
      <div className="w-screen h-auto flex-col px-6 md:px-14 pt-8 text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">{rowTitle}</h1>
          <button>ver mais</button>
        </div>
        <Lottie options={loading} width={100} height={100} />
      </div>
    )
  }

  return (
    <section className="flex-col pl-6 md:pl-14 pt-6 md:pt-8 text-white w-screen">
      <RowHeader rowTitle={rowTitle} />
      <div
        onScroll={onScroll}
        ref={scrollRef}
        className="w-full flex overflow-hidden scrollbar-hide overflow-x-scroll scroll-smooth space-x-6 md:py-8 pl-6"
      >
        {showLeft && (
          <button
            onClick={() => {
              scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 720
            }}
          >
            <FiChevronLeft className="absolute md:h-8 md:w-8 hover:scale-150 trasition ease-out duration-200 left-6 md:left-14 z-10 bg-white text-black text-2xl rounded-full shadow-md" />
          </button>
        )}
        {showRight && (
          <button
            onClick={() => {
              scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 800
            }}
          >
            <FiChevronRight className="absolute md:h-8 md:w-8 hover:scale-150 trasition ease-out duration-200 right-6 md:right-14 z-10 bg-white text-black text-2xl rounded-full shadow-md" />
          </button>
        )}
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
              loading="lazy"
              className="h-52 rounded-lg object-cover drop-shadow-lg transition ease-out md:hover:scale-125 duration-200 cursor-pointer"
            />
          </Link>
        ))}
        <div className="pl-10"></div>
      </div>
    </section>
  )
}

export default Row
