import Head from "next/head"
import NavBar from "../components/NavBar"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Row from "../components/Row/Row"
import { useGetTrendingTitlesQuery, useGetMovieQuery } from "../services/tmdb"

export default function Home() {
  return (
    <div className="bg-slate-800">
      <Head>
        <title>Movie HUB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black bg-opacity-25">
        <NavBar />
        <Jumbotron />
        <Row
          rowTitle="Nos cinemas"
          request={useGetMovieQuery({
            content_type: "movie",
            query: "now_playing",
          })}
        />
        <Row
          rowTitle="Tendências"
          request={useGetMovieQuery({
            content_type: "movie",
            query: "popular",
          })}
        />
        <Row
          rowTitle="Brevemente"
          request={useGetMovieQuery({
            content_type: "movie",
            query: "upcoming",
          })}
        />
        <Row
          rowTitle="Mais Votados"
          request={useGetMovieQuery({
            content_type: "movie",
            query: "top_rated",
          })}
        />
        <Row
          rowTitle="Filmes em Destaque"
          request={useGetTrendingTitlesQuery({
            type: "movie",
            time_window: "day",
            page: "1",
          })}
        />
        <Row
          rowTitle="Séries em Destaque"
          request={useGetTrendingTitlesQuery({
            type: "tv",
            time_window: "day",
            page: "1",
          })}
        />
      </main>
    </div>
  )
}
