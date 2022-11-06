import type { NextPage } from "next"
import Head from "next/head"

import faqs from "../mockdata/faq.json"

import { SectionWrapper } from "../components/layout/SectionWrapper"
import { Hero } from "../components/sections/donate/Hero"
import FAQ from "../components/elements/FAQ"
import OtherWaysToHelp from "../components/sections/donate/OtherWaysToHelp"
import TestimonialCarousel from "../components/elements/TestimonialCarousel"

const Donation: NextPage = () => {
  let donateFaqs = faqs.donationFaq

  return (
    <div>
      <Head>
        <title>Donate - Beela</title>
        <meta
          name="description"
          content="Your gift will help guide immigrant women and non-binary people seeking to enter into a tech career in Sweden. We appreciate all support - whether it's through donations, corporate sponsorships, providing meeting spaces, job or networking opportunities. Support Beela today!"
        />
      </Head>
      <Hero />
      <FAQ color="TRUE_WHITE" data={donateFaqs} title="Donation FAQs" />
      <OtherWaysToHelp />
      <SectionWrapper>
        <TestimonialCarousel />
      </SectionWrapper>
    </div>
  )
}
export default Donation
