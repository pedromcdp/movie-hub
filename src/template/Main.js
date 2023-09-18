import { Fragment } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer/Footer"
import PropTypes from "prop-types"

const Main = ({ meta, children }) => {
  return (
    <Fragment>
      {meta}
      <NavBar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </Fragment>
  )
}

export { Main }

Main.propTypes = {
  meta: PropTypes.element,
  children: PropTypes.node,
}
