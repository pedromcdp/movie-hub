import Link from "next/link"
import { RiSearch2Line } from "react-icons/ri"
import { setSearchState } from "../../features/NavBarSlice"
import { useDispatch } from "react-redux"

function NavLeft() {
  const dispatch = useDispatch()
  return (
    <div className="flex basis-1/4 cursor-pointer">
      <div onClick={() => dispatch(setSearchState(true))} className="md:hidden">
        <RiSearch2Line />
      </div>
      <div className="hidden md:flex">
        <Link href="/" passHref={true}>
          <span className="cursor-pointer font-light text-3xl antialiased hover:opacity-70">
            Movie<span className="font-bold">HUB</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NavLeft
