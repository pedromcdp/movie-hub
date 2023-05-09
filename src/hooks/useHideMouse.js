import { useState, useEffect } from "react"

export const useHideMouse = () => {
  const [hideMouse, setHideMouse] = useState(false)

  const trasitionMouse = () => {
    if (window.scrollY > 100) {
      setHideMouse(true)
    } else {
      setHideMouse(false)
    }
  }

  useEffect(() => {
    let isSubscribed = true
    if (isSubscribed) {
      window.addEventListener("scroll", trasitionMouse)
    }
    return () => {
      isSubscribed = false
      window.removeEventListener("scroll", trasitionMouse)
    }
  })

  return { hideMouse }
}
