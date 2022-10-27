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
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>
      <Hero />
      <ApprenticeshipProgramme />
    </div>
  )
}
export default Programmes
