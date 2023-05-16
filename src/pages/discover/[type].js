import Lottie from "react-lottie"
import { LoadingAnimation } from "../../utils/LottieOptions"
import { useMemo } from "react"
import Head from "next/head"
import FilterSelector from "../../components/Discover/Filter_Row/FilterRow"
import { useGetDiscoverQuery } from "../../services/tmdb"
import List from "../../components/Discover/List/List"
import ListItem from "../../components/Discover/List_Item/ListItem"
import Pagination from "../../components/Discover/Pagination/Pagination"
import { useSelector } from "react-redux"
import { useSearchSlice } from "../../features/SearchSlice"
import Page from "../../layouts/Page"

const Discover = ({ type }) => {
  const { page, filter } = useSelector(useSearchSlice)
  const query = useMemo(
    () => ({ type, sort: filter.value, page }),
    [type, filter, page]
  )
  const { data, isFetching, isLoading } = useGetDiscoverQuery(query)

  return (
    <section className="pt-20 max-w-screen-xl mx-auto">
      <Head>
        {isLoading ?? isFetching ? (
          <title>Movie HUB | Loading</title>
        ) : (
          <title>Movie HUB | {type === "movie" ? "Filmes" : "Séries"}</title>
        )}
      </Head>
      <FilterSelector />
      <List>
        {isLoading ?? isFetching ? (
          <div className="absolute top-20 inset-x-0 flex w-full self-end justify-center items-center">
            <Lottie options={LoadingAnimation} width={200} height={200} />
          </div>
        ) : (
          data?.results.map(item => (
            <ListItem key={item.id} item={item} type={type} />
          ))
        )}
      </List>
      {data && <Pagination page={page} totalPages={data?.total_pages} />}
    </section>
  )
}

Discover.getLayout = function getLayout(page) {
  return <Page>{page}</Page>
}

export default Discover

export async function getServerSideProps(context) {
  const { type } = context.query

  if (type !== "movie" && type !== "tv") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      type,
    },
  }
}
