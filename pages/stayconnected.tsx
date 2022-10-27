//Next.js component imports
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import PageWrapper from "../components/layout/PageWrapper/index"

//Components
import Navbar from "../components/layout/Navbar/index"
// import StayConnected from "../components/sections/stayconnected/hero/index"
import Hero from "../components/sections/stayconnected/hero/hero"
import JoinOurCommunity from "../components/sections/stayconnected/joinourcommunity/join"
import Newsletter from "../components/sections/stayconnected/newsletter/newsletter"
import Podcast from "../components/sections/stayconnected/podcast/podcast"
import Support from "../components/sections/stayconnected/support/support"
import Footer from "../components/layout/Footer/index"

const stayConnected: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Connect with us | Beela</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>
      <Navbar />
      <PageWrapper>
        <Hero />
        <JoinOurCommunity />
        <Newsletter />
        <Podcast />
        <Support />
        {/* <Footer /> */}
      </PageWrapper>
    </div>
  )
}

export default stayConnected
