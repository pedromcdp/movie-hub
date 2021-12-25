import Link from "next/link"
import { CgMenuRightAlt } from "react-icons/cg"

function NavRight() {
  return (
    <div className="flex basis-1/4 justify-end">
      <div className="md:hidden">
        <CgMenuRightAlt />
      </div>
      <ul className="hidden md:flex space-x-6 tracking-wider font-light cursor-pointer">
        <Link href="/filmes" passHref={true}>
          <li className="hover:opacity-70">Filmes</li>
        </Link>
        <Link href="/series" passHref={true}>
          <li className="hover:opacity-70">Séries</li>
        </Link>
        <Link href="/sobre" passHref={true}>
          <li className="hover:opacity-70">Sobre</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavRight
