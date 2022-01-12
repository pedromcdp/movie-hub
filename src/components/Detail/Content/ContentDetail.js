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
        <h1 className="text-2xl font-medium tracking-wide">Detalhes</h1>

        <p className="text-gray-300">
          Título original:{" "}
          {general_data.original_title || general_data.original_name}
        </p>
        {directors?.length > 0 && (
          <p className="text-gray-300">
            Director:{" "}
            {directors?.map(director => (
              <span className="mr-1" key={directors.id}>
                {director.name}
              </span>
            ))}
          </p>
        )}

        {writers?.length > 0 && (
          <p className="text-gray-300">
            Escritores:{" "}
            {writers?.map(writer => (
              <span key={writer.id}>{writer.name}, </span>
            ))}
          </p>
        )}
        <p className="text-gray-300 space-x-1">
          País de origem:{" "}
          {general_data.production_countries?.map(country => (
            <span key={country.id}>{country.name}, </span>
          ))}
        </p>
        <p className="text-gray-300 space-x-1">
          Linguagem:{" "}
          {general_data.spoken_languages?.map(language => (
            <span key={language.name}>{language.name}</span>
          ))}
        </p>
        <p className="text-gray-300">
          Data de lançamento:{" "}
          {general_data.release_date?.split("-").reverse().join("/") ||
            general_data.first_air_date?.split("-").reverse().join("/")}
        </p>
        <p className="text-gray-300">Pontuação: {general_data.vote_average}</p>
      </article>
    </div>
  )
}

export default ContentDetail

ContentDetail.propTypes = {
  general_data: PropTypes.object,
  cast_data: PropTypes.object,
}
