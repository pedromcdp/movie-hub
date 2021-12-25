function OverviewContainer({ children }) {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:px-14 md:space-x-5 space-y-5 h-full mx-auto max-w-screen-2xl">
      {children}
    </div>
  )
}

export default OverviewContainer
