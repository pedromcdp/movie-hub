import PropTypes from "prop-types"

function ContentDetail({ general_data, cast_data }) {
  const directors = cast_data?.crew.filter(person => {
    return person.job === "Director"
  })
  const writers = cast_data?.crew.filter(person => {
    return person.job === "Writer"
  })

  return (
    <div className="flex-none order-1 md:w-3/12 text-white antialiased md:border-r border-slate-300 border-opacity-30">
      <article>
        <h1 className="text-2xl font-semibold tracking-wide">Detalhes</h1>
        <p className="text-whtie font-semibold">
          Título original:{" "}
          <span className="font-normal text-gray-100 tracking-wide">
            {general_data.original_title || general_data.original_name}
          </span>
        </p>
        {directors?.length > 0 && (
          <p className="text-white font-semibold">
            Director:{" "}
            {directors?.map((director, index) => (
              <span
                className="mr-1 font-normal text-gray-100 tracking-wide"
                key={director.name}
              >
                {director.name}
                {index === directors.length - 1 ? null : ", "}
              </span>
            ))}
          </p>
        )}
        {writers?.length > 0 && (
          <p className="text-white font-semibold">
            Escritores:{" "}
            {writers?.map((writer, index) => (
              <span
                key={writer.id}
                className="font-normal text-gray-100 tracking-wide"
              >
                {writer.name}
                {index === writers.length - 1 ? null : ", "}
              </span>
            ))}
          </p>
        )}
        <p className="text-white space-x-1 font-semibold">
          País de origem:{" "}
          {general_data.production_countries?.map((country, index) => (
            <span
              className="font-normal text-gray-100 tracking-wide"
              key={country.name}
            >
              {country.name}
              {index === general_data.production_countries.length - 1
                ? null
                : ", "}
            </span>
          ))}
        </p>
        <p className="text-white space-x-1 font-semibold">
          Linguagem:{" "}
          {general_data.spoken_languages?.map((language, index) => (
            <span
              className="text-gray-100 font-normal tracking-wide"
              key={language.name}
            >
              {language.name}
              {index === general_data.spoken_languages.length - 1 ? null : ", "}
            </span>
          ))}
        </p>
        <p className="text-white font-semibold">
          Data de lançamento:{" "}
          <span className="font-normal text-gray-100  tracking-wider">
            {general_data.release_date?.split("-").reverse().join("/") ||
              general_data.first_air_date?.split("-").reverse().join("/")}
          </span>
        </p>
        <p className="text-white font-semibold">
          Pontuação:{" "}
          <span className="font-normal text-gray-100 tracking-wider">
            {Math.round(general_data.vote_average * 10) / 10}
          </span>
        </p>
      </article>
    </div>
  )
}

export default ContentDetail

ContentDetail.propTypes = {
  general_data: PropTypes.object,
  cast_data: PropTypes.object,
}
