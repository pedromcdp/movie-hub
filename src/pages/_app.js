import "../styles/globals.css"
import { Provider } from "react-redux"
import { store } from "../app/store"
import { SearchHandler } from "../components/Search/SearchHandler"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  return (
    <Provider store={store}>
      <SearchHandler>
        {getLayout(
          <>
            <Component {...pageProps} />
          </>
        )}
      </SearchHandler>
    </Provider>
  )
}

export default MyApp
