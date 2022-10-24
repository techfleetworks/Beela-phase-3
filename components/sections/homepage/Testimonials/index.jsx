import React, { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { TeamCard } from "../../../elements/TeamCard"
import testimonial from "../../../../mockdata/testimonial.json"
import { useMediaQuery } from 'react-responsive'


const Testimonials = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 680px)' })
  const [showMore, setShowMore] = useState(false);

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      centerMode={true}
      centerSlidePercentage={isTabletOrMobile ? 100 : 50}
    >
      {!!testimonial && testimonial.map(data => {
        return (
          <TeamCard
            name={data.name}
            description={`${data.about.substring(0, 200)}...`}
            imgSource={data.img}
            isTestimonial
            title={data.title}
          />
        )
      })}

    </Carousel>
  )
}

export default Testimonials;
