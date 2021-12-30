import Link from "next/link"

function RowHeader({ rowTitle }) {
  return (
    <div className="flex justify-between items-center pr-6 md:pr-14">
      <h1 className="text-3xl">{rowTitle}</h1>
      <Link href={`/categorie/${rowTitle}`} passHref={true}>
        <button>ver mais</button>
      </Link>
    </div>
  )
}

export default RowHeader
