import React, { useState, useEffect } from "react"
import Link from "next/link"

// stripe
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js"
import axios from "axios"
import { StripeCardNumberElement } from "@stripe/stripe-js"

// scss
import styles from "./paymentform.module.scss"

// component
import { Button } from "../elements/Button"
import BeelaLoader from "../elements/Loader"
import { InputField } from "../elements/InputField"
import { SectionWrapper } from "../layout/SectionWrapper"
import { Container, Row, Col } from "react-bootstrap"

const CardDetails = (props: any) => {
  const { amount } = props

  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState("")
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const stripe = useStripe()
  const elements = useElements()

  const [isInputComplete, setIsInputComplete] = useState({
    firstName: true,
    lastName: true,
    cardNumber: true,
    cardCvc: true,
    expiryDate: true,
  })

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [phone, setPhone] = useState()

  useEffect(() => {}, [
    isInputComplete.cardNumber,
    isInputComplete.cardCvc,
    isInputComplete.expiryDate,
  ])

  // Stripe Element Base style
  let elementStyles = {
    base: {
      fontFamily: "sans-serif",
      fontSize: "16px",
      lineHeight: "27px",
      fontWeight: "300",
      "::placeholder": {
        color: "#aaa",
      },
      ":-webkit-autofill": {
        color: "#e39f48",
      },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  }

  const handleChange = async (event: any) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  const handleSubmit = async (ev: any) => {
    // check if !!
    if (!stripe || !elements || !firstName || !lastName) {
      return
    }

    ev.preventDefault()
    setProcessing(true)

    const cardElement: StripeCardNumberElement | null = elements.getElement(CardNumberElement)

    // check if cardElement is null
    if (!cardElement) {
      return
    }

    // test logs
    console.log("check element", cardElement)
    console.log("check amount", amount)

    try {
      // create Stripe intent
      const { data: clientSecret } = await axios.post("/api/payment_intents", {
        amount: 200 * 100,
      })

      console.log("check secret", clientSecret)

      // Create Payment Request
      const paymentMethodReq = await stripe?.createPaymentMethod({
        type: "card",
        card: cardElement || "",
        billing_details: {
          name: `${firstName} ${lastName}`,
          email: "frank@gmail.com",
          address: {
            city: "Toronto",
            line1: "sdfa",
            state: "Ontario",
            postal_code: "31434",
          },
        },
      })

      console.log("check secret", paymentMethodReq)

      if (paymentMethodReq?.error) {
        console.log("paymentMethodReq", paymentMethodReq.error)
        //   setCheckoutError(paymentMethodReq.error.message);
        //   setProcessingTo(false);
        return
      }

      const { error }: any = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq?.paymentMethod.id,
      })

      if (error) {
        //   setCheckoutError(error.message);
        //   setProcessingTo(false);
        return
      }

      // onSuccessfulCheckout();
    } catch (err: any) {
      console.log(err.message)
      // setCheckoutError(err.message);
    }
  }

  // handle input

  const handleCardNumber = (e: any) => {
    if (e.complete) {
      //   setIsDeclinedMessage("");
      console.log("typing in card number......")
      setIsInputComplete((state) => ({
        ...state,
        cardNumber: false,
      }))
    } else if (e.empty || e.error) {
      console.log("typing in card number......")
      setIsInputComplete((state) => ({
        ...state,
        cardNumber: true,
      }))
    }
  }

  const handleCardExpiry = (e: any) => {
    console.log(e)
    if (e.complete) {
      setIsInputComplete((state) => ({
        ...state,
        expiryDate: false,
      }))
    } else if (e.empty || e.error) {
      setIsInputComplete((state) => ({
        ...state,
        expiryDate: true,
      }))
    }
  }

  const handleCardCVC = (e: any) => {
    if (e.complete) {
      setIsInputComplete((state) => ({
        ...state,
        cardCvc: false,
      }))
    } else if (e.empty || e.error) {
      setIsInputComplete((state) => ({
        ...state,
        cardCvc: true,
      }))
    }
  }

  const handleFirstName = (e: any) => {
    const { value } = e.target
    console.log(value)
    setIsInputComplete((state) => ({
      ...state,
      firstName: !value,
    }))
    setFirstName(value)
  }

  const handleLastName = (e: any) => {
    const { value } = e.target
    console.log(value)
    setIsInputComplete((state) => ({
      ...state,
      lastName: !value,
    }))
    setLastName(value)
  }

  const handleEmail = (e: any) => {
    const { value } = e.target
    console.log(value)
    // setIsInputComplete((state) => ({
    //     ...state,
    //     lastName: !value
    // }))
    setEmailAddress(value)
  }

  const handlePhone = (e: any) => {
    const { value } = e.target
    console.log(value)
    setPhone(value)
  }

  return (
    <SectionWrapper padding="paymentform">
      {/* <Container> */}
      <form id="payment-form" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroups}>
          <div>
            <h3 className={`primary-berry ${styles.heading}`}>Personal Information</h3>
            <Row className={styles.rowSpacing}>
              <Col sm={4} md>
                <InputField
                  type="text"
                  label="First Name"
                  id="FirstName"
                  required
                  onChange={handleFirstName}
                  placeholder="meow"
                />
              </Col>
              <Col sm={4} md>
                <InputField
                  type="text"
                  label="Last Name"
                  id="LastName"
                  required
                  onChange={handleLastName}
                />
              </Col>
              <Col sm={8} md>
                <InputField
                  type="tel"
                  label="Phone Number"
                  id="PhoneNumber"
                  onChange={handlePhone}
                />
              </Col>
            </Row>

            <Row className={styles.rowSpacing}>
              <Col sm={8} md={8}>
                <InputField
                  type="email"
                  label="Email Address"
                  required
                  id="emailAddress"
                  onChange={handleEmail}
                />
              </Col>
            </Row>
          </div>

          <div>
            <h3 className={`primary-berry ${styles.heading}`}>Payment Information</h3>
            <Row className={styles.rowSpacing}>
              <Col xs={12} sm={8} md={4}>
                <div className={styles.inputContainer}>
                  <label className={`B1 ${styles.label}`} htmlFor="CreditCardNumber">
                    Card Number
                  </label>
                  <div className={styles.inputWrapper}>
                    <CardNumberElement
                      options={{
                        style: elementStyles,
                        placeholder: "Card Number",
                        showIcon: true,
                      }}
                      onChange={handleCardNumber}
                      className="stripe-card-input"
                      id="card-number"
                    />
                  </div>
                </div>
              </Col>
              <Col xs={8} sm={5} md={3}>
                <div className={styles.inputContainer}>
                  <label className={`B1 ${styles.label}`} htmlFor="ExpiryDate">
                    Expiration date
                  </label>
                  <div className={styles.inputWrapper}>
                    <CardExpiryElement
                      options={{
                        style: elementStyles,
                      }}
                      onChange={handleCardExpiry}
                      className="stripe-card-input"
                      id="card-number"
                    />
                  </div>
                </div>
              </Col>

              {/* <input
                          id="ExpiryDate"
                          className="form-control"
                          type="text"
                          placeholder="MM / YY"
                      ></input> */}
              <Col xs={4} sm={3} md={2}>
                <div className={styles.inputContainer}>
                  <label className={`B1 ${styles.label}`} htmlFor="SecurityCode">
                    CVV
                  </label>
                  <div className={styles.inputWrapper}>
                    <CardCvcElement
                      options={{
                        style: elementStyles,
                      }}
                      onChange={handleCardCVC}
                      className="stripe-card-input"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className={styles.rowSpacing}>
              <Col xs={12} sm={4} md={4}>
                <InputField type="" label="Country" id="country" />
              </Col>
              <Col xs={12} sm={4} md={3}>
                <InputField type="number" label="Post Number" id="postNumber" />
              </Col>
            </Row>
          </div>
        </div>
        <Row className={styles.buttonRow}>
          <Button
            className={styles.submitButton}
            type="submit"
            variant="primary_darkBG"
            // title={<BeelaLoader />}
            title="Submit Donation"
          />
          <Link href="/privacy">
            <a className={`S2 ${styles.gdpr}`} target="_blank">
              How Will My Information Be Used And Stored?
            </a>
          </Link>
        </Row>
      </form>
      {/* </Container> */}
    </SectionWrapper>
  )
}

export default CardDetails
