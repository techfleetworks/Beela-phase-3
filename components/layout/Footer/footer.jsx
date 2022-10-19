import React from 'react';
import styles from './footer2.module.scss';
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from "next/image";
import spotify from "../../../public/icons/spotify.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import instagram from "../../../public/icons/instagram.svg";
import slack from "../../../public/icons/slack.svg";
import partner1 from "../../../public/icons/Partner1.svg";
import techfleet from "../../../public/icons/techfleet.svg";
import partner2 from "../../../public/icons/Partner2.svg";
//mailchimp needed the below imports
import {useState} from "react";
import axios from "axios"
import { Translate } from 'react-bootstrap-icons';

export default function Footer() {


  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter(); // to set active links
  const routerResAboutUs = router.asPath == "/about" ? styles.active : "";

  const subscribe = async ()=>{

      setState("LOADING");
      setErrorMessage(null);

      try{
          const response = await axios.post("/api/newsletter", {email});
          setState("SUCCESS");
      } catch(e){
          setErrorMessage(e.response.data.error);
          setState("ERROR");
      }

  }





  return (
    <div>
      <div className={`container-fluid ${styles.footer1}`}>
        <div className="container">
        <div className="row">

            <div className="col-12 col-md-6">
              <div className="d-flex flex-column">

                <div>
                      <h4 className="mb-5 primary-berry H4">Sign Up for Beelas Newsletter</h4>
                      {/* <input type="email" placeholder="Enter your email here    ->" className={`B2 ${styles.input} mb-4 w-75`} /> */}

                      {/* <div className='input-group'>
                          <input type="email" placeholder="Enter email "  onChange={(e)=> setEmail(e.target.value)} value={email}/>
                          <button type="button"  disabled={state == "LOADING"} onClick={subscribe}>
                              Subscribe
                          </button>
                          {state == "ERROR" &&(<p>this is error message</p>)}
                          {state == "SUCCESS" &&(<p>this is success message</p>)}
                      </div> */}
                      <div className="input-group mb-3">
                        <input type="email"  onChange={(e)=> setEmail(e.target.value)} value={email}   className={`B2 ${styles.input} mb-4 w-75`} placeholder="Enter your email here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <button type="button" className="input-group-append arrow-right"  disabled={state == "LOADING"}  onClick={subscribe}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          >
                        <path
                          d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                          fill="currentColor"
                          />
                        </svg>
                          </button>
                        <br/>
                        </div>
                        {state == "ERROR" &&( <h4>Please enter a valid email.</h4>)}
                          {state == "SUCCESS" &&(<h4>You are now subscribed!</h4>)}

                      </div>

                <div className="mt-5 pt-5">
                      <p className="S2 mt-5">©  2022 Beela Stockholm, Sweden </p>
                      <p className="S2 ">Stopvagen 60 Bromma, Stockholms län 16835 Sweden</p>
                </div>

              </div>
            </div>


            <div className="col-12 col-md-3">

                 <h4 className="primary-berry">SITEMAP</h4>
                 <ul className={styles.ul}>
                 <li>
                    <Link href="/" >
                      <a className='S2'>Home</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/programmes" >
                      <a className='S2'>Programmes</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/stay-conected" >
                      <a className='S2'>Stay Connected</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/about" >
                      <a className='S2'>About Us</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="https://beela.se/" >
                      <a target="_blank" className='S2'>Contact Us</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/donate" >
                      <a className='S2'>Donate</a>
                    </Link>
                    </li>
                 </ul>

            </div>

            <div className="col-12 col-md-3">
              <div className="mb-4">
                <h4 className="primary-berry mb-4">Beela Community </h4>
                <div className="logos mt-2">
                  <br/>
                 
                  <Link href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786&nd=1">
                    <a target="_blank" >
                  <Image alt="Spotify logo" src={spotify} width={33} height={33} />
                  </a>
                  </Link>
                
                  <Link href="https://www.linkedin.com/company/beela-se/">
                    <a target="_blank">
                  <Image alt="LinkedIn logo" src={linkedin} width={53} height={33} style={{paddingLeft: '1.5rem', paddingRight:'0.6rem' }}/>
                  </a>
                  </Link>
            

                  <Link href="https://www.instagram.com/beela.se/">
                    <a target="_blank">
                  <Image alt="Instagram logo" src={instagram} width={50} height={33} style={{paddingLeft: '0.3rem' }} />
                  </a>
                  </Link>
                  

                  <Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email">
                    <a target="_blank">
                  <Image alt="Slack logo" src={slack} width={40} height={33} style={{ paddingLeft: '1rem' }}/>
                  </a>
                  </Link>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

                <div className="my-4">
                  <h4 className="primary-berry my-4">Beela Partners</h4>
                  <div className="logos">

                  <Link href="https://www.newtosweden.org/">
                    <a target="_blank">
                  <Image alt="NewToSweden logo" src={partner1} width={33} height={33} />
                  </a>
                  </Link>

                  <Link href="https://www.linkedin.com/company/tech-fleet-community/mycompany/">
                  <a target="_blank">
                  <Image alt="TechFleet logo" src={techfleet} width={53} height={33} style={{paddingLeft: '0.7rem' , paddingRight: '0.1rem'}} />
                  </a>
                  </Link>

                  <Link href="https://beetrootacademy.com/">
                    <a target="_blank">
                  <Image alt="Academy logo" src={partner2} width={50} height={33} style={{paddingRight: '1rem' }}  />
                  </a>
                  </Link>
                  </div>
                </div>
            </div>

            </div>
        </div>
      </div>
    </div>
  )
}
