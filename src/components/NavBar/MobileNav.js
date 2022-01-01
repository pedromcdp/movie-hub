import Link from "next/link"
import { setMobileNavState } from "../../features/NavBarSlice"
import { useDispatch } from "react-redux"

function MobileNav() {
  const dispatch = useDispatch()
  return (
    <ul className="absolute top-0 left-0 right-0 h-screen bg-black bg-opacity-90 flex flex-col font-light tracking-wider space-y-10 text-3xl uppercase justify-center items-center z-10">
      <Link href="/discover/movie" passHref={true}>
        <li
          className="cursor-pointer"
          onClick={() => dispatch(setMobileNavState())}
        >
          Filmes
        </li>
      </Link>
      <Link href="/discover/tv" passHref={true}>
        <li
          className="cursor-pointer"
          onClick={() => dispatch(setMobileNavState())}
        >
          Séries
        </li>
      </Link>
      <Link href="/about" passHref={true}>
        <li
          className="cursor-pointer"
          onClick={() => dispatch(setMobileNavState())}
        >
          Sobre
        </li>
      </Link>
    </ul>
  )
}

export default MobileNav
