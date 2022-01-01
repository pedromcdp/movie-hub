function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex px-6 pb-6 text-white tracking-wide font-medium items-center justify-between text-center">
      <div>
        <p>
          Página: {page} de {totalPages}
        </p>
      </div>
      <div className="space-x-4">
        {page >= 2 && (
          <button
            onClick={() => setPage(page - 1)}
            className="p-2 bg-gray-400 bg-opacity-40 rounded-lg w-44"
          >
            <span className="font-medium tracking-wide">Anterior</span>
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="p-2 bg-gray-400 bg-opacity-40 rounded-lg w-44"
          >
            <span className="font-medium tracking-wide">Seguinte</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
