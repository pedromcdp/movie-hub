import { useState, useEffect } from "react"
import Left from "./left"
import Center from "./center"
import Right from "./right"
import MobileNav from "./MobileNav"
import { Transition } from "@headlessui/react"
import { useMobileNavShow } from "../../features/NavBarSlice"
import { useSelector } from "react-redux"

function NavBar() {
  const [showBarBg, setShowBarBg] = useState(false)
  const MobileNavState = useSelector(useMobileNavShow)
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
    <header
      className={
        "fixed w-screen transition duration-500 ease-in-out flex p-6 items-baseline  justify-center text-white z-30 " +
        (showBarBg && "bg-black bg-opacity-80 ")
      }
    >
      <Left />
      <Center />
      <Right />
      <Transition
        show={MobileNavState}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <MobileNav />
      </Transition>
    </header>
  )
}

export default NavBar
