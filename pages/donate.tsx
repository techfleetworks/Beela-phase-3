import type { NextPage } from "next"
import Head from "next/head"
import { Hero } from "../components/sections/donate/Hero"
import OtherWaysToHelp from "../components/sections/donate/OtherWaysToHelp"
import Donatefaq from "../components/donatefaq/donatefaq"

const Donation: NextPage = () => {
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
      <Donatefaq />
      <OtherWaysToHelp />
    </div>
  )
}
export default Donation
