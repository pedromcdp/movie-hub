import Link from "next/link"
import { setMobileNavState } from "../../features/NavBarSlice"
import { resetPageAndFilter } from "../../features/SearchSlice"
import { useDispatch, useSelector } from "react-redux"
import { useMobileNavShow } from "../../features/NavBarSlice"
import { AnimatePresence, motion } from "framer-motion"

function MobileNav() {
  const dispatch = useDispatch()
  const MobileNavState = useSelector(useMobileNavShow)
  return (
    <AnimatePresence>
      {MobileNavState && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0 h-screen bg-black bg-opacity-90 flex flex-col font-light tracking-wider space-y-10 text-3xl uppercase justify-center items-center z-10 origin-top"
        >
          <Link href="/discover/movie" passHref={true}>
            <li
              className="cursor-pointer"
              onClick={() => {
                dispatch(setMobileNavState())
                dispatch(resetPageAndFilter())
              }}
            >
              Filmes
            </li>
          </Link>
          <Link href="/discover/tv" passHref={true}>
            <li
              className="cursor-pointer"
              onClick={() => {
                dispatch(setMobileNavState())
                dispatch(resetPageAndFilter())
              }}
            >
              Séries
            </li>
          </Link>
          <Link href="/about" passHref={true}>
            <li
              className="cursor-pointer"
              onClick={() => {
                dispatch(setMobileNavState())
                dispatch(resetPageAndFilter())
              }}
            >
              Sobre
            </li>
          </Link>
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default MobileNav
