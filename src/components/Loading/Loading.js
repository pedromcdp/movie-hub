import Head from "next/head"
import Lottie from "react-lottie"
import { loading } from "../../utils/lottie_options"

function Loading() {
  return (
    <div className="w-screen h-screen bg-slate-850 flex justify-center items-center">
      <Head>
        <title>Movie HUB | Loading</title>
      </Head>
      <Lottie options={loading} width={200} height={200} />
    </div>
  )
}

export default Loading
