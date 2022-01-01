import { useRef, useState } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

function CreditsRow({ rowTitle, children }) {
  const scrollRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const onScroll = () => {
    if (scrollRef.current.scrollLeft > 0) {
      setShowLeft(true)
    } else {
      setShowLeft(false)
    }
    if (
      scrollRef.current.scrollLeft ===
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    ) {
      setShowRight(false)
    } else {
      setShowRight(true)
    }
  }

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-medium tracking-wide">{rowTitle}</h1>
      <div className="relative w-full">
        {showLeft && (
          <button
            onClick={() => {
              scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 720
            }}
          >
            <FiChevronLeft className="absolute md:h-8 md:w-8 hover:scale-150 trasition ease-out duration-200 top-[40%] z-10 bg-white text-black text-2xl rounded-full shadow-md" />
          </button>
        )}
        {showRight && (
          <button
            onClick={() => {
              scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 800
            }}
          >
            <FiChevronRight className="absolute md:h-8 md:w-8 hover:scale-150 trasition ease-out duration-200 right-0 top-[40%] z-10 bg-white text-black text-2xl rounded-full shadow-md" />
          </button>
        )}
        <div
          onScroll={onScroll}
          ref={scrollRef}
          className="flex space-x-4 scrollbar-hide overflow-hidden overflow-x-scroll scroll-smooth"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default CreditsRow
