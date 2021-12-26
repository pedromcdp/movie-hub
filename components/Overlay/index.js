function Overlay({ children }) {
  return (
    <div className="absolute bg-jumbo-overlay bg-cover bg-no-repeat bg-center h-full w-full">
      {children}
    </div>
  )
}

export default Overlay
