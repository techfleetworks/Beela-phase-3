//Next.js component imports
import type { NextPage } from "next"
import Head from "next/head"

//Component imports
import { PriNotice } from "../components/sections/gdpr"

const Privacy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Privacy Statement - Beela</title>
        <meta
          name="description"
          content="At Beela we are committed to protecting and respecting your privacy."
        />
      </Head>
      <PriNotice />
    </div>
  )
}
export default Privacy
