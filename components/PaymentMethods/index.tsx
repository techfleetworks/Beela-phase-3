import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

// component
import { SectionWrapper } from "../layout/SectionWrapper"
import { Button } from "../elements/Button"
import CardDetails from "./CardDetails"

// css
import "./paymentform.module.scss"
import React, { useState } from "react"
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
  const { amount } = props

  // const handleAmount = (value: any) => {
  //   setAmount(value)
  // }

  return (
    <>
      <SectionWrapper color="SECONDARY_CREAM" padding="hero" maxWidth={728} className="mx-auto">
        <h2 className="primary-berry text-center my-4">
          Your Beela donation :<span className="svg-underline">&nbsp;{amount} kr</span>
        </h2>
        <div className="my-4 d-flex justify-content-center">
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
        </div>
      </SectionWrapper>
      <div>
        <Elements stripe={stripePromise}>
          <CardDetails amount={amount} />
        </Elements>
      </div>
    </>
  )
}
