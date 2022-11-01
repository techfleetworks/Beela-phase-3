//Next.js imports
import type { NextPage } from "next"
import Head from "next/head"

//Strapi imports
// import { useTestimonialsQuery } from "../graphql/generated"
// import { usePostsQuery } from "../graphql/generated"
// import { fieldNameFromStoreName } from "@apollo/client/cache"

//Component imports
import Hero from "../components/sections/fresh-home/hero/hero"
import BlazeAnnouncement from "../components/sections/fresh-home/blaze/blaze"
import Career from "../components/sections/fresh-home/career/career"
import PollinationProgramme from "../components/sections/fresh-home/programmes/programmes"
import Testimonials from "../components/elements/TestimonialCarousel"
import BeelasTalkPodcast from "../components/sections/fresh-home/podcast/podcast"
import { SectionWrapper } from "../components/layout/SectionWrapper"

const Home: NextPage = () => {
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
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
        <script defer src="/node_modules/jquery/dist/jquery.js"></script>
        <script defer src="/node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
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
