import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import styles from "../styles/Testimonials.module.css"

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={false}>
        <div>
          <div className="hexagon">
            <img src="/testimonials1.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Aleksandra Geric (Ivy)</h3>
            <h4>CEO at Moonwise</h4>
            <p>
              When I arrived in Stockholm, I was new to Sweden and looking for a tech job for the
              first time, I felt insecure, lost and unmotivated, until I joined the Beela mentorship
              program as a mentee, which helped me better understand the Swedish job market and feel
              accompanied in this process and soon after that I found a job! Now I am a mentor in
              Beela and I want to continue participating as much as I can in this wonderful network.
            </p>
          </div>
        </div>

        <div>
          <div className="hexagon">
            <img src="/testimonials1.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Aleksandra Geric (Ivy)</h3>
            <h4>CEO at Moonwise</h4>
            <p>
              When I arrived in Stockholm, I was new to Sweden and looking for a tech job for the
              first time, I felt insecure, lost and unmotivated, until I joined the Beela mentorship
              program as a mentee, which helped me better understand the Swedish job market and feel
              accompanied in this process and soon after that I found a job! Now I am a mentor in
              Beela and I want to continue participating as much as I can in this wonderful network.
            </p>
          </div>
        </div>

        <div>
          <div className="hexagon">
            <img src="/testimonials1.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Aleksandra Geric (Ivy)</h3>
            <h4>CEO at Moonwise</h4>
            <p>
              When I arrived in Stockholm, I was new to Sweden and looking for a tech job for the
              first time, I felt insecure, lost and unmotivated, until I joined the Beela mentorship
              program as a mentee, which helped me better understand the Swedish job market and feel
              accompanied in this process and soon after that I found a job!
            </p>
          </div>
        </div>
      </Carousel>
    )
  }
}
