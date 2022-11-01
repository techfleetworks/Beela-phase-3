//Next.js component imports
import type { NextPage } from "next"
import Head from "next/head"
import PageWrapper from "../components/layout/PageWrapper/index"

//Components

import Hero from "../components/sections/stay-connected/Hero"
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
      <CommunityLayout
        altText="Inspire, Empower, Repeat written in a fun font"
        blueTitle
        color="SECONDARY_CORNFLOWER"
        imgSource="../images/inspire.jpg"
        newsletter
        reverse
        sectionTitle="Newsletter"
        text="Let’s stay connected. Subscribe to our newsletter to stay up-to-date on resources and events."
      />

      <CommunityLayout
        altText="Beela's Talk Podcast logo"
        blueTitle
        color="PRIMARY_CORAL"
        imgSource="../images/beelas-talk.png"
        icons
        sectionTitle="Podcast"
        text="Our podcast is filled with inspiring stories from Swedish immigrants who have broken into tech. Catch up on all the buzz!"
      />
      <SupportBeela />
    </div>
  )
}

export default StayConnected
