import React from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

function NavButtons() {
  return (
    <div className="absolute h-full w-full top-0 right-0 flex items-center justify-between">
      <FiChevronLeft className="bg-white text-black text-2xl rounded-full shadow-md" />
      <FiChevronRight className="text-2xl shadow-md" />
    </div>
  )
}

export default NavButtons
