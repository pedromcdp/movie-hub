import Lottie from "react-lottie"
import { LoadingAnimation } from "../../utils/LottieOptions"
import { Main } from "../../template/Main"
import { Meta } from "../../layouts/Meta"

function Loading() {
  return (
    <Main meta={<Meta title="Movie HUB | Loading" />}>
      <div className="w-screen h-screen bg-slate-850 flex justify-center items-center">
        <Lottie options={LoadingAnimation} width={200} height={200} />
      </div>
    </Main>
  )
}

export default Loading
