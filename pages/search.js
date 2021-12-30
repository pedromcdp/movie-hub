import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Head from "next/head"
import { useRouter } from "next/router"
import { useGetSearchTermQuery } from "../services/tmdb"
import List from "../components/Discover/List/List"
import ListItem from "../components/Discover/List_Item/ListItem"
import { RiErrorWarningLine } from "react-icons/ri"
import Pagination from "../components/Discover/Pagination/Pagination"

function SearchPage() {
  const router = useRouter()
  const { q } = router.query
  const [page, setPage] = useState(1)
  const { data, isFetching, isLoading } = useGetSearchTermQuery({
    categorie: "multi",
    searchTerm: q,
    page: page,
  })

  useEffect(() => {
    if (q === undefined) {
      router.push("/")
    }
  })

  return (
    <div className="bg-slate-850">
      <Head>
        <title>MovieHUB | resultdos de pesquisa</title>
      </Head>
      <NavBar />
      <main className="pt-20 max-w-screen-xl mx-auto min-h-screen">
        <h1 className="text-white tracking-wide text-2xl px-6">
          A pesquisar por: <span className="font-extralight">{q}</span>
        </h1>
        {data?.total_results === 0 ? (
          <div className="flex flex-col space-y-2 items-center py-10 text-white">
            <RiErrorWarningLine className="w-6 h-6 " />
            <h1 className="text-xl tracking-wide font-medium">
              Sem resultados
            </h1>
          </div>
        ) : (
          <>
            <List>
              {data?.results.map(item => (
                <ListItem key={item.id} item={item} />
              ))}
            </List>
            <Pagination
              setPage={setPage}
              page={page}
              totalPages={data?.total_pages}
            />
          </>
        )}
      </main>
    </div>
  )
}

export default SearchPage
