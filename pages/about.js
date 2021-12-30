import ProfilePic from "../components/About/ProfilePic/ProfilePic"

function about() {
  return (
    <div className="min-h-[94.3vh] pt-20 bg-slate-850 flex flex-col items-center space-y-4">
      <ProfilePic />
      <section className="text-white max-w-screen-xl px-6 space-y-4 tracking-wide">
        <h1 className="text-2xl font-medium">Sobre:</h1>
        <p className="text-white">
          Projeto desenvolvido no âmbito da cadeira de Tecnologias e
          Desenvolvimento Web do Mestrado em Comunicação e Tecnologias Web da
          Universidade de Aveiro
        </p>
        <p>
          O <span className="font-thin">Movie</span>
          <span className="font-bold">HUB</span> é uma plataforma que permite
          explorar tudo sobre todos os filmes e séries do mundo 🌎!
        </p>
      </section>
    </div>
  )
}

export default about
