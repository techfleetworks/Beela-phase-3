import React from 'react';
import styles from './footer2.module.scss';
import Image from "next/image";
import spotify from "../../public/images/spotify.svg";
import linkedin from "../../public/images/linkedin.svg";
import instagram from "../../public/images/instagram.svg";
import slack from "../../public/images/slack.svg";
import partner1 from "../../public/images/Partner1.svg";
import techfleet from "../../public/images/techfleet.svg";
import partner2 from "../../public/images/Partner2.svg";

export default function footer() {
  return (
    <div>
      <div className={`container-fluid ${styles.footer1}`}>
        <div className="container">
        <div className="row">

            <div className="col-12 col-md-6">
              <div className="d-flex flex-column">

                <div>
                      <h4 className="mb-4 primary-berry">Sign Up for Beelas Newsletter</h4>
                      <input type="email" placeholder="Enter your email here    ->" className={`B2 ${styles.input} mb-4 w-75`}/>
                </div>
                <div className="mt-4 pt-4">
                      <p className="S2 mt-4">©  2022 Beela Stockholm, Sweden </p>
                      <p className="S2">Stopvagen 60 Bromma, Stockholms län 16835 Sweden</p>
                </div>

              </div>
            </div>


            <div className="col-12 col-md-3">

                 <h4 className="primary-berry">SITEMAP</h4>
                 <ul className={styles.ul}>
                    <li className="S2">Home</li>
                    <li className="S2">Programmes</li>
                    <li className="S2">Stay Connected</li>
                    <li className="S2">About Us</li>
                    <li className="S2">Contact Us</li>
                 </ul>

            </div>

            <div className="col-12 col-md-3">
                <div className='mb-4'>
                  <h4 className='primary-berry mb-4'>Beela Community</h4>
                  <div className="logos mt-2">
                  <Image alt="Spotify logo" src={spotify} width={33} height={33} />
                  <Image alt="LinkedIn logo" src={linkedin} width={33} height={33} />
                  <Image alt="Instagram logo" src={instagram} width={33} height={33} />
                  <Image alt="Slack logo" src={slack} width={33} height={33} />
                  </div>
                </div>

                <div className="my-4">
                  <h4 className="primary-berry my-4">Beela Partners</h4>
                  <div className="logos">
                  <Image alt="Spotify logo" src={partner1} width={33} height={33} />
                  <Image alt="Spotify logo" src={techfleet} width={33} height={33} />
                  <Image alt="Spotify logo" src={partner2} width={33} height={33} />
                  </div>
                </div>
            </div>

            </div>
        </div>
      </div>
    </div>
  )
}
