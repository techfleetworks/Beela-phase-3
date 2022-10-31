//Next.js component imports
import type { NextPage } from "next"
import Head from "next/head"
import PageWrapper from "../components/layout/PageWrapper/index"

//Components

import Hero from "../components/sections/stay-connected/Hero"
import JoinOurCommunity from "../components/sections/stay-connected/JoinOurCommunity"
import CommunityLayout from "../components/layout/CommunityLayout"
import SupportBeela from "../components/sections/about/SupportBeela"

const StayConnected: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Connect with us | Beela</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>

      <Hero />
      <JoinOurCommunity />
      <SupportBeela />
    </div>
  )
}

export default StayConnected
