import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styles from "../styles/Testimonials.module.css"

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <div className={styles.hex}>
            <img src="/avatar.png" alt="placeholder image" className={styles.carouselImg} />
          </div>
          <div className={styles.myCarousel}>
            <h3>Natália</h3>
            <h4>UX Designer</h4>
            <p>
              Natália is a UX Designer, Brazilian and resilient by default. She started her career
              in tech from scratch when she decided to move to Stockholm and she learned English
              while living in Sweden. Despite all the fears and uncertainties, she started in a new
              career and today studies at Hyper Island and works as a consultant. In her free time,
              she loves to visit new places by cycling and trying different foods.
            </p>
          </div>
        </div>

        <div>
          <img src="/avatar.png" alt="placeholder image" className={styles.carouselImg} />
          <div className={styles.myCarousel}>
            <h3>Natália</h3>
            <h4>UX Designer</h4>
            <p>
              Natália is a UX Designer, Brazilian and resilient by default. She started her career
              in tech from scratch when she decided to move to Stockholm and she learned English
              while living in Sweden. Despite all the fears and uncertainties, she started in a new
              career and today studies at Hyper Island and works as a consultant. In her free time,
              she loves to visit new places by cycling and trying different foods.
            </p>
          </div>
        </div>

        <div>
          <div className="hex">
            <img src="/avatar.png" alt="placeholder image" className={styles.carouselImg} />
          </div>
          <div className={styles.myCarousel}>
            <h3>Natália Shorter</h3>
            <h4>UX Designer</h4>
            <p>
              Natália is a UX Designer, Brazilian and resilient by default. She started her career
              in tech from scratch when she decided to move to Stockholm and she learned English
              while living in Sweden.
            </p>
          </div>
        </div>
      </Carousel>
    )
  }
}
