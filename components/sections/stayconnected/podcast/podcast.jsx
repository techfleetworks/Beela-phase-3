import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./podcast.module.scss"

export default function podcast() {
  return (
    <SectionWrapper color="PRIMARY_CORAL" padding="none">
      <div className={styles.sectionContainer}>
        <div className={styles.imgContainer}>
          <Image
            height={387}
            width={600}
            className={styles.img}
            src="icons/svg_beela__s_podcast_sticker_illustration_mesa_de_trabajo_1.svg"
            alt="placeholder"
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className="primary-berry" style={{marginTop: "4rem", marginBottom: "2rem"}} >Podcast</h3>
          <p className="B1 mb-4" style={{lineHeight: "170%"}}>
            Our podcast is filled with inspiring stories from Swedish immigrants who have broken into tech.
            Catch up on all the buzz!
          </p>

          <div className={styles.iconsWrapper}>
            <a
              href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/spotify.svg"
                className=""
                height={50}
                width={50}
                alt="Icon for Apple Podcasts, an icon of a person with two semi circles above them"
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
                height={50}
                width={50}
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
                height={50}
                width={50}
                alt="Icon for Google Podcasts, an row of five divided lines in a diamond shape"
              />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
