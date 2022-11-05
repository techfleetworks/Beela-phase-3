import React, { FC, useState } from "react"
import Image from "next/image"

// component
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"
import Spacer from "../../../elements/Spacer"

// scss
import styles from "./Hero.module.scss"
import ReactIf from "../../../ReactIf"
import useToggle from "../../../../hooks/useToggle"
import PaymentForm from "../../../PaymentMethods"

export const Hero: FC<any> = ({}) => {
  // const [visible, initPayment, cancelPayment] = useToggle(false)
  const [viewSwish, setViewSwish] = useState(false)

  // const handleContinueBtn = () => {
  //   initPayment()
  // }
  // Retrieving product price from stripe (inprogress)
  return (
    <>
      {/* <ReactIf condition={!visible}> */}
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
            <script
              type="text/javascript"
              defer
              src="https://donorbox.org/install-popup-button.js"
            ></script>
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
              <p className="B1">Swish number: 1234567890</p>
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
      </SectionWrapper>
      {/* </ReactIf> */}
      {/* <ReactIf condition={visible}>
        <div>
          <PaymentForm />
        </div>
      </ReactIf> */}
    </>
  )
}
