import { Fragment, useState, useEffect } from "react"
import { useGetSearchTermQuery } from "../services/tmdb"
import { motion } from "framer-motion"
import List from "../components/Discover/List/List"
import ListItem from "../components/Discover/List_Item/ListItem"
import { RiErrorWarningLine } from "react-icons/ri"
import Pagination from "../components/Discover/Pagination/Pagination"
import { useSelector } from "react-redux"
import { useSearchSlice } from "../features/SearchSlice"
import Page from "../layouts/Page"

function SearchPage({ q }) {
  const { page } = useSelector(useSearchSlice)
  const [searchTearm, setSearchTerm] = useState(q)
  const { data } = useGetSearchTermQuery({
    categorie: "multi",
    searchTerm: q,
    page: page,
  })

  useEffect(() => {
    setSearchTerm(q)
  }, [q])

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="pt-20 max-w-screen-xl mx-auto min-h-screen"
    >
      <h1 className="text-white tracking-wide text-2xl px-6">
        A pesquisar por: <span className="font-extralight">{searchTearm}</span>
      </h1>
      {data?.total_results === 0 ? (
        <div className="flex flex-col space-y-2 items-center py-10 text-white">
          <RiErrorWarningLine className="w-6 h-6 " />
          <h1 className="text-xl tracking-wide font-medium">Sem resultados</h1>
        </div>
      ) : (
        <Fragment>
          <List>
            {data?.results.map(item => (
              <ListItem key={item.id} item={item} />
            ))}
          </List>
          <Pagination page={page} totalPages={data?.total_pages} />
        </Fragment>
      )}
    </motion.section>
  )
}

SearchPage.getLayout = function getLayout(page) {
  return <Page title={"Movie HUB | resultados de pesquisa"}>{page}</Page>
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
