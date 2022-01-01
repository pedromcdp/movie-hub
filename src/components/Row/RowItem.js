import Image from "next/image"
import Link from "next/link"

function RowItem({ movie, request }) {
  return (
    <Link
      href={`/${
        request?.originalArgs.content_type || request?.originalArgs.type
      }/${movie.id}`}
      passHref
    >
      <div className="md:hover:scale-125 ease-out duration-300 space-y-2 cursor-pointer">
        <div className="relative flex h-52 w-32 bg-gray-50 bg-opacity-10 my-1 z-0 rounded-lg items-center justify-center font-medium tracking-wide text-white">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
              alt={movie.name || movie.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
              priority
            />
          ) : (
            <span className="px-2">{movie.name || movie.title}</span>
          )}
        </div>
        <p className="text-white tracking-wide w-full text-center leading-4">
          {movie?.title || movie?.name}
        </p>
      </div>
    </Link>
  )
}

export default RowItem
