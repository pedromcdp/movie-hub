import Jumbotron from "../components/Jumbotron/Jumbotron"
import Row from "../components/Row/Row"
import { useGetTrendingTitlesQuery, useGetMovieQuery } from "../services/tmdb"
import Page from "../layouts/Page"
import { Fragment } from "react"

function Home() {
  const rowItems = [
    {
      title: "Nos Cinemas",
      request: useGetMovieQuery({
        type: "movie",
        query: "now_playing",
      }),
    },
    {
      title: "Tendências",
      request: useGetMovieQuery({
        type: "trending",
        query: "all/day",
      }),
    },
    {
      title: "Mais Votados",
      request: useGetMovieQuery({
        type: "movie",
        query: "top_rated",
      }),
    },
    {
      title: "Em Breve",
      request: useGetMovieQuery({
        type: "movie",
        query: "upcoming",
      }),
    },
    {
      title: "Filmes em Destaque",
      request: useGetTrendingTitlesQuery({
        type: "movie",
        time_window: "day",
        page: "1",
      }),
    },
    {
      title: "Séries em Destaque",
      request: useGetTrendingTitlesQuery({
        type: "tv",
        time_window: "day",
        page: "1",
      }),
    },
  ]

  return (
    <Fragment>
      <Jumbotron />
      {rowItems.map(RowItem => (
        <Row
          key={RowItem.title}
          rowTitle={RowItem.title}
          request={RowItem.request}
        />
      ))}
    </Fragment>
  )
}

Home.getLayout = function getLayout(page) {
  return <Page title="Movie HUB">{page}</Page>
}

export default Home
