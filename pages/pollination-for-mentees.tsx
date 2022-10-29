import type { NextPage } from "next"
import Head from "next/head"

import data from "../mockdata/pollination.json"
import Hero from "../components/sections/pollination-mentee/Hero"
import ExpectCards from "../components/sections/pollination-mentee/ExpectCards"
import PollinationCarousel from "../components/elements/PollinationCarousel"
import CommunityAnnouncement from "../components/sections/pollination-mentee/CommunityAnnouncement"
import CommunityLayout from "../components/layout/CommunityLayout"

const PollinationForMentees: NextPage = () => {
  let testimonials = data.mentee.testimonials

  return (
    <div>
      <Head>
        <title>Become a Mentee - Beela</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>

      <Hero />
      <ExpectCards />
      <PollinationCarousel color="PRIMARY_CORAL" data={testimonials} />
      <CommunityAnnouncement />
      <CommunityLayout
        altText="Beela's Talk Podcast logo"
        buttonTitle="Listen to Beela’s Talk"
        color="VIOLET_9"
        href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786&nd=1"
        imgSource="../icons/home-podcast.svg"
        reverse={false}
        sectionTitle="Podcast"
        text="Audio inspiration is a click away. Absorb unique insights around diversity, equity, and inclusion in the tech industry."
      />
      <CommunityLayout
        altText="Inspire, Empower, Repeat written in a fun font"
        buttonTitle="Sign Up"
        color={"VIOLET_8"}
        href=""
        imgSource="../images/inspire.svg"
        reverse
        sectionTitle="Newsletter"
        text="Let’s stay connected. Subscribe to our newsletter to stay up-to-date on resources and events."
      />
      <CommunityLayout
        altText="Screenshot of Beela's Slack workspace"
        buttonTitle="Join Slack"
        color="VIOLET_9"
        href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email"
        imgSource="../images/slack-screenshot.svg"
        reverse={false}
        sectionTitle="Slack"
        text="Ask questions, network, and stay up-to-date about upcoming events. We’re an inclusive bunch, and we’d love to have you!"
      />
    </div>
  )
}

export default PollinationForMentees
