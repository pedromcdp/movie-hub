import React, { useEffect, useRef } from "react"
import { RiSearch2Line } from "react-icons/ri"
import { useClickOutside } from "@mantine/hooks"
import { useDispatch } from "react-redux"
import { setSearchState } from "../../features/NavBarSlice"
import { useRouter } from "next/router"
import { setPage } from "../../features/SearchSlice"
import { motion } from "framer-motion"
import { SearchVariants } from "../../utils/SearchVariants"

const Search = () => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const searchInput = useRef(null)

  const ref = useClickOutside(
    () => dispatch(setSearchState(false)),
    ["mouseup", "touchend"]
  )

  useEffect(() => {
    searchInput.current.focus()
  }, [])

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      onSubmit={e => {
        e.preventDefault()
        dispatch(setSearchState(false))
        dispatch(setPage(1))
        push({
          pathname: "/search",
          query: { q: searchInput.current.value },
        })
      }}
      className="fixed w-screen h-screen bg-black/40 z-50"
    >
      <div className="relative max-w-screen-sm mx-auto flex justify-center">
        <div ref={ref} className="mt-20 w-5/6 mx-auto">
          <motion.div
            initial={SearchVariants().initial}
            animate={SearchVariants().animate}
            exit={SearchVariants().initial}
            transition={SearchVariants().transition}
            className="flex shadow-lg origin-top items-center bg-white rounded-lg p-4 space-x-2"
          >
            <button aria-label="Abrir caixa de pesquisa" className="flex-none">
              <RiSearch2Line className="text-black w-5 h-5" />
            </button>
            <input
              className="flex-auto outline-none pt-1 bg-transparent text-black tracking-wide font-light rounded-lg text-lg"
              type="text"
              placeholder="pesquise por filmes ou séries"
              ref={searchInput}
            />
          </motion.div>
        </div>
      </div>
    </motion.form>
  )
}

export default Search
