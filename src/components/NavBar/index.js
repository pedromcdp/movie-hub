import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Left from "./left"
import Center from "./center"
import Right from "./right"
import MobileNav from "./MobileNav"

function NavBar() {
  const [showBarBg, setShowBarBg] = useState(false)
  const trasitionBar = () => {
    if (window.scrollY > 1) {
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
    <motion.nav
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.1,
        ease: "easeIn",
      }}
      className={
        "fixed w-screen transition duration-500 ease-in-out flex p-6 items-baseline justify-center text-white z-30 " +
        (showBarBg &&
          "bg-gradient-to-b from-black/60 from-10% to-black/0 to-95% bg-opacity-80 ")
      }
    >
      <Left />
      <Center />
      <Right />
      <MobileNav />
    </motion.nav>
  )
}

export default NavBar
