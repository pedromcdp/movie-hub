import PropTypes from "prop-types"

function List({ children }) {
  return (
    <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 py-6 px-6 justify-items-center scroll-smooth overscroll-contain">
      {children}
    </ul>
  )
}

export default List

List.propTypes = {
  children: PropTypes.node,
}
