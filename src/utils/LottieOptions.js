import animationData from "../animations/jumbotronLoader.json"

const LoadingAnimation = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
  style: {
    width: "15rem",
    height: "15rem",
  },
}

export { LoadingAnimation }
