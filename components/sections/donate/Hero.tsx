import React, { FC, useState } from "react"

// component
import { SectionWrapper } from "../../layout/SectionWrapper"
import { Button } from "../../elements/Button"
import Spacer from "../../elements/Spacer"

// scss
import styles from "./Hero.module.scss"
import ReactIf from "../../ReactIf"
import useToggle from "../../../hooks/useToggle"
import PaymentForm from "../../PaymentMethods"

export const Hero: FC<any> = ({}) => {
  const [amount, setAmount] = useState(0)
  const [visible, initPayment, cancelPayment] = useToggle(false)

  const submitAmount = (value: number) => {
    console.log("check amount", value)
    setAmount(value)
  }
  const handleContinueBtn = () => {
    console.log(amount)
    if (amount > 0) {
      initPayment()
    }
  }
  // Retrieving product price from stripe (inprogress)
  return (
    <>
      <ReactIf condition={!visible}>
        <SectionWrapper padding="hero" maxWidth={728} className="mx-auto" color="SECONDARY_CREAM">
          <>
            <h2 className="primary-berry text-center my-4">
              Bee a<span className="svg-underline"> Supporter</span>
            </h2>
            <Spacer type="vertical" size={15} />
            <div className="my-4 d-flex justify-content-center"></div>
            <div className="d-flex justify-content-between">
              <Button
                variant="secondary_lightBG"
                title="200 kr"
                onClick={() => submitAmount(200)}
              />
              <Spacer type="horizontal" size={10} />

              <Button
                variant="secondary_lightBG"
                title="500 kr"
                onClick={() => submitAmount(500)}
              />
              <Spacer type="horizontal" size={10} />
              <Button
                variant="secondary_lightBG"
                title="1000 kr"
                onClick={() => submitAmount(1000)}
              />
              <Spacer type="horizontal" size={10} />
              <Button variant="secondary_lightBG" title="Other Kr" />
            </div>
            <div className="d-flex align-items-center flex-column">
              <Spacer type="vertical" size={30} />
              <Button
                variant="primary_darkBG"
                title="Continue to Donate"
                onClick={() => handleContinueBtn()}
              />
              <Spacer type="vertical" size={10} />

              <Spacer type="vertical" size={50} />
              <span className={`${styles.supportBeelaHeaderContent} h4 text-center`}>
                Your gift will help us guide more immigrant women and nonbinary people into tech
              </span>
            </div>
          </>
        </SectionWrapper>
      </ReactIf>
      <ReactIf condition={visible}>
        <div>
          <PaymentForm amount={amount} />
        </div>
      </ReactIf>
    </>
  )
}
