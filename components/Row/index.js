import { useGetTrendingTitlesQuery } from "../../features/TMDB_API/moviesSlice"

function Row({ rowTitle, type, time_window, page }) {
  const { data } = useGetTrendingTitlesQuery({
    type: type,
    time_window: time_window,
    page: page,
  })
  return (
    <div className="flex-col pl-6 pt-8 text-white tracking-wide">
      <div className="flex justify-between items-center pr-6">
        <h1 className="text-4xl">{rowTitle}</h1>
        <button>ver mais</button>
      </div>

      <div className="flex overflow-hidden overflow-x-scroll space-x-6 py-6 pl-6">
        {data?.results.map(movie => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={`${movie.title || movie.name} capa`}
            className=" h-52 object-cover shadow-xl transition ease-in hover:scale-125 duration-100 cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}

export default Row
