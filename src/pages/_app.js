import "../styles/globals.css"
import { Provider } from "react-redux"
import { store } from "../app/store"
import { SearchHandler } from "../components/Search/SearchHandler"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SearchHandler>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </SearchHandler>
    </Provider>
  )
}

export default MyApp
