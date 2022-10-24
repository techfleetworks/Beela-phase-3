import React from 'react'
import css from "./hero.module.scss"
import Image from "next/image"
import {Button} from "../../../elements/Button/index"

export default function hero() {
  return (
    <div className={` ${css.Hero}`}>
        <div className="container">
        <h2 className='primary-berry'>Pollination For Mentors</h2>
        <h3 className='primary-berry'>Next cohort starts: Autumn 2022</h3>
        <div className="row mt-4">
            <div className="col col-md-6 mt-4">
                <Image alt='image' src="/images/pol-mentors-hero.svg" width={427} height={405} className="mt-4"  />
            </div>
            <div className="col col-md-6 mt-4">
                <h4 className='mt-4 primary-berry'>Ready to help others get into tech? </h4>
                <p className='B1'> Our Pollination Mentoring Programme provides a space to help empower mentees to blossom.</p>
                <ul className='B1'>
                    <li>4 month programme</li>
                    <li>1-on-1 session with mentee twice a month</li>
                    <li>Special Slack groups for mentors</li>
                    <li>Networking opportunities</li>
                    <li>Opportunity to refine your leadership and communication skills</li>
                </ul>
                <Button
                    variant="primary_lightBG"
                    title="Start Your Application"
                    href="https://join.slack.com/t/beela/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ"
                />
            </div>
        </div>
      </div>
    </div>
  )
}
