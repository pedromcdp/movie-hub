import PropTypes from "prop-types"

function RowHeader({ rowTitle }) {
  return (
    <div className="pr-6 md:pr-14">
      <h1 className="text-3xl">{rowTitle}</h1>
    </div>
  )
}

export default RowHeader

RowHeader.propTypes = {
  rowTitle: PropTypes.string.isRequired,
}
