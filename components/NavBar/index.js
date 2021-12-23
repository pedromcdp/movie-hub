import { useState, useEffect } from "react"
import Link from "next/link"
import { RiSearch2Line } from "react-icons/ri"
import { CgMenuRightAlt } from "react-icons/cg"
import { useOs } from "@mantine/hooks"

function Index({ setSearchBarState }) {
  const os = useOs()
  const [showBarBg, setShowBarBg] = useState(false)

  const trasitionBar = () => {
    if (window.scrollY > 100) {
      setShowBarBg(true)
    } else {
      setShowBarBg(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", trasitionBar)
    return () => {
      window.removeEventListener("scroll", trasitionBar)
    }
  }, [])
  return (
    <div
      className={
        "fixed top-0 w-screen z-10 transition duration-500 ease-in-out " +
        (showBarBg && "bg-black bg-opacity-80 ")
      }
    >
      <div className="flex p-6 items-baseline  justify-center text-white z-40">
        <div className="flex basis-1/4 cursor-pointer">
          <div onClick={() => setSearchBarState(true)} className="md:hidden">
            <RiSearch2Line />
          </div>
          <div className="hidden md:flex">
            <Link href="/" passHref={true}>
              <span className="cursor-pointer font-light text-3xl antialiased">
                Movie<span className="font-bold">HUB</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex basis-2/4 justify-center">
          <div
            onClick={() => setSearchBarState(true)}
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
              <h1 className="cursor-pointer font-light text-3xl antialiased">
                Movie<span className="font-bold">HUB</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex basis-1/4 justify-end">
          <div className="md:hidden">
            <CgMenuRightAlt />
          </div>
          <div className="hidden md:flex space-x-6 tracking-wider font-light cursor-pointer">
            <Link href="/filmes" passHref={true}>
              <h1 className="hover:opacity-70">Filmes</h1>
            </Link>
            <Link href="/series" passHref={true}>
              <h1 className="hover:opacity-70">Séries</h1>
            </Link>
            <Link href="/sobre" passHref={true}>
              <h1 className="hover:opacity-70">Sobre</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
