import React from "react"

function RowHeader({ rowTitle }) {
  return (
    <div className="flex justify-between items-center pr-6 md:pr-14">
      <h1 className="text-3xl">{rowTitle}</h1>
      <button>ver mais</button>
    </div>
  )
}

export default RowHeader
