function OverviewDetail({ content_title, genres, release_date, overview }) {
  return (
    <article className="text-white mx-2 md:h-2/4 md:pb-10 md:w-2/4 tracking-wide antialiased flex flex-col items-center md:items-start md:justify-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
        {content_title}
      </h2>
      <p className="text-md divide-x space-x-1">
        {genres.map(genre => (
          <span key={genre.id}> {genre.name}</span>
        ))}
        <span> {release_date?.substring(0, 4)}</span>
      </p>
      <p className="font-medium overflow-hidden hidden md:block">{overview}</p>
    </article>
  )
}

export default OverviewDetail
