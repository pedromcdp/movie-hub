import Image from "next/image"

function Poster({ imgSource }) {
  return (
    <div className="flex-none relative h-2/4 w-2/4 md:3/4 md:w-60">
      <Image
        src={`https://image.tmdb.org/t/p/w300/${imgSource}`}
        alt="poster"
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}

export default Poster
