//Next.js component imports
import type { NextPage } from "next"
import Image from "next/image"
import Head from "next/head"

import ThankYouMessage from "../components/sections/ThankYou"

const ThankYou: NextPage = () => {
  return (
    <div className="thank-you_page">
      <Head>
        <title>Thank you - from Beela</title>
        <meta
          name="description"
          content="Your donation will help us continue to support and empower immigrant women and non-binary people in Sweden to begin their careers in tech. You truly make a difference and we are extremely grateful!"
        />
      </Head>
      <ThankYouMessage />
    </div>
  )
}

export default ThankYou
