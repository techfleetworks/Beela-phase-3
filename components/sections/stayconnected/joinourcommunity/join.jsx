import React from 'react'
import styles from "./join.module.scss"
import Image from "next/image"
import {Button} from "../../../elements/Button/index"



export default function join() {
  return (

    <div className={styles.bg }  style={{backgroundColor: "var(--color-cream)"}}>
        
      <div className="container">
        <div className="row" style={{paddingTop: "6.4rem", paddingBottom: "6.4rem"}} >
            <div className="col-12 col-md-6">
                <Image alt='asdf' width={800} height={800} src="images/LeftColumn.svg"/>
            </div>
            <div className="col-12 col-md-6">
                <h2 className="primary-berry">Join our community</h2>
                <h4 className="primary-berry">Our community uses Slack to connect</h4>
                <p className='B1'>If you’ve never used Slack before, it’s okay! It’s a discussion platform that many tech companies use to communicate. We promise you’ll get the hang of it quickly. Here are some of our most popular channels:</p>
            
                <ul className='B1'>
                    <li><b>#welcome</b> Introduce yourself and connect with other immigrants to Sweden. </li>
                    <li><b>#encouragement</b> Ask questions, share your experiences, and receive support. </li>
                    <li><b>#job-leads</b> Share and view job descriptions from employers that welcome diverse applicants. </li>
                </ul>
                <Button
                    variant="primary_lightBG"
                    title="Join Us On Slack"
                    href="https://join.slack.com/t/beela/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ"
                />
            </div>

        </div>
      </div>
      
    </div>
    
  )
}
