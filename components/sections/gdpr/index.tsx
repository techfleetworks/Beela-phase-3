import Link from "next/link"

//Component Imports
import styles from "./gdpr.module.scss"
import { SectionWrapper } from "../../layout/SectionWrapper"
import { ArrowLeft } from "react-bootstrap-icons"

export const PriNotice = () => {
  return (
    <SectionWrapper padding="main" color="GDPR_GRADIENT" maxWidth={1050}> 
            <div>
                <Link href="HYPERLINK HERE HYPERLINK HERE"> 
                  <a target="_blank" className="h4"> <ArrowLeft /> Back</a>
                </Link>
            </div>

            {/* PRIVACY NOTICE */}
            <div className={styles.sectionWrap}>
                <h1 className="primary-berry" style={{marginBottom: "1rem", marginTop: "7rem"}}>Privacy Notice</h1>
                <p className="B2" style={{marginBottom: "2rem" , lineHeight: "170%"}}>Last updated September 28, 2022</p>
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>This privacy notice for Beela, describes how and 
                why we might collect, store, use, and/or share your information when you use our 
                services such as when you:</p>
                <ul className="B1" style={{lineHeight: "170%", marginLeft: "5%", marginBottom: "2rem"}}>
                  <li>Visit our website at beela.se, or any website of ours that links to this privacy notice</li>
                  <li>Engage with us in other related ways, including any donations, volunteering, mentorship or events</li>
                </ul>
                
             {/* QUESTIONS OR CONCERNS */}
                <h3 className="primary-berry" style={{marginBottom: "0.5rem", lineHeight: "170%"}}>Questions or Concerns?</h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>Reading this privacy notice will help you understand your 
                privacy rights and choices. If you do not agree with our policies and practices, please do not 
                use our Services. If you still have any questions or concerns, please contact us at 
                Email: contact@beela.se</p>
            </div>

            {/* SUMMARY OF KEY POINTS */}
            <div className={styles.sectionWrap}>
                <h1 className="primary-berry" style={{marginBottom: "2rem"}}>Summary of Key Points</h1>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>This summary provides key points from our privacy notice, but you can
                find out more details about any of these topics by clicking the link following each key point or by
                using our table of contents below to find the section you are looking for. You can also click here
                to go directly to our table of contents.</p>
                <h3 className="primary-berry" style={{marginBottom: "0.5rem"}}>What personal information do we process? </h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>This summary provides key points from our privacy notice,
                 but you can find out more details about any of these topics by clicking the link following each key point or by using our table
                of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</p>
                <h3 className="primary-berry" style={{marginBottom: "0.5rem"}}>Do we process any sensitive personal information?  </h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>We do not process sensitive personal information.</p>
                <h3 className="primary-berry" style={{marginBottom: "0.5rem"}}>Do we receive any information from third parties? </h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>We do not receive any information from third parties.</p>
                <h3 className="primary-berry" style={{marginBottom: "0.5rem"}}>How do we process your information? </h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>We process your information to provide, improve, 
                and administer  our Services, communicate with you, for security and fraud prevention, and to comply with law. 
                We may also process your information for other purposes with your consent. We process your 
                information only when we have a valid legal reason to do so. </p>
                <h3 className="primary-berry" style={{marginBottom: "0.5rem"}}>How do we keep your information safe?</h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>We have organisational and technical processes 
                and procedures in place to protect your personal information. However, no electronic transmission over the 
                internet or information storage technology can be guaranteed to be 100% secure, so we cannot 
                promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will 
                not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>
                <h3 className="primary-berry" style={{marginBottom: "0.5rem"}}>What are your rights?</h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>Depending on where you are located geographically, 
                the applicable privacy law may mean you have certain rights regarding your personal information.</p>
                <h3 className="primary-berry" style={{marginBottom: "0.5rem"}}>How do you exercise your rights? </h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>The easiest way to exercise your rights is 
                by emailing us at contact@beela.se. We will consider and act upon any request in accordance with applicable data protection law.</p>
              </div>
              
              {/* BEELA PRIVACY POLICY */}
              <div className={styles.sectionWrap}>
                <h1 className="primary-berry" style={{marginBottom: "1rem"}}>Beela Privacy Policy</h1>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>What information do we collect?</h2>
                <h3 className="primary-berry" style={{marginBottom: "0.5rem"}}>Personal information you disclose to us</h3>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>In Short: We collect personal information that you provide to us</p>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>We collect personal information that you voluntarily provide to us 
                when you register on the Services, express an interest in obtaining information about us or our 
                products and Services, when you participate in activities on the Services, or otherwise when you
                contact us.</p>
                <h4 className="primary-berry" style={{marginBottom: "1rem"}}>Personal Information Provided by You. </h4>
                <p className={`B1 ${styles.text}`}>The personal information that we collect depends on the context
                of your interactions with us and the Services, the choices you make, and the products and features
                you use. The personal information we collect may include the following:</p>                
                <ul className="B1" style={{lineHeight: "170%", marginLeft: "5%", marginBottom: "1rem"}}>
                  <li>names</li>
                  <li>email addresses</li>
                  <li>usernames</li>
                  <li>passwords</li>
                  <li>billing address</li>
                  <li>debit/credit card numbers</li>
                  <li>contact or authentication data</li>
                  <li>contact preferences</li>
                </ul>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>We do not process sensitive information.</p>    
                <h4 className="primary-berry" style={{marginBottom: "1rem"}}>Payment Data</h4>
                <p className="B1" style={{marginBottom: "2rem" , lineHeight: "170%"}}>We may collect data necessary to process your payment if 
                you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with 
                your payment instrument. All payment data is stored by Swish and Stripe. You may find their privacy notice links here: 
                  <Link href="https://assets.ctfassets.net/zrqoyh8r449h/7dh0Sa8HdSflT7FWUjcUqB/795504cec60010933e2d211036a86441/Swish_Privacy_Policy_eng_201019.pdf"> 
                    <a target="_blank" className={styles.hyperlink}>Swish</a>
                  </Link>, 
                  <Link href="https://stripe.com/privacy-center/legal"> 
                    <a target="_blank" className={styles.hyperlink}>Stripe</a>
                  </Link>
                  </p> 
                <h3 className="primary-berry" style={{marginBottom: "1rem"}}>Information automatically collected</h3>
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: Some information — such as your Internet Protocol (IP) 
                address and/or browser and device characteristics — is collected automatically when you visit our Services</p>        
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>We automatically collect certain information when you visit, use, 
                or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may 
                include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, 
                referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. 
                This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>     
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>Like many non-profits, we also collect information through cookies 
                and similar technologies.</p>    
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>The information we collect includes:</p>
                <ul className="B1" style={{lineHeight: "170%", marginLeft: "5%", marginBottom: "1rem"}}>
                  <li style={{marginBottom: "0.5rem"}}>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when
                    you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address,
                    device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with
                    your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information 
                    (such as system activity, error reports (sometimes called &apos;crash dumps&apos;), and hardware settings).</li>
                  <li style={{marginBottom: "0.5rem"}}>Location Data. We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. How much 
                    information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other 
                    technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to 
                    collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if 
                    you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                </ul>
              </div>

              {/* HOW DO WE PROCESS YOUR INFORMATION */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>How do we process your information?</h2>
                  <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: We process your information to provide, improve, and administer our Services, 
                  communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>  
                  <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>We process your personal information for a variety of reasons, depending on
                  how you interact with our Services, including:</p> 
                <ul className="B1" style={{lineHeight: "170%", marginLeft: "5%", marginBottom: "1rem"}}>
                  <li style={{marginBottom: "0.5rem"}}>To facilitate account creation and authentication and otherwise manage user accounts. We may process your 
                  information so you can create and log in to your account, as well as keep your account in working order.</li>
                </ul>
              </div>

              {/* WHAT LEGAL BASIS DO WE RELY ON TO PROCESS */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>What legal basis do we rely on to proccess your information?</h2> 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: We only process your personal information when we 
                believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, 
                to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to 
                fulfill our legitimate business interests.</p> 
                <h3 className="primary-berry" style={{marginBottom: "1rem"}}>If you are located in the EU or UK, this section applies to you.</h3>
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>The General Data Protection Regulation (GDPR) and UK GDPR require
                us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following 
                legal bases to process your personal information:</p> 
                <ul className="B1" style={{lineHeight: "170%", marginLeft: "5%", marginBottom: "1rem"}}>
                  <li style={{marginBottom: "0.5rem"}}>Consent. We may process your information if you have given us permission (i.e. consent) 
                  to use your personal information for a specific purpose. You can withdraw your consent at any time</li>
                  <li style={{marginBottom: "0.5rem"}}>Vital Interests. We may process your information where we believe it is necessary to protect 
                  your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                </ul>                
              </div>

              {/* WHEN AND WITH WHOM DO WE SHARE */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>When and with whom do we share your personal information?</h2>                 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: We may share information in specific situations 
                described in this section and/or with the following third parties.</p>            
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>We may need to share your personal information in the following situations:</p>  
                <ul className="B1" style={{lineHeight: "170%", marginLeft: "5%", marginBottom: "1rem"}}>
                  <li style={{marginBottom: "0.5rem"}}>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, 
                  any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                </ul>        
              </div>

              {/* DO WE USE COOKIES AND OTHER */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>Do we use cookies and other tracking technologies?</h2>                 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: We may use cookies and other tracking technologies to collect 
                and store your information.</p>            
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>We may use cookies and similar tracking technologies (like web beacons 
                and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies 
                is set out in our Cookie Notice.</p>         
              </div>

              {/* HOW LONG DO WE KEEP INFO */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>How long do we keep your information?</h2>                 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: We keep your information for as long as necessary to 
                fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>            
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>We will only keep your personal information for as long as it is 
                necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, 
                accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than three 
                (3) months past the termination of the user&apos;s account.</p>         
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>When we have no ongoing legitimate business need to process your personal
                information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information 
                has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p> 
              </div>

              {/* HOW WE KEEP INFO SAFE */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>How do we keep your information safe?</h2>                 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: We aim to protect your personal information through a system of organisational
                and technical security measures.</p>            
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>We will only keep your personal information for as long as it is necessary for the purposes
                 set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). 
                 No purpose in this notice will require us keeping your personal information for longer than three (3) months past the termination of the user&apos;s account.</p>         
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>When we have no ongoing legitimate business need to process your personal information, 
                we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in 
                backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p> 
              </div>

              {/* PRIVACY RIGHTS */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>What are your privacy rights?</h2>                 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: In some regions, such as the EU, you have rights that allow you greater access 
                to and control over your personal information. You may review, change, or terminate your account at any time.</p>            
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In some regions (like the EU), you have certain rights under applicable data protection laws.
                 These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict 
                 the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to
                the processing of your personal information. You can make such a request by contacting us.</p>         
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>We will consider and act upon any request in accordance with applicable data protection laws.</p> 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>If you are located in the EEA or UK and you believe we are unlawfully processing your 
                personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here.
                  <Link href="https://ec.europa.eu/info/law/law-topic/data-protection_en"> 
                    <a target="_blank" className={styles.hyperlink}>contact details here</a>
                  </Link>.
                </p> 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>If you are located in Sweden, the contact details for the data protection authorities
                  <Link href="https://www.government.se/government-agencies/the-swedish-data-protection-authority/"> 
                    <a target="_blank" className={styles.hyperlink}>are available here</a>
                  </Link>.
                </p> 
                <h3 className="primary-berry" style={{marginBottom: "1rem"}}>Withdrawing your consent</h3>
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>If we are relying on your consent to process your personal information, which may 
                be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your 
                consent at any time by contacting us.</p> 
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>However, please note that this will not affect the lawfulness of the processing 
                before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful 
                processing grounds other than consent.</p> 
              </div>

            {/* CONTROLS FOR DO NOT TRACK FEATURES */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>Controls for do-not-track features</h2>  
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>Most web browsers and some mobile operating systems and mobile applications 
                include a Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing 
                activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised.
                As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. 
                If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy 
                notice.</p>                
              </div>

            {/* DO CALIFORNIA RESIDENTS HAVE SPECIFIC */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>Do California residents have specific privacy rights?</h2>  
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: Yes, if youpersonal are a resident of California, you are granted 
                specific rights regarding access to your  information.</p>       
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>California Civil Code Section 1798.83, also known as the &apos;Shine The Light&apos; law, permits
                our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information 
                (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information
                in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us 
                using the contact information provided below.</p>   
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>If you are under 18 years of age, reside in California, and have a registered account 
                with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact 
                us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We 
                will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from 
                all our systems (e.g. backups, etc.).</p>                            
              </div>

            {/* DO WE MAKE UPDATES TO NOTICE */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>Do we make updates to this notice?</h2>  
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>       
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>We may update this privacy notice from time to time. The updated version will be 
                indicated by an updated &apos;Revised&apos; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice,
                we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice 
                frequently to be informed of how we are protecting your information.</p>                    
              </div>

            {/* HOW CAN YOU CONTACT US NOTICE */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>How can you contact us about this notice?</h2>  
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>If you have questions or comments about this notice, you may contact our Data Protection 
                Officer (DPO) by email at contact@beela.se, or by post to:</p>       
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>Beela</p>
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>Stopvaegen 60</p>   
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>Bromma, Stockholms län 16835</p>   
                <p className="B1" style={{marginBottom: "1rem" , lineHeight: "170%"}}>Sweden</p>                       
              </div>    
                
            {/* HOW CAN YOU REVIEW, UPDATE, DELETE */}
              <div className={styles.sectionWrap}>
                <h2 className="primary-berry" style={{marginBottom: "1rem"}}>How can you review, update, or delete the data we collect from you?</h2>  
                <p className="B1" style={{marginBottom: "6rem", lineHeight: "170%"}}>Based on the applicable laws of your country, you may have the right to request 
                access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal 
                information, please submit email beela us at contact@beela.se.</p>                 
              </div>      
            <div>
                <Link href="HYPERLINK HERE HYPERLINK HERE"> 
                  <a target="_blank" className="h4"> <ArrowLeft /> Back</a>
                </Link>
            </div>
    </SectionWrapper>
  )
}