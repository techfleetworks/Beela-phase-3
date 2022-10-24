import React from 'react'
import {Row, Container, Col} from "react-bootstrap";
import Link from "next/link"
import Image from "next/image"
import { auto } from '@popperjs/core';
import {Button} from "../../../elements/Button/index"
import styles from "./pod.module.scss"

export default function podcast() {
  return (
    <div>
         {/* Newsletter  */}
         <div className="container-fluid  new-mente">
          <section id="section-podcast" className="container">
            <Row className="text-center justify-content-center align-content-center">
              <Container className="home-pollination__spacer">
                <Row xs={1} md={2} className="m-4 align-items-center justify-content-center ">
                 

                <Col
                    xs={{ order: 1 }}
                    sm={10}
                    md={{ span: 6, order: 1 }}
                    lg={6}
                    xl={5}
                    className="pt-4 pm-4"
                  >
                    <div className="image-wrapper">
                   
                      <Image  src="/icons/home-podcast.svg" width={600} height={336} alt="The Podcast image for Beela Talk, an illustraion of two women in Rosie the Riveter pose with the text Beela's Talk underneath them"
                        className="img-fluid home-shadow_img"/>
                    </div>
                  </Col>

                  <Col
                    xs={{ order: 2 }}
                    sm={10}
                    md={{ span: 6, order: 2 }}
                    lg={6}
                    xl={5}
                    className="p-2 "
                  >
                    <div className={styles.ml4rem}>
                    <h3 className="no_name_37" style={{ textAlign: "start" }}>
                      Podcast
                    </h3>
                    <p className="m-0 B1" style={{ maxWidth: "268px", textAlign: "start" }}>
                    Our podcast is filled with inspiring stories from Swedish immigrants who have broken into tech. Catch up on all the buzz!
                    </p>
                    
                    </div>
                    <div  className={styles.ml4rem} style={{textAlign: "start"}}>
                      <Image src="/icons/spotify.svg" width={64} height={64}/>
                      
                      <Image src="/icons/apple-podcasts.svg" width={64} height={64}/>
                      <Image src="/icons/google-podcasts.svg" width={64} height={64}/>
                    </div>
                  </Col>

                  
                </Row>
              </Container>
            </Row>
          </section>
        </div>
    </div>
  )
}
