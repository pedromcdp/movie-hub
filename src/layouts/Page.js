import { Main } from "../template/Main"
import { Meta } from "./Meta"

const Page = ({ title, children }) => (
  <Main meta={<Meta title={title} />}>{children}</Main>
)

export default Page
