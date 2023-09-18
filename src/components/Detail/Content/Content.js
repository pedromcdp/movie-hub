import React from "react"
import ContentDetail from "./ContentDetail"
import ContentMain from "./ContentMain"
import { useGetCastQuery } from "../../../services/tmdb"
import PropTypes from "prop-types"

function Content({ data: general_data, id, type }) {
  const { data: cast_data } = useGetCastQuery({ type: type, id: id })

  return (
    <div className="flex flex-col md:flex-row md:items-start max-w-screen-xl mx-auto py-6 px-6">
      <ContentMain general_data={general_data} cast_data={cast_data} />
      <ContentDetail general_data={general_data} cast_data={cast_data} />
    </div>
  )
}

export { Content }

Content.propTypes = {
  data: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
}
