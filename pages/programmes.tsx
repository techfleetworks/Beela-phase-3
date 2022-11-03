import type { NextPage } from "next"
import Head from "next/head"

import Hero from "../components/sections/programmes/Hero"
import ApprenticeshipProgramme from "../components/sections/programmes/ApprenticeshipProgramme"
const Programmes: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Programmes - Beela</title>
        <meta
          name="description"
          content="Our Pollination Mentoring Programmne connects immigrant women and non-binary people in Sweden to tech. We offer different programmes to fit your needs depending on where you are in your journey. Apply for our Pollination Mentorship Program today!"
        />
      </Head>
      <Hero />
      <ApprenticeshipProgramme />
    </div>
  )
}
export default Programmes
