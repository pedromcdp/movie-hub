import Link from "next/link"
import { RiSearch2Line } from "react-icons/ri"
import { useOs } from "@mantine/hooks"
import { setState } from "../../features/search"
import { useDispatch } from "react-redux"

function Center() {
  const os = useOs()
  const dispatch = useDispatch()
  return (
    <div className="flex basis-2/4 justify-center">
      <div
        onClick={() => dispatch(setState(true))}
        className="hidden md:flex w-full items-center md:w-72 space-x-2 bg-slate-300 bg-opacity-40 rounded-md shadow-xl px-2 py-1"
      >
        <RiSearch2Line />
        <span className="tracking-wider font-light pt-1 cursor-pointer">
          pesquise por filmes ou séries
        </span>
        <span className="flex flex-auto justify-end text-xs font-semibold pt-1">
          {os === "macos" || ("windows" && os === "macos") ? "⌘" : "ctrl"} K
        </span>
      </div>
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
