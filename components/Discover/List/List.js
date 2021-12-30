function List({ children }) {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 py-6 px-6 justify-items-center scroll-smooth overscroll-contain cursor-pointer">
      {children}
    </div>
  )
}

export default List
