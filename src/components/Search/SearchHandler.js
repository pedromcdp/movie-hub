import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Search from "./"
import { useSearchState, setSearchState } from "../../features/NavBarSlice"

export function SearchHandler({ children }) {
  const showSearch = useSelector(useSearchState)
  const dispatch = useDispatch()
  const onKeyDown = e => {
    if ((e.metaKey && e.key === "k") || (e.metaKey && e.key === "K")) {
      dispatch(setSearchState(true))
    } else if (e.key === "Escape") {
      dispatch(setSearchState(false))
    }
  }

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
