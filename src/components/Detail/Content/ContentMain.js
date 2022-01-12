import CreditsItem from "./CreditsItem"
import CreditsRow from "./CreditsRow"
import PropTypes from "prop-types"
import { RiErrorWarningLine } from "react-icons/ri"

function ContentMain({ general_data, cast_data }) {
  return (
    <div className="order-2 md:w-9/12 mt-4 md:mt-0 md:ml-4 text-white antialiased flex flex-col space-y-4">
      <article>
        <h1 className="text-2xl font-medium tracking-wide">Enredo</h1>
        {general_data.overview ? (
          <p className="text-gray-300 w-4/4">{general_data.overview}</p>
        ) : (
          <div className="flex flex-col space-y-2 items-center py-2 text-white">
            <RiErrorWarningLine className="w-6 h-6 " />
            <h1 className="text-xl tracking-wide">Sem Informação</h1>
          </div>
        )}
      </article>
      {cast_data?.cast.length > 0 && (
        <CreditsRow rowTitle="Elenco">
          {cast_data?.cast.map(person => (
            <CreditsItem key={person.id} person={person} />
          ))}
        </CreditsRow>
      )}
      {cast_data?.crew.length > 0 && (
        <CreditsRow rowTitle="Equipa Técnica">
          {cast_data?.crew.map(person => (
            <CreditsItem key={person.credit_id} person={person} />
          ))}
        </CreditsRow>
      )}
    </div>
  )
}

export default ContentMain

ContentMain.propTypes = {
  general_data: PropTypes.object,
  cast_data: PropTypes.object,
}
