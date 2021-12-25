import React, { useEffect, useRef } from "react"
import { RiSearch2Line } from "react-icons/ri"
import { useClickOutside } from "@mantine/hooks"
import { useDispatch } from "react-redux"
import { setState } from "../../features/search"

function Search({ setSearchBarState }) {
  const dispatch = useDispatch()
  const searchInput = useRef(null)

  const ref = useClickOutside(
    () => dispatch(setState(false)),
    ["mouseup", "touchend"]
  )

  useEffect(() => {
    searchInput.current.focus()
  })

  return (
    <div className="fixed w-screen h-screen bg-black bg-opacity-40 z-40 ">
      <div className="relative max-w-screen-sm mx-auto flex justify-center">
        <div ref={ref} className="mt-20 w-5/6 mx-auto">
          <div className="flex shadow-lg items-center bg-white rounded-lg p-4 space-x-2">
            <button className="flex-none">
              <RiSearch2Line className="text-black w-5 h-5" />
            </button>
            <input
              className="flex-auto outline-none pt-1 bg-white text-black tracking-wide font-light rounded-lg text-lg"
              type="text"
              placeholder="Pesquise..."
              ref={searchInput}
            />
            <div
              onClick={() => setSearchBarState(false)}
              className="cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
