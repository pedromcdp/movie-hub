import PropTypes from "prop-types"

function Overlay({ children, page }) {
  return (
    <div
      className={`absolute inset-0 ${
        page
          ? "bg-gradient-to-t from-slate-850 from-4%"
          : "bg-jumbo-overlay bg-cover bg-no-repeat bg-center"
      }`}
    >
      {children}
    </div>
  )
}

export default Overlay

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.bool,
}
