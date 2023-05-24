import { LoadingAnimation } from "../../utils/LottieOptions"
import { useMemo } from "react"
import Head from "next/head"
import { FilterRow } from "../../components/Discover"
import { useGetDiscoverQuery } from "../../services/tmdb"
import ListItem from "../../components/Discover/List_Item/ListItem"
import Pagination from "../../components/Discover/Pagination/Pagination"
import { useSelector } from "react-redux"
import { useSearchSlice } from "../../features/SearchSlice"
import { Page } from "../../layouts"
import { useLottie } from "lottie-react"

const Discover = ({ type }) => {
  const { page, filter } = useSelector(useSearchSlice)
  const query = useMemo(
    () => ({ type, sort: filter.value, page }),
    [type, filter, page]
  )
  const { data, isFetching, isLoading } = useGetDiscoverQuery(query)
  const { View } = useLottie(LoadingAnimation)

  return (
    <section className="pt-20 max-w-screen-xl mx-auto">
      <Head>
        {isLoading ?? isFetching ? (
          <title>Movie HUB | Loading</title>
        ) : (
          <title>Movie HUB | {type === "movie" ? "Filmes" : "Séries"}</title>
        )}
      </Head>
      <FilterRow />
      <ul id="discover-list" className="list">
        {isLoading ?? isFetching ? (
          <div className="absolute top-20 inset-x-0 flex w-full self-end justify-center items-center">
            {View}
          </div>
        ) : (
          data?.results.map(item => (
            <ListItem key={item.id} item={item} type={type} />
          ))
        )}
      </ul>
      {data && <Pagination page={page} totalPages={data?.total_pages} />}
    </section>
  )
}

Discover.getLayout = function getLayout(page) {
  return <Page>{page}</Page>
}

export default Discover

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export async function getStaticProps(context) {
  const { type } = context.params

  if (type !== "movie" && type !== "tv") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { type },
  }
}
