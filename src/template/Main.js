import PropTypes from "prop-types"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer/Footer"

const Main = ({ meta, children }) => {
  return (
    <>
      {meta}
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export { Main }

Main.propTypes = {
  meta: PropTypes.element,
  children: PropTypes.node,
}
