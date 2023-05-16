import { LoadingAnimation } from "../../utils/LottieOptions"
import { Main } from "../../template/Main"
import { Meta } from "../../layouts/Meta"
import { useLottie } from "lottie-react"

function Loading() {
  const { View } = useLottie(LoadingAnimation)

  return (
    <Main meta={<Meta title="Movie HUB | Loading" />}>
      <div className="w-screen h-screen bg-slate-850 flex justify-center items-center">
        {View}
      </div>
    </Main>
  )
}

export default Loading
