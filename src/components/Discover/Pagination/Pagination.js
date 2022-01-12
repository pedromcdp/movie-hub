import PropTypes from "prop-types"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { setNextPage, setPreviousPage } from "../../../features/SearchSlice"

function Pagination({ page, totalPages }) {
  const dispatch = useDispatch()
  return (
    <div className="flex px-6 pb-6 text-white tracking-wide font-medium items-center justify-between text-center">
      <div>
        <p>
          <span className="hidden md:inline-block">Página:</span> {page} de{" "}
          {totalPages}
        </p>
      </div>
      <div className="space-x-4">
        {page >= 2 && (
          <button
            onClick={() => dispatch(setPreviousPage())}
            className="p-2 bg-gray-400 bg-opacity-40 rounded-lg md:w-44"
          >
            <span className="hidden md:block font-medium tracking-wide">
              Anterior
            </span>
            <FiChevronLeft className="block md:hidden" />
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => dispatch(setNextPage())}
            className="p-2 bg-gray-400 bg-opacity-40 rounded-lg md:w-44"
          >
            <span className=" hidden md:block font-medium tracking-wide">
              Seguinte
            </span>
            <FiChevronRight className="block md:hidden" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalPages: PropTypes.number,
}
