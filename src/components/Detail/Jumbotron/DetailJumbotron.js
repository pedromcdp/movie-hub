import Image from "next/image"
import PropTypes from "prop-types"
function DetailJumbotron({ children, imgSource, title }) {
  return (
    <div className="h-[85vh] min-h-[600px] relative bg-gray-100">
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${imgSource}`}
        alt={`Imagem de fundo de ${title}`}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        priority
        placeholder="blur"
        blurDataURL={
          "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
        }
      />
      {children}
    </div>
  )
}

export default DetailJumbotron

DetailJumbotron.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
}
