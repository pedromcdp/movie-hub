import Lottie from "react-lottie"
import animationData from "../../animations/jumbotronLoader.json"

function Row({ rowTitle, request }) {
  const { data, isFetching } = request
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  if (isFetching) {
    return (
      <div className="w-screen h-auto flex-col px-6 md:px-14 pt-8 text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">{rowTitle}</h1>
          <button>ver mais</button>
        </div>
        <Lottie options={defaultOptions} width={100} height={100} />
      </div>
    )
  }

  return (
    <div className="flex-col pl-6 md:pl-14 pt-8 text-white">
      <div className="flex justify-between items-center pr-6 md:pr-14">
        <h1 className="text-3xl">{rowTitle}</h1>
        <button>ver mais</button>
      </div>
      <div className="flex overflow-hidden scrollbar-hide overflow-x-scroll scroll-smooth space-x-6 py-8 pl-6">
        {data?.results.map(movie => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title || movie.name} capa`}
            className="h-52 object-cover drop-shadow-lg transition ease-in-out hover:scale-125 duration-200 cursor-pointer"
          />
        ))}
        <div className="pl-10"></div>
      </div>
    </div>
  )
}

export default Row
