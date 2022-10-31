import type { NextPage } from "next"
import Head from "next/head"
import { Hero } from "../components/sections/donate/Hero"
import OtherWaysToHelp from "../components/sections/donate/OtherWaysToHelp"
import FAQ from "../components/FAQ"
import data from "../mockdata/allfaq.json"
import { SectionWrapper } from "../components/layout/SectionWrapper"
import { Container } from "react-bootstrap"

const Donation: NextPage = () => {
  let faqs = data.donationFaq
  return (
    <div>
      <Head>
        <title>Donate - Beela</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>
      <Hero />
      <FAQ data={faqs} title="Donation FAQs"/>
      <OtherWaysToHelp />
    </div>
  )
}
export default Donation
