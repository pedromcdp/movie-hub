import Link from "next/link"
import { CgMenuRightAlt, CgClose } from "react-icons/cg"
import { useMobileNavShow, setMobileNavState } from "../../features/NavBarSlice"
import { resetPageAndFilter } from "../../features/SearchSlice"
import { useDispatch, useSelector } from "react-redux"

function NavRight() {
  const dispatch = useDispatch()
  const MobileNavState = useSelector(useMobileNavShow)
  return (
    <div className="flex basis-1/4 justify-end">
      <div
        className="md:hidden z-20"
        onClick={() => dispatch(setMobileNavState())}
      >
        {MobileNavState ? (
          <CgClose className="absolute right-14 w-10 h-10" />
        ) : (
          <CgMenuRightAlt />
        )}
      </div>
      <ul className="hidden md:flex space-x-6 tracking-wider font-light">
        <Link href="/discover/movie" passHref={true}>
          <li
            onClick={() => dispatch(resetPageAndFilter())}
            className="cursor-pointer hover:opacity-70"
          >
            Filmes
          </li>
        </Link>
        <Link href="/discover/tv" passHref={true}>
          <li
            onClick={() => dispatch(resetPageAndFilter())}
            className="cursor-pointer hover:opacity-70"
          >
            Séries
          </li>
        </Link>
        <Link href="/about" passHref={true}>
          <li
            onClick={() => dispatch(resetPageAndFilter())}
            className="cursor-pointer hover:opacity-70"
          >
            Sobre
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default NavRight
