import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Search from "./"
import { useSearchState, setSearchState } from "../../features/NavBarSlice"
import { useOs } from "@mantine/hooks"
import PropTypes from "prop-types"
import { AnimatePresence } from "framer-motion"

export function SearchHandler({ children }) {
  const showSearch = useSelector(useSearchState)
  const dispatch = useDispatch()
  const os = useOs()

  function onKeyDown(e) {
    if (
      (os === "macos"
        ? e.metaKey && e.key === "k"
        : e.ctrlKey && e.key === "k") ||
      (os === "macos" ? e.metaKey && e.key === "K" : e.ctrlKey && e.key === "K")
    ) {
      e.preventDefault()
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
    <Fragment>
      <AnimatePresence>{showSearch && <Search />}</AnimatePresence>
      {children}
    </Fragment>
  )
}

SearchHandler.propTypes = {
  children: PropTypes.node.isRequired,
}
