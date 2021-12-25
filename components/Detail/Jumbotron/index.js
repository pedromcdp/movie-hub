import Image from "next/image"
function Jumbotron({ children, imgSource }) {
  return (
    <div className="h-[85vh] w-screen relative">
      <Image
        src={`https://image.tmdb.org/t/p/original/${imgSource}`}
        alt="background image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      {children}
    </div>
  )
}

export default Jumbotron
