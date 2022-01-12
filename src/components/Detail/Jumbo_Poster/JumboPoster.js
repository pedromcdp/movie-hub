import Image from "next/image"
import PropTypes from "prop-types"

function Poster({ imgSource }) {
  return (
    <div className="flex-none relative w-52 h-80 bg-gray-50 bg-opacity-10 rounded-lg">
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

Poster.propTypes = {
  imgSource: PropTypes.string,
}
