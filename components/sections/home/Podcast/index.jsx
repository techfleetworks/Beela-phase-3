import Image from "next/image"

import styles from "./Podcast.module.scss"

import { SectionWrapper } from "../../../layout/SectionWrapper"

export default function BeelasTalkPodcast() {
  return (
    <SectionWrapper padding="main" maxWidth={978}>
      <h2 className="primary-berry text-center">Beela&apos;s Talk Podcast</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.contentText}>
          <p className={`B2 ${styles.paragraph}`}>
            Our podcast is filled with inspiring stories from Swedish immigrants who have broken
            into tech.
          </p>
          <p className={`B2 ${styles.cta}`}>Catch up on all the buzz!</p>

          <div className={styles.iconsWrapper}>
            <a
              href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/podcast-spotify.png"
                height={43}
                width={43}
                alt="Icon for Spotify"
              />
            </a>

            <a
              href="https://podcasts.apple.com/us/podcast/beelas-talk/id1624447735"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/podcast-apple.png"
                height={43}
                width={43}
                alt="Icon for Apple Podcasts"
              />
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81YTE1NDIwOC9wb2RjYXN0L3Jzcw"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/podcast-google.png"
                height={43}
                width={43}
                alt="Icon for Google Podcasts"
              />
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/icons/home-podcast.svg"
            alt="Logo for Beela's Talk Podcast. An illustraion with the text 'Beela's Talk', a bee and the Spotify podcast logo."
            height={257}
            width={469}
            layout="intrinsic"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
