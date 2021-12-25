import { useState, useEffect } from "react"
import Left from "./left"
import Center from "./center"
import Right from "./right"

function NavBar() {
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
    <nav
      className={
        "fixed top-0 w-screen transition duration-500 ease-in-out flex p-6 items-baseline  justify-center text-white z-10 " +
        (showBarBg && "bg-black bg-opacity-80 ")
      }
    >
      <Left />
      <Center />
      <Right />
    </nav>
  )
}

export default NavBar
