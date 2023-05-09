import PropTypes from "prop-types"

function OverviewDetail({ content_title, genres, release_date }) {
  return (
    <section className="text-white mx-2 md:self-end tracking-wide antialiased flex flex-col items-center md:items-start justify-center md:justify-end max-w-sm w-max">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
        {content_title}
      </h2>
      <ul className="flex flex-wrap justify-center md:justify-start text-md gap-1.5 transition-transform ease-in-out duration-150">
        {genres?.map(genre => (
          <li
            key={genre.id}
            className="bg-slate-50/40 px-2 pt-1 rounded-[0.235rem] shadow"
          >
            <span className="font-medium text-white tracking-wide">
              {genre.name}
            </span>
          </li>
        ))}
      </ul>
      {release_date && (
        <p className="pt-2">
          Data de lançamento:{" "}
          <span className="font-medium tracking-wider">
            {release_date?.substring(0, 4)}
          </span>
        </p>
      )}
    </section>
  )
}

export default OverviewDetail

OverviewDetail.propTypes = {
  content_title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  release_date: PropTypes.string,
}
