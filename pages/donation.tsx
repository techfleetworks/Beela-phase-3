import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/layout/Footer"
import { PageWrapper } from "../components/layout/PageWrapper"

import PaymentForm from "../components/sections/PaymentForm"
const Donation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Navbar />
        <PaymentForm />
        <Footer />
      </PageWrapper>
    </div>
  )
}
export default Donation
