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
    <header
      className={
        "fixed w-screen transition duration-500 ease-in-out flex p-6 items-baseline  justify-center text-white z-30 " +
        (showBarBg && "bg-black bg-opacity-80 ")
      }
    >
      <Left />
      <Center />
      <Right />
    </header>
  )
}

export default NavBar
