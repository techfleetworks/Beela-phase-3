import Navbar from "./Navbar"
import Footer from "./Footer"
import PageWrapper from "./PageWrapper"

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  )
}
