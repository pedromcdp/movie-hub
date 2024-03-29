import { useGetSearchTermQuery } from "../services/tmdb"
import List from "../components/Discover/List/List"
import ListItem from "../components/Discover/List_Item/ListItem"
import { RiErrorWarningLine } from "react-icons/ri"
import Pagination from "../components/Discover/Pagination/Pagination"
import { useSelector } from "react-redux"
import { SelectedPage } from "../features/SearchSlice"
import Page from "../layouts/Page"

function SearchPage({ q }) {
  const page = useSelector(SelectedPage)
  const { data } = useGetSearchTermQuery({
    categorie: "multi",
    searchTerm: q,
    page: page,
  })

  return (
    <section className="pt-20 max-w-screen-xl mx-auto min-h-screen">
      <h1 className="text-white tracking-wide text-2xl px-6">
        A pesquisar por: <span className="font-extralight">{q}</span>
      </h1>
      {data?.total_results === 0 ? (
        <div className="flex flex-col space-y-2 items-center py-10 text-white">
          <RiErrorWarningLine className="w-6 h-6 " />
          <h1 className="text-xl tracking-wide font-medium">Sem resultados</h1>
        </div>
      ) : (
        <>
          <List>
            {data?.results.map(item => (
              <ListItem key={item.id} item={item} />
            ))}
          </List>
          <Pagination page={page} totalPages={data?.total_pages} />
        </>
      )}
    </section>
  )
}

SearchPage.getLayout = function getLayout(page) {
  return <Page title={"Movie HUB | resultdos de pesquisa"}>{page}</Page>
}

export default SearchPage

export async function getServerSideProps(context) {
  const { q } = context.query

  if (q === "" || q === undefined) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      q,
    },
  }
}
