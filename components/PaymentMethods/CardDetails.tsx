import React, { useState, useEffect } from "react";

// stripe
import {
    CardElement,
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
} from "@stripe/react-stripe-js";
import axios from "axios";
import { StripeCardNumberElement } from "@stripe/stripe-js";

// scss
import styles from "./paymentform.module.scss"

// component
import { Button } from '../elements/Button';
import BeelaLoader from "../elements/Loader";
import { InputField } from "../elements/InputField";

const CardDetails = (props: any) => {
    const { amount } = props

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const [isInputComplete, setIsInputComplete] = useState({
        firstName: true,
        lastName: true,
        cardNumber: true,
        cardCvc: true,
        expiryDate: true,
    })

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [phone, setPhone] = useState()

    useEffect(() => {

    }, [isInputComplete.cardNumber,
    isInputComplete.cardCvc,
    isInputComplete.expiryDate
    ])

    // Stripe Element Base style
    let elementStyles = {
        base: {
            fontFamily: 'sans-serif',
            lineHeight: '46px',
            fontSize: '16px',
            '::placeholder': {
                color: '#aaa',
            },
            ':-webkit-autofill': {
                color: '#e39f48',
            },
        },
        invalid: {
            iconColor: 'red',
            color: 'red',
        },
    };

    const handleChange = async (event: any) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async (ev: any) => {

        // check if !!
        if (!stripe || !elements || !firstName || !lastName) {
            return;
        }

        ev.preventDefault();
        setProcessing(true);

        const cardElement: StripeCardNumberElement | null =
            elements.getElement(CardNumberElement);

        // check if cardElement is null
        if (!cardElement) {
            return;
        }

        // test logs
        console.log('check element', cardElement)
        console.log('check amount', amount)

        try {

            // create Stripe intent
            const { data: clientSecret } = await axios.post("/api/payment_intents", {
                amount: 200 * 100
            });

            console.log('check secret', clientSecret)

            // Create Payment Request
            const paymentMethodReq = await stripe?.createPaymentMethod({
                type: "card",
                card: cardElement || '',
                billing_details: {
                    name: `${firstName} ${lastName}`,
                    email: 'frank@gmail.com',
                    address: {
                        city: 'Toronto',
                        line1: 'sdfa',
                        state: 'Ontario',
                        postal_code: '31434'
                    }
                }
            });

            console.log('check secret', paymentMethodReq)

            if (paymentMethodReq?.error) {
                console.log('paymentMethodReq', paymentMethodReq.error)
                //   setCheckoutError(paymentMethodReq.error.message);
                //   setProcessingTo(false);
                return;
            }

            const { error }: any = await stripe?.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq?.paymentMethod.id
            });

            if (error) {
                //   setCheckoutError(error.message);
                //   setProcessingTo(false);
                return;
            }

            // onSuccessfulCheckout();
        } catch (err: any) {
            console.log(err.message)
            // setCheckoutError(err.message);
        }
    };

    // handle input

    const handleCardNumber = (e: any) => {
        if (e.complete) {
            //   setIsDeclinedMessage("");
            console.log("typing in card number......")
            setIsInputComplete((state) => ({
                ...state,
                cardNumber: false
            }))
        } else if (e.empty || e.error) {
            console.log("typing in card number......")
            setIsInputComplete((state) => ({
                ...state,
                cardNumber: true
            }))
        }
    }

    const handleCardExpiry = (e: any) => {
        console.log(e)
        if (e.complete) {
            setIsInputComplete((state) => ({
                ...state,
                expiryDate: false
            }))
        } else if (e.empty || e.error) {
            setIsInputComplete((state) => ({
                ...state,
                expiryDate: true
            }))
        }
    }

    const handleCardCVC = (e: any) => {
        if (e.complete) {
            setIsInputComplete((state) => ({
                ...state,
                cardCvc: false
            }))
        } else if (e.empty || e.error) {
            setIsInputComplete((state) => ({
                ...state,
                cardCvc: true
            }))
        }
    }

    const handleFirstName = (e: any) => {
        const { value } = e.target
        console.log(value)
        setIsInputComplete((state) => ({
            ...state,
            firstName: !value
        }))
        setFirstName(value)

    }



    const handleLastName = (e: any) => {
        const { value } = e.target
        console.log(value)
        setIsInputComplete((state) => ({
            ...state,
            lastName: !value
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
        <div className={styles.setupcard}>
            <form className={styles.setupcardform} id="payment-form" onSubmit={handleSubmit}>
                <h3>Personal Information</h3>
                <div className={styles.setupcardWrapper}>
                    <div className={styles.setupcardinputwrapper}>
                        <div>
                            <InputField
                                type="text"
                                label="First Name"
                                id="FirstName"
                                className={styles.inputfield}
                                required
                                onChange={handleFirstName}
                            />
                        </div>
                        <div>
                            <InputField
                                type="text"
                                label="Last Name"
                                id="LastName"
                                className={styles.inputfield}
                                required
                                onChange={handleLastName}
                            />
                        </div>
                    </div>
                    <div>
                        <InputField
                            type="text"
                            label="Corporation"
                            id="Corporation"
                            className={styles.inputfield}
                            required
                            onChange={handleLastName}
                        />
                    </div>
                </div>
                <div className={styles.setupcardinputwrapper}>
                    <div>
                        <InputField
                            type="number"
                            label="Phone Number"
                            id="PhoneNumber"
                            required
                            className={styles.inputfield}
                            onChange={handlePhone}
                        />
                    </div>
                    <div>
                        <InputField
                            type="email"
                            label="Email Address"
                            required
                            id="emailAddress"
                            className={styles.inputfield}
                            onChange={handleEmail}
                        />
                    </div>
                </div>

                <h3>Payment Information</h3>
                <label htmlFor="CreditCardNumber">Card Number</label>
                <CardNumberElement
                    options={{
                        style: elementStyles,
                        placeholder: 'Card Number',
                        showIcon: true,
                    }}
                    onChange={handleCardNumber}
                    className="stripe-card-input"
                    id="card-number"
                />

                <label htmlFor="ExpiryDate">Expiration date</label>
                <CardExpiryElement
                    options={{
                        style: elementStyles
                    }}
                    onChange={handleCardExpiry}
                    className="stripe-card-input"
                    id="card-number"
                />

                {/* <input
                        id="ExpiryDate"
                        className="form-control"
                        type="text"
                        placeholder="MM / YY"
                    ></input> */}

                <label htmlFor="SecurityCode">CVV</label>
                <CardCvcElement
                    options={{
                        style: elementStyles
                    }}
                    onChange={handleCardCVC}

                    className="stripe-card-input" />

                <br />
                <Button
                    type="submit"
                    variant="primary_darkBG"
                    // title={<BeelaLoader />}
                    title="Submit Donation"
                />
            </form>
        </div>
    )
}
export default CardDetails