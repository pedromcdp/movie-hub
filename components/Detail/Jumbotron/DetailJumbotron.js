import Image from "next/image"
function DetailJumbotron({ children, imgSource }) {
  return (
    <div className="h-[85vh] w-screen relative bg-gray-100">
      <Image
        src={`https://image.tmdb.org/t/p/original/${imgSource}`}
        alt="background image"
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
