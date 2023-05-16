import Image from "next/image"
import Link from "next/link"
import PropTypes from "prop-types"

function RowItem({ movie, request }) {
  return (
    <Link
      href={`/${
        request?.originalArgs?.type === "trending"
          ? movie.media_type
          : request?.originalArgs.type
      }/${movie.id}`}
      passHref
    >
      <div className="md:hover:scale-125 ease-out duration-300 space-y-2 cursor-pointer relative">
        <div className="relative flex h-52 w-32 bg-gray-50 bg-opacity-10 my-1 z-0 rounded-lg items-center justify-center font-medium tracking-wide text-white">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
              alt={movie.name || movie.title}
              fill={true}
              unoptimized
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              sizes={"(max-width: 640px) 100vw, 300px"}
              className="rounded-lg"
              priority
            />
          ) : (
            <span className="px-2">{movie.name || movie.title}</span>
          )}
        </div>
        <h2 className="text-white tracking-wide w-full text-center leading-4">
          {movie?.title || movie?.name}
        </h2>
      </div>
    </Link>
  )
}

export default RowItem

RowItem.propTypes = {
  movie: PropTypes.object,
  request: PropTypes.object,
}
