import Link from "next/link"
import { CgMenuRightAlt, CgClose } from "react-icons/cg"
import { useMobileNavShow, setMobileNavState } from "../../features/NavBarSlice"
import { resetPageAndFilter } from "../../features/SearchSlice"
import { useDispatch, useSelector } from "react-redux"
import { NavItems } from "../../utils/NavItems"

function NavRight() {
  const dispatch = useDispatch()
  const MobileNavState = useSelector(useMobileNavShow)

  return (
    <div className="flex basis-1/4 justify-end">
      <div
        className="md:hidden z-20 cursor-pointer"
        aria-label={MobileNavState ? "Fechar menu" : "Abrir menu"}
        role="button"
        onClick={() => dispatch(setMobileNavState())}
      >
        {MobileNavState ? (
          <CgClose className="absolute right-14 w-10 h-10" />
        ) : (
          <CgMenuRightAlt />
        )}
      </div>
      <ul className="hidden md:flex space-x-6 tracking-wider font-light">
        {NavItems.map((item, index) => (
          <li
            key={index}
            onClick={() => dispatch(resetPageAndFilter())}
            className="nav-item"
          >
            <Link href={item.path} passHref={true}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavRight
