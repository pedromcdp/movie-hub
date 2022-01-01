import CreditsItem from "./CreditsItem"
import CreditsRow from "./CreditsRow"

function ContentMain({ general_data, cast_data }) {
  return (
    <div className="order-2 md:w-9/12 mt-4 md:mt-0 md:ml-4 text-white antialiased flex flex-col space-y-4">
      <article>
        <h1 className="text-2xl font-medium tracking-wide">Enredo</h1>
        <p className="text-gray-300 w-4/4">{general_data.overview}</p>
      </article>
      <CreditsRow rowTitle="Elenco">
        {cast_data?.cast.map(person => (
          <CreditsItem key={person.id} person={person} />
        ))}
      </CreditsRow>
      <CreditsRow rowTitle="Equipa Técnica">
        {cast_data?.crew.map(person => (
          <CreditsItem key={person.credit_id} person={person} />
        ))}
      </CreditsRow>
    </div>
  )
}

export default ContentMain
