const SearchVariants = () => {
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches

  return isSmallScreen
    ? {
        initial: {},
        animate: {
          y: 0,
          width: "100%",
          backgroundColor: "#fff",
          translateX: "0%",
        },
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }
    : {
        initial: {
          y: -55,
          width: "18rem",
          backgroundColor: "rgb(203 213 225 / 0.4)",
          transformOrigin: "top",
          left: "200%",
          translateX: "43%",
        },
        animate: {
          y: 0,
          width: "100%",
          backgroundColor: "#fff",
          translateX: "0%",
        },
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }
}

export { SearchVariants }
