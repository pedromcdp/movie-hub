import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Search from "./"
import { searchState } from "../../features/search"
import { setState } from "../../features/search"

export function SearchHandler({ children }) {
  const showSearch = useSelector(searchState)
  const dispatch = useDispatch()
  const onKeyDown = e => {
    if ((e.metaKey && e.key === "k") || (e.metaKey && e.key === "K")) {
      dispatch(setState(true))
    } else if (e.key === "Escape") {
      dispatch(setState(false))
    }
  }
  console.log(showSearch)

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
    }
  })

  return (
    <div>
      {showSearch && <Search />}
      {children}
    </div>
  )
}
