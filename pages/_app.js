import "../styles/globals.css"
import { Provider } from "react-redux"
import { store } from "../app/store"
import { SearchHandler } from "../components/Search/SearchHandler"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SearchHandler>
        <Navbar />
        <Component {...pageProps} />
      </SearchHandler>
    </Provider>
  )
}

export default MyApp
