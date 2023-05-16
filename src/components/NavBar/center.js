import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import { useOs } from "@mantine/hooks"
import { RiSearch2Line } from "react-icons/ri"
import { setSearchState, useSearchState } from "../../features/NavBarSlice"

function Center() {
  const os = useOs()
  const dispatch = useDispatch()
  const showSearch = useSelector(useSearchState)

  return (
    <div className="flex basis-2/4 justify-center">
      <motion.div
        animate={{ opacity: showSearch ? 0 : 1, y: showSearch ? 55 : 0 }}
        transition={{ duration: 0.25 }}
        onClick={() => dispatch(setSearchState(true))}
        className="hidden md:flex w-full items-center md:w-72 space-x-2 bg-slate-300 bg-opacity-40 rounded-md shadow-xl px-2 py-1"
      >
        <RiSearch2Line />
        <span className="tracking-wider font-light pt-1 cursor-pointer">
          pesquise por filmes ou séries
        </span>
        <span className="flex flex-auto justify-end text-xs font-semibold pt-1">
          {os === "macos" || ("windows" && os === "macos") ? "⌘" : "ctrl"} K
        </span>
      </motion.div>
      <div className="flex md:hidden">
        <Link href="/" passHref={true}>
          <h1 className="cursor-pointer font-light text-3xl antialiased hover:opacity-70">
            Movie<span className="font-bold">HUB</span>
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Center
