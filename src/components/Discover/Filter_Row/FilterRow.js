import React from "react"
import { Listbox, Transition } from "@headlessui/react"
import { filters } from "../../../utils/sort_filters"
import PropTypes from "prop-types"
import { FiChevronDown } from "react-icons/fi"
import { useSelector, useDispatch } from "react-redux"
import { SelectedFilter, setFilter } from "../../../features/SearchSlice"

function FilterSelector({ pageTitle }) {
  const dispatch = useDispatch()
  const filter = useSelector(SelectedFilter)

  function updateFilter(filter) {
    dispatch(setFilter(filter))
  }

  return (
    <div className="px-6 flex justify-between">
      <h1 className="font-medium text-white tracking-wide text-4xl">
        {pageTitle}
      </h1>
      <div className="relative flex flex-col self-center">
        <Listbox value={filter.name} onChange={updateFilter}>
          {({ open }) => (
            <>
              <Listbox.Button
                className={
                  "flex space-x-1 items-center justify-center z-20 bg-slate-300 bg-opacity-80 text-white py-2 px-4 font-medium tracking-wide min-w-[16rem] " +
                  (open
                    ? "rounded-t-lg border-b border-gray-300 border-opacity-40"
                    : "rounded-lg")
                }
              >
                <span className="hidden md:inline-block">Filtro:</span>{" "}
                <span className="font-light">{filter.name}</span>{" "}
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
                  className="absolute z-20 w-full bg-slate-300 bg-opacity-80 rounded-b-lg divide-y divide-gray-300 divide-opacity-40 text-white font-medium cursor-pointer"
                >
                  {filters.map(filter => (
                    <Listbox.Option
                      key={filter.value}
                      value={filter}
                      className="py-1 px-2 hover:bg-slate-400 last:rounded-b-lg"
                    >
                      {filter.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </>
          )}
        </Listbox>
      </div>
    </div>
  )
}

export default FilterSelector

FilterSelector.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  filter: PropTypes.objectOf(PropTypes.string),
  setFilter: PropTypes.func,
}
