import type { NextPage } from "next"
import Head from "next/head"
import { Hero } from "../components/sections/donate/Hero"
import OtherWaysToHelp from "../components/sections/donate/OtherWaysToHelp"
import Donatefaq from "../components/donatefaq/donatefaq"

const Donation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beela</title>
        <meta name="BEELA" content="Beela | " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Donatefaq />
      <OtherWaysToHelp />
    </div>
  )
}
export default Donation
