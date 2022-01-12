import Head from "next/head"
import FilterSelector from "../../components/Discover/Filter_Row/FilterRow"
import { useRouter } from "next/router"
import { useGetDiscoverQuery } from "../../services/tmdb"
import { useState } from "react"
import List from "../../components/Discover/List/List"
import ListItem from "../../components/Discover/List_Item/ListItem"
import { filters } from "../../utils/sort_filters"
import Pagination from "../../components/Discover/Pagination/Pagination"
import Loading from "../../components/Loading/Loading"
import { useSelector } from "react-redux"
import { SelectedPage, SelectedFilter } from "../../features/SearchSlice"

function Discover() {
  const router = useRouter()
  const { type } = router.query
  // const [filter, setFilter] = useState(filters[1])
  const page = useSelector(SelectedPage)
  const filter = useSelector(SelectedFilter)
  const { data, isFetching, isLoading } = useGetDiscoverQuery({
    type: type,
    sort: filter.value,
    page: page,
  })
  const pageTitle = type === "movie" ? "Filmes" : "Séries"

  if (isLoading || isFetching) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <div className="bg-slate-850 min-h-screen">
      <Head>
        <title>Movie HUB | {pageTitle}</title>
      </Head>
      <main className="pt-20 max-w-screen-xl mx-auto">
        <FilterSelector pageTitle={pageTitle} />
        <List>
          {data?.results.map(item => (
            <ListItem key={item.id} item={item} type={type} />
          ))}
        </List>
        <Pagination page={page} totalPages={data?.total_pages} />
      </main>
    </div>
  )
}

export default Discover
