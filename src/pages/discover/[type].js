import FilterSelector from "../../components/Discover/Filter_Row/FilterRow"
import { useRouter } from "next/router"
import { useGetDiscoverQuery } from "../../services/tmdb"
import List from "../../components/Discover/List/List"
import ListItem from "../../components/Discover/List_Item/ListItem"
import Pagination from "../../components/Discover/Pagination/Pagination"
import Loading from "../../components/Loading/Loading"
import { useSelector } from "react-redux"
import { SelectedPage, SelectedFilter } from "../../features/SearchSlice"
import Page from "../../layouts/Page"
import Head from "next/head"

const Discover = () => {
  const {
    query: { type },
  } = useRouter()
  const page = useSelector(SelectedPage)
  const filter = useSelector(SelectedFilter)
  const { data, isFetching, isLoading } = useGetDiscoverQuery({
    type: type,
    sort: filter.value,
    page: page,
  })

  if (isLoading || isFetching) {
    return <Loading />
  }

  return (
    <section className="min-h-screen pt-20 max-w-screen-xl mx-auto">
      <Head>
        <title>Movie HUB | {type === "movie" ? "Filmes" : "Séries"}</title>
      </Head>
      <FilterSelector />
      <List>
        {data?.results.map(item => (
          <ListItem key={item.id} item={item} type={type} />
        ))}
      </List>
      <Pagination page={page} totalPages={data?.total_pages} />
    </section>
  )
}

Discover.getLayout = function getLayout(page) {
  return <Page>{page}</Page>
}

export default Discover
