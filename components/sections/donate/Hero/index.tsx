{
  /*
   ****ADD SWISH NUMBER TO LINE 75 AND DELETE THIS COMMENT****
   ****ADD SVG SWISH QR CODE TO public/icons as "qr-code.svg" AND DELETE THIS COMMENT****
   */
}
import React, { FC, useState } from "react"
import Image from "next/image"
import Link from "next/link"

// component
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"

// scss
import styles from "./Hero.module.scss"
//To be used with the custom payment form
// import ReactIf from "../../../ReactIf"
// import useToggle from "../../../../hooks/useToggle"
// import PaymentForm from "../../../PaymentMethods"

export const Hero: FC<any> = ({}) => {
  const [viewSwish, setViewSwish] = useState(false)
  //To be used with the custom payment form
  // const [visible, initPayment, cancelPayment] = useToggle(false)

  // const handleContinueBtn = () => {
  //   initPayment()
  // }
  // Retrieving product price from stripe (inprogress)
  return (
    <>
      {/* To be used with the custom payment form
      <ReactIf condition={!visible}> */}
      <SectionWrapper
        padding="paymentform"
        maxWidth={728}
        className="mx-auto"
        color="SECONDARY_CREAM"
      >
        <div className={styles.sectionContainer}>
          <div className={styles.headingContainer}>
            <h1 className="primary-berry">
              Bee a<span className="svg-underline"> Supporter</span>
            </h1>
            <h2 className="primary-berry">
              Your gift will help us guide more immigrant women and nonbinary people into tech
            </h2>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.paymentButton}
              variant="primary_lightBG"
              title="Swish a Gift"
              onClick={() => {
                setViewSwish(!viewSwish)
              }}
            />

            <Button
              className={`${styles.paymentButton} dbox-donation-button`}
              variant="primary_darkBG"
              title="Pay with Credit"
              href="https://donorbox.org/beela-donations-1?default_interval=m"
              // onClick={() => handleContinueBtn()}
            />
          </div>
          {viewSwish && (
            <div className={styles.swishContainer}>
              <h5>Scan with your Swish app</h5>
              <p className="B1">Swish number: ADD SWISH NUMBER HERE</p>
              <Image
                src="../icons/qr-code.svg"
                alt="Swish QR code for making a donation to Beela"
                height={206}
                width={206}
                layout="intrinsic"
              />
            </div>
          )}
        </div>
        <Link href="/privacy">
          <a className={`S2 ${styles.gdpr}`} target="_blank">
            How Will My Information Be Used And Stored?
          </a>
        </Link>
      </SectionWrapper>
      {/* To be used with the custom payment form 
      </ReactIf> */}
      {/* To be used with the custom payment form
      <ReactIf condition={visible}>
        <div>
          <PaymentForm />
        </div>
      </ReactIf> */}
    </>
  )
}
