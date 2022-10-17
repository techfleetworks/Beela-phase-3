import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={false}>
        <div>
          <div className="hexagon">
            <img src="/images/testVanessa.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Vanessa Sue Smith</h3>
            <h4>Front-End Developer</h4>
            <p>
              Vanessa is originally from Panamá and always liked creating visuals and playing with
              design and color. She has a Bachelor’s in Graphic Design and before moving to Sweden,
              she lived in Belgium for 10 years where she started a career as a Chef and also a food
              blog where she developed her own recipes and promoted conscious and vegan eating. She
              worked for 11 years a Chef and Kitchen Manager before she felt a need to reconnect
              with her creative side and decided to go for a career change and pursue Web
              Development. She completed the Technigo bootcamp in February 2021 and started a
              position as a Consultant at Axakon as a Front-End Developer.
            </p>
          </div>
        </div>

        <div>
          <div className="hexagon">
            <img src="/images/testIvy.png" alt="placeholder" />
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
            <img src="/images/testNatalia.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Natália Vilela</h3>
            <h4>UX Designer</h4>
            <p>
              Natália is a UX Designer, Brazilian, and resilient by default. She started her career
              in tech from scratch when she decided to move to Stockholm and she learned English
              while living in Sweden. Despite all the fears and uncertainties, she started in a new
              career and today studies at Hyper Island and works as a consultant. In her free time,
              she loves to visit new places by cycling and trying different foods.
            </p>
          </div>
        </div>

        <div>
          <div className="hexagon">
            <img src="/images/testMeri.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Meri M. Vanchovska</h3>
            <h4>Creative Digital Specialist</h4>
            <p>
              Meri is originally from Skopje, N. Macedonia and is an experienced communication
              specialist with a great love for project management and relevant experience in social
              media marketing. She has been a part of building quite a few companies and products.
              After moving to Stockholm, she worked as the Communications Manager and Digital
              Diplomacy Officer at the Macedonian Embassy, when she decided it’s time for a change.
              So she enrolled and studied software development at KTH and worked as a Technical
              Communicator at Bambuser.
            </p>
          </div>
        </div>

        <div>
          <div className="hexagon">
            <img src="/images/testJinyan.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Jinyan Liu</h3>
            <h4>Android Developer</h4>
            <p>
              Jinyan is a software developer working for Bontouch Sweden. She is from China and has
              a Bachelor’s degree in Art and Design and a Master’s in Interactive Media Design.
              After school, she worked as a group exercise instructor at Actic a Swedish gym,
              teaching Les Mills Body Combat and Body Pump but decided to change her career path and
              became an Android developer. She loves the cinema and won Best Actress at the 2010
              D.C. Chinese Film Festival for her role in the short film Be Touched.
            </p>
          </div>
        </div>

        <div>
          <div className="hexagon">
            <img src="/images/testDaniela.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Daniela Zacarias</h3>
            <h4>Web Developer</h4>
            <p>
              Daniela is from Mexico, lived in Canada and now in Sweden for the last 10 years. With
              a background in Media &amp; Communication and Project Management, she has been working
              in the cultural sector in different positions, from radio producer and digital
              marketer to administrator and festival manager.With a growing interest in programming
              and UI/UX Design, Daniela realized she was ready for new challenges, a new lifestyle
              that involved a career shift from culture to Tech. In June 2021, she graduated from
              Technigo bootcamp and is ready to start her career as a Web Developer.
            </p>
          </div>
        </div>
      </Carousel>
    )
  }
}
