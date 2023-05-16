import Image from "next/image"
import PropTypes from "prop-types"

function Poster({ imgSource, title }) {
  return (
    <div className="flex-none relative w-52 h-80 bg-gray-50 bg-opacity-10 rounded-lg shadow-md">
      <Image
        src={`https://image.tmdb.org/t/p/w300/${imgSource}`}
        alt={`Imagem de capa de ${title}`}
        fill={true}
        style={{
          objectFit: "cover",
        }}
        sizes="300px"
        loading="lazy"
        className="rounded-lg shadow-md"
        unoptimized
      />
    </div>
  )
}

export default Poster

Poster.propTypes = {
  title: PropTypes.string,
  imgSource: PropTypes.string,
}
