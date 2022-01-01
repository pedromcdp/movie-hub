function OverviewDetail({ content_title, genres, release_date }) {
  return (
    <article className="text-white mx-2 self-end tracking-wide antialiased flex flex-col items-center md:items-start md:justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
        {content_title}
      </h2>
      <p className="text-md divide-x space-x-1">
        {genres.map(genre => (
          <span key={genre.id}> {genre.name}</span>
        ))}
      </p>
      <p> {release_date?.substring(0, 4)}</p>
    </article>
  )
}

export default OverviewDetail
