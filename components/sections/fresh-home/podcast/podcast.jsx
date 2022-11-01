import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"

import styles from "./podcast.module.scss"

export default function BeelasTalkPodcast() {
  return (
    <SectionWrapper padding="main" maxWidth={978}>
      <h2 className="primary-berry text-center">Beela&apos;s Talk Podcast</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.contentText}>
          <p className={`B2 ${styles.paragraph}`}>
            Our podcast is filled with inspiring stories from Swedish immigrants who have broken
            into tech. Catch up on all the buzz!
          </p>
          <p className={`B2 my-5 ${styles.paragraphHidden}`}>Check it out on these platforms:</p>

          <div className={styles.iconsWrapper}>
            <a
              href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/spotify.svg"
                className=""
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
                src="/icons/podcast-apple.svg"
                className=""
                height={43}
                width={43}
                alt="Icon for Apple Podcasts, an icon of a person with two semi circles above them"
              />
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81YTE1NDIwOC9wb2RjYXN0L3Jzcw"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/podcast-google.svg"
                className=""
                height={43}
                width={43}
                alt="Icon for Google Podcasts, an row of five divided lines in a diamond shape"
              />
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/icons/home-podcast.svg"
            alt="The Podcast image for Beela Talk, an illustraion with the text Beela's Talk"
            height={257}
            width={469}
            layout="intrinsic"
            // className={styles.image}
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
