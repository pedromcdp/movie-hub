import Image from "next/image"

function Poster({ imgSource }) {
  return (
    <div className="flex-none relative h-2/4 w-2/4 md:3/4 md:w-60 bg-gray-50 bg-opacity-10 rounded-lg">
      <Image
        src={`https://image.tmdb.org/t/p/w300/${imgSource}`}
        alt="poster"
        layout="fill"
        objectFit="cover"
        loading="lazy"
        className="rounded-lg"
      />
    </div>
  )
}

export default Poster
