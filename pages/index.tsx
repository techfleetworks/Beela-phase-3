//Next.js imports
import type { NextPage } from "next"
import Head from "next/head"

//Strapi imports
// import { useTestimonialsQuery } from "../graphql/generated"
// import { usePostsQuery } from "../graphql/generated"
// import { fieldNameFromStoreName } from "@apollo/client/cache"

//Component imports
import Hero from "../components/sections/home/Hero"
import BlazeAnnouncement from "../components/sections/home/Blaze"
import Career from "../components/sections/home/Career/Index"
import PollinationProgramme from "../components/sections/home/Programmes"
import Testimonials from "../components/elements/TestimonialCarousel"
import BeelasTalkPodcast from "../components/sections/home/Podcast"
import { SectionWrapper } from "../components/layout/SectionWrapper"

const Home: NextPage = () => {
  //Code for Strapi integration / likely will have to be redone
  // const { data, error, loading } = useTestimonialsQuery()

  // if (loading) return <main className={styles.main}>Loading...</main>
  // if (error) return <main className={styles.main}>{error.message}</main>

  // From here, { data } can be referenced
  return (
    <div>
      <Head>
        <title>Beela - empowering women in tech</title>
        <meta
          name="description"
          content="Beela is an inclusive and welcoming community for immigrant women and non-binary people in Sweden who want to start new careers in tech."
        />
      </Head>

      <Hero />
      <BlazeAnnouncement />
      <Career />
      <PollinationProgramme />
      <SectionWrapper color="SECONDARY_CORNFLOWER">
        <h2 className="text-center">They did it - and so can you!</h2>
        <p className="B1 text-center">
          We are proud of our podcast guests who have started their tech careers in Sweden.
        </p>
        <Testimonials />
      </SectionWrapper>
      <BeelasTalkPodcast />
    </div>
  )
}

export default Home
