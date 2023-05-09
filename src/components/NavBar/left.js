import Link from "next/link"
import { RiSearch2Line } from "react-icons/ri"
import { setSearchState } from "../../features/NavBarSlice"
import { useDispatch } from "react-redux"
import { resetPageAndFilter } from "../../features/SearchSlice"

function NavLeft() {
  const dispatch = useDispatch()
  return (
    <div className="flex basis-1/4 cursor-pointer">
      <div onClick={() => dispatch(setSearchState(true))} className="md:hidden">
        <RiSearch2Line />
      </div>
      <div className="hidden md:flex">
        <Link href="/" passHref={true}>
          <span
            onClick={() => dispatch(resetPageAndFilter())}
            className="cursor-pointer font-light text-3xl hover:opacity-70 transition-opacity ease-in-out duration-150 tracking-wide antialiased"
          >
            Movie<span className="font-semibold pl-0.5">HUB</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NavLeft
