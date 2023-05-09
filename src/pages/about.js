import ProfilePic from "../components/About/ProfilePic/ProfilePic"
import Page from "../layouts/Page"

function About() {
  return (
    <section className="min-h-[94.3vh] pt-20 bg-slate-850 flex flex-col items-center space-y-4">
      <ProfilePic />
      <div className="text-white max-w-screen-xl px-6 tracking-wide">
        <h1 className="text-2xl font-medium">Sobre:</h1>
        <p className="text-white">
          Projeto desenvolvido no âmbito da cadeira de Tecnologias e
          Desenvolvimento Web, do Mestrado em Comunicação e Tecnologias Web, da
          Universidade de Aveiro
        </p>
        <p>
          O <span className="font-light tracking-wider">Movie</span>
          <span className="font-semibold tracking-wider">HUB</span> é uma
          plataforma que permite explorar todos os filmes e séries do mundo 🌎!
        </p>
      </div>
    </section>
  )
}

About.getLayout = function getLayout(page) {
  return <Page title={"Movie HUB | Sobre"}>{page}</Page>
}

export default About
