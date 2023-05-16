import "../styles/globals.css"
import { Provider } from "react-redux"
import { store } from "../app/store"
import { SearchHandler } from "../components/Search/SearchHandler"
import { Fragment } from "react"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  return (
    <Provider store={store}>
      <SearchHandler>
        {getLayout(
          <Fragment>
            <Component {...pageProps} />
          </Fragment>
        )}
      </SearchHandler>
    </Provider>
  )
}

export default MyApp
