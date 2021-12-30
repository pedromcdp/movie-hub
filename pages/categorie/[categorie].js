import Head from "next/head"
import { useRouter } from "next/router"
import NavBar from "../../components/NavBar"
// import List from "../../components/Discover/List/List"
// import ListItem from "../../components/Discover/List_Item/ListItem"
// import Loading from "../../components/Loading/Loading"

function CategorieResults() {
  const router = useRouter()
  //   const { content_type, id, request } = router.query
  //   const { data, isLoading, isFetching } = request

  //   if (isLoading || isFetching) {
  //     return <Loading />
  //   }

  return (
    <div className="bg-slate-850 h-screen">
      <Head>
        <title>{`Movie HUB | `}</title>
      </Head>
      <main>
        <NavBar />
      </main>
    </div>
  )
}

export default CategorieResults
