//Next.js component imports
import type { NextPage } from "next"
import Head from "next/head"

//Components

import Hero from "../components/sections/stay-connected/Hero"
import Events from "../components/sections/stay-connected/Events"
import CommunityLayout from "../components/layout/CommunityLayout"
import SupportBeela from "../components/sections/about/SupportBeela"

const StayConnected: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Connect with us - Beela</title>
        <meta
          name="description"
          content="Are you new to Sweden and wanting to switch to a career in tech? We want to connect with you and help support your journey into tech! Join our Slack community today!"
        />
      </Head>
      <Hero />
      <Events />
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
        altText="Logo for Beela's Talk Podcast. An illustraion with the text 'Beela's Talk', a bee and the Spotify podcast logo."
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
