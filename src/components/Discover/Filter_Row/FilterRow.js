import { useCallback, useMemo, Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { SortFilters } from "../../../utils/SortFilters"
import { FiChevronDown } from "react-icons/fi"
import { useSelector, useDispatch } from "react-redux"
import { setFilter, useSearchSlice } from "../../../features/SearchSlice"
import { useRouter } from "next/router"

function FilterSelector() {
  const dispatch = useDispatch()
  const { filter } = useSelector(useSearchSlice)

  const updateFilter = useCallback(
    filter => {
      dispatch(setFilter(filter))
    },
    [dispatch]
  )
  const {
    query: { type },
  } = useRouter()

  const sortedFilters = useMemo(() => {
    return SortFilters
  }, [])

  return (
    <div className="px-6 flex justify-between">
      <h1 className="font-medium text-white tracking-wide text-4xl">
        {type === "movie" ? "Filmes" : "Séries"}
      </h1>
      <div className="relative z-10 flex flex-col self-center">
        <Listbox value={filter.name} onChange={updateFilter}>
          {({ open }) => (
            <Fragment>
              <Listbox.Button
                className={
                  "flex space-x-1 items-center justify-center bg-slate-300 bg-opacity-40 text-white h-10 px-4 font-medium tracking-wide min-w-[16rem] " +
                  (open
                    ? "rounded-t-lg border-b border-gray-300 border-opacity-40"
                    : "rounded-lg")
                }
              >
                <span className="hidden md:inline-block mt-1">Filtro:</span>{" "}
                <span className="font-light mt-1">{filter.name}</span>{" "}
                <FiChevronDown />
              </Listbox.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute z-40 w-full bg-gray-600 rounded-b-lg divide-y divide-gray-300 divide-opacity-40 text-white font-medium cursor-pointer py-1"
                >
                  {sortedFilters.map(filter => (
                    <Listbox.Option
                      key={filter.value}
                      value={filter}
                      className="px-2 pt-1.5 pb-0.5 hover:bg-slate-400 last:rounded-b-lg"
                    >
                      {filter.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Fragment>
          )}
        </Listbox>
      </div>
    </div>
  )
}

export default FilterSelector
