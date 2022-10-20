import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer/footer"
import { PageWrapper } from "../components/layout/PageWrapper"
import { Hero } from "../components/sections/donate/Hero"
import OtherWaysToHelp from "../components/sections/donate/OtherWaysToHelp";
import Donatefaq from "../components/sections/donate/Donatefaq"


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
        <Hero />
        <Donatefaq/>
        <OtherWaysToHelp />
        <Footer />
      </PageWrapper>
    </div>
  )
}
export default Donation
