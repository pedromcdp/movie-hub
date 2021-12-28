import Head from "next/head"
import NavBar from "../../components/NavBar"
import FilterSelector from "../../components/Discover/Filter_Row"
import { useRouter } from "next/router"
import { useGetDiscoverQuery } from "../../services/tmdb"
import { useState } from "react"
import ListItem from "../../components/Discover/List_Item"
import List from "../../components/Discover/List"
import { filters } from "../../utils/sort_filters"

function Discover() {
  const router = useRouter()
  const { type } = router.query
  const [filter, setFilter] = useState(filters[1])
  const { data } = useGetDiscoverQuery({ type: type, sort: filter.value })
  const pageTitle = type === "movie" ? "Filmes" : "Séries"

  return (
    <div className="bg-slate-850 min-h-screen">
      <Head>
        <title>MovieHUB | {pageTitle}</title>
      </Head>
      <NavBar />
      <main className="pt-20 max-w-screen-xl mx-auto">
        <FilterSelector
          pageTitle={pageTitle}
          filter={filter}
          setFilter={setFilter}
        />
        <List>
          {data?.results.map(item => (
            <ListItem key={item.id} item={item} type={type} />
          ))}
        </List>
      </main>
    </div>
  )
}

export default Discover
