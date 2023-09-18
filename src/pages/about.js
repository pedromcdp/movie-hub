import { motion } from "framer-motion"
import Image from "next/image"
import { Page } from "../layouts"

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[94.3vh] pt-20 bg-slate-850 flex flex-col items-center space-y-4"
    >
      <section className="flex flex-col items-center">
        <div className="w-40 h-40 bg-gradient-to-t from-slate-300 to-white shadow-xl rounded-full relative">
          <Image
            src="/assets/profile.png"
            fill={true}
            alt="foto de perfil"
            sizes="160px"
            unoptimized
            priority
          />
        </div>
        <p className="mt-4 text-white font-medium tracking-wide">
          Pedro Miguel Pereira
        </p>
        <p className=" text-white font-light tracking-wide">@pedromcdp</p>
      </section>
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
    </motion.section>
  )
}

About.getLayout = function getLayout(page) {
  return <Page title={"Movie HUB | Sobre"}>{page}</Page>
}

export default About
