import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

// component
import { SectionWrapper } from "../layout/SectionWrapper"
import { Button } from "../elements/Button"
import CardDetails from "./CardDetails"
import Spacer from "../elements/Spacer"

// css
import "./paymentform.module.scss"
import React, { useState } from "react"
import useToggle from "../../hooks/useToggle"
import { InputField } from "../elements/InputField"

// scss
import styles from "./paymentform.module.scss"

const { APP_STRIPE_PUBLIC_KEY } = process.env
// let stripePromise: any;
// if (APP_STRIPE_PUBLIC_KEY) {
//     stripePromise = loadStripe(APP_STRIPE_PUBLIC_KEY);
// }

// QlzeHnqRWmoM9eV8tKwyaCnXISCFbLN1T3CAElaCrqhQQO1sK8
const stripePromise = loadStripe(
  "pk_test_51LorkjDYz8H8zXUaIt4Wmaqzxh733VUpQxYgA3sTgF1abExg9FlO3v69yzp7v1EZG3RqVofn36ugrdNg6WCkme2B00eA2cKoyg"
)

export default function PaymentForm(props: any) {
  const [amount, setAmount] = useState(0)
  const [visible, editAmount, submitEditAmount] = useToggle(false)


  const submitAmount = (value: number) => {
    console.log("check amount", value)
    setAmount(value)
  }

  const handleEditChange = (e: any) => {
    const { value } = e.target
    console.log(value)
    setAmount(value)
  }

  const handleEditAmount = () => { visible ? submitEditAmount(): editAmount() }

  return (
    <>
      <SectionWrapper color="SECONDARY_CREAM" padding="hero" maxWidth={728} className="">
        <h1 className="primary-berry text-center my-4">
          Your Beela donation: <div className={styles.customDonation}><span className="svg-underline">&nbsp;{amount} kr</span></div>
        </h1>

        <div className={styles.buttonContainer}>
          <Button variant="secondary_lightBG" title="200 kr" onClick={() => submitAmount(200)} />
          <Button variant="secondary_lightBG" title="500 kr" onClick={() => submitAmount(500)} />
          <Button variant="secondary_lightBG" title="1000 kr" onClick={() => submitAmount(1000)} />
          <Button
            variant="secondary_lightBG"
            // title="Other Kr" 
            title={visible ? 'Add Amount' : 'Other kr'}
            onClick={handleEditAmount} />
        </div>
        {visible &&
          (
            <div className={styles.editAmountWrapper}>
            <InputField
              className={styles.editAmountField}
              type="number"
              // label="Phone Number"
              id="PhoneNumber"
              placeholder="200 kr"
              onChange={handleEditChange}
              />
              </div>
          )}


        {/* <div className="my-4 d-flex justify-content-center"> */}
        {/* <div className="mx-3">
            <input
              className="h4"
              type="radio"
              id="amount-one-time"
              value="amount-one-tim"
              name="donation-frequency"
            />
            <label className="h4 primary-berry" htmlFor="amount-one-time">
              One Time
            </label>
          </div> */}
        {/* <div className="mx-3">
            <input
              className="h4"
              type="radio"
              id="amount-monthly"
              value="amount-monthly"
              name="donation-frequency"
            />
            <label className="h4 primary-berry" htmlFor="amount-monthly">
              Monthly
            </label>
          </div> */}
        {/* </div> */}
      </SectionWrapper>
      <div>
        <Elements
          options={{
            fonts: [
              {
                cssSrc:
                  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
              },
            ],
          }}
          stripe={stripePromise}
        >
          <CardDetails amount={amount} />
        </Elements>
      </div>
    </>
  )
}
