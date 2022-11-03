import type { NextPage } from "next"
import Head from "next/head"

import data from "../mockdata/pollination.json"
import faqs from "../mockdata/faq.json"

import Hero from "../components/sections/pollination-mentor/Hero"
import ExpectCards from "../components/sections/pollination-mentor/ExpectCards"
import FAQ from "../components/elements/FAQ"
import PollinationCarousel from "../components/elements/PollinationCarousel"
import JoinTheCommunity from "../components/sections/pollination-mentor/JoinTheCommunity"

const PollinationForMentors: NextPage = () => {
  let testimonials = data.mentor.testimonials
  let mentorFaqs = faqs.mentorFaq

  return (
    <div>
      <Head>
        <title>Become a Mentor - Beela</title>
        <meta
          name="description"
          content="Are you a tech professional that wants to use your experience to help immigrant women and non-binary people in Sweden get into tech? Our Pollination Mentoring Program provides a space for you to help empower mentees enter a career in tech! We offer our mentors the opportunity to refine their leadership skills, networking opportunities with other tech professionals and exclusive Slack groups for mentors."
        />
      </Head>
      <Hero />
      <ExpectCards />
      <FAQ data={mentorFaqs} title="Frequently Asked Questions" />
      <PollinationCarousel color="SECONDARY_CORNFLOWER" data={testimonials} />
      <JoinTheCommunity />
    </div>
  )
}

export default PollinationForMentors
