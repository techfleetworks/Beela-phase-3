import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer/footer"
import { PageWrapper } from "../components/layout/PageWrapper"
import { SupportBee } from "../components/sections/Donation"
const Donation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beela</title>
        <meta name="BEELA" content="Beela | " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Navbar />
        <SupportBee/>
        <Footer />
      </PageWrapper>
    </div>
  )
}
export default Donation
