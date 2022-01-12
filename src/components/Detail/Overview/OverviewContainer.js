import PropTypes from "prop-types"

function OverviewContainer({ children }) {
  return (
    <div className="absolute flex  h-full w-full">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:px-14 self-center mx-auto max-w-screen-2xl md:space-x-3 space-y-2">
        {children}
      </div>
    </div>
  )
}

export default OverviewContainer

OverviewContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node.isRequired),
}
