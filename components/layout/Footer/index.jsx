import React from "react"
import styles from "./Footer.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import spotify from "../../../public/icons/spotify.svg"
import linkedin from "../../../public/icons/linkedin.svg"
import instagram from "../../../public/icons/instagram.svg"
import slack from "../../../public/icons/slack.svg"
import partner1 from "../../../public/icons/Partner1.svg"
import techfleet from "../../../public/icons/techfleet.svg"
import partner2 from "../../../public/icons/Partner2.svg"
import arrowright from "../../../public/icons/arrow-right.svg"
//mailchimp needed the below imports
import { useState } from "react"
import axios from "axios"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const router = useRouter() // to set active links

  const subscribe = async () => {
    setState("LOADING")
    setErrorMessage(null)

    try {
      const response = await axios.post("/api/newsletter", { email })
      setState("SUCCESS")
    } catch (e) {
      setErrorMessage(e.response.data.error)
      setState("ERROR")
    }
  }

  return (
    <footer className={`container-fluid ${styles.footer}`}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.newsletterContainer}>
            <h4 className="primary-berry">Sign Up for Beelas Newsletter</h4>
            {/* <input type="email" placeholder="Enter your email here    ->" className={`B2 ${styles.input} mb-4 w-75`} /> */}

            {/* <div className='input-group'>
                          <input type="email" placeholder="Enter email "  onChange={(e)=> setEmail(e.target.value)} value={email}/>
                          <button type="button"  disabled={state == "LOADING"} onClick={subscribe}>
                              Subscribe
                          </button>
                          {state == "ERROR" &&(<p>this is error message</p>)}
                          {state == "SUCCESS" &&(<p>this is success message</p>)}
                      </div> */}
            <div className="input-group">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`B2 ${styles.input}`}
                placeholder="Enter your email here"
                aria-label="Email field to sign up for Beela's newsletter"
                aria-describedby="basic-addon2"
              />
              <button
                type="button"
                className={styles.arrowRight}
                disabled={state == "LOADING"}
                onClick={subscribe}
              >
                <Image
                  alt="Arrow pointing right that acts as a submit button for nesletter sign up"
                  src={arrowright}
                  width={20}
                  height={24}
                />
              </button>
              <br />
            </div>
            {state == "ERROR" && <p>Please enter a valid email address</p>}
            {state == "SUCCESS" && <p>You are now subscribed!</p>}
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.sitemapContainer}>
              <h4 className="primary-berry">Sitemap</h4>
              <ul className={styles.ul}>
                <li>
                  <Link href="/">
                    <a className="B2">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/programmes">
                    <a className="B2">Programmes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/stay-connected">
                    <a className="B2">Stay Connected</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="B2">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://beela.se/">
                    <a target="_blank" className="B2">
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/donate">
                    <a className="B2">Donate</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.iconSectionContainer}>
              <div className={styles.iconSection}>
                <h4 className="primary-berry">Beela Community </h4>
                <div className={styles.logos}>
                  <Link href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786&nd=1">
                    <a target="_blank">
                      <div className={styles.icon}>
                        <Image alt="Spotify logo" src={spotify} layout="fill" objectFit="cover" />
                      </div>
                    </a>
                  </Link>

                  <Link href="https://www.linkedin.com/company/beela-se/">
                    <a target="_blank">
                      <div className={styles.icon}>
                        <Image alt="LinkedIn logo" src={linkedin} layout="fill" objectFit="cover" />
                      </div>
                    </a>
                  </Link>

                  <Link href="https://www.instagram.com/beela.se/">
                    <a target="_blank">
                      <div className={styles.icon}>
                        <Image
                          alt="Instagram logo"
                          src={instagram}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>

                  <Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email">
                    <a target="_blank">
                      <div className={styles.icon}>
                        <Image alt="Slack logo" src={slack} layout="fill" objectFit="cover" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.iconSection}>
                <h4 className="primary-berry">Beela Partners</h4>
                <div className={styles.logos}>
                  <Link href="https://www.newtosweden.org/">
                    <a target="_blank">
                      <div className={styles.icon}>
                        <Image
                          alt="NewToSweden logo"
                          src={partner1}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>

                  <Link href="https://www.linkedin.com/company/tech-fleet-community/mycompany/">
                    <a target="_blank">
                      <div className={styles.icon}>
                        <Image
                          alt="TechFleet logo"
                          src={techfleet}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>

                  <Link href="https://beetrootacademy.com/">
                    <a target="_blank">
                      <div className={styles.icon}>
                        <Image alt="Academy logo" src={partner2} layout="fill" objectFit="cover" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className="S2">© 2022 Beela Stockholm, Sweden </p>
          <p className="S2">Stopvagen 60 Bromma, Stockholms län 16835 Sweden</p>
        </div>
      </div>
    </footer>
  )
}
