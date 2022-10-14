import React, { useState, useEffect } from "react";
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

// component
import { Button } from '../../elements/Button';
import BeelaLoader from "../../elements/Loader";


const CardDetails = () => {

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

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    useEffect(() => {

    }, [isInputComplete.cardNumber, isInputComplete.cardCvc, isInputComplete.expiryDate])


    useEffect(() => {

    });

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

        if (!stripe || !elements || !name || !surname) {
            return;
        }

        ev.preventDefault();
        setProcessing(true);
        console.log('handl start')

        const cardElement: StripeCardNumberElement | null =
            elements.getElement(CardNumberElement);

        if (!cardElement) {
            return;
        }
        console.log('check element', cardElement)

        try {
            const { data: clientSecret } = await axios.post("/api/payment_intents", {
                amount: 100
            });

            console.log('check secret', clientSecret)

            const paymentMethodReq = await stripe?.createPaymentMethod({
                type: "card",
                card: cardElement || '',
                billing_details: {
                    name: `${name} ${surname}`,
                    email: 'frank@gmail.com',
                    address: {
                        city: 'sadf',
                        line1: 'sdfa',
                        state: 'lagos',
                        postal_code: '31434'
                    }
                }
            });

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
        } catch (err:any) {
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

    const handleFirstName = (value: any) => {
        setIsInputComplete((state) => ({
            ...state,
            firstName: !value
        }))
        setName(value)

    }

    const handleLastName = (value: any) => {
        console.log(value)
        setIsInputComplete((state) => ({
            ...state,
            lastName: !value
        }))
        setSurname(value)
    }

    return (
        <div>
            <form id="payment-form" onSubmit={handleSubmit}>
                <h3>Personal Information</h3>

                <div className="form-group">
                    <label htmlFor="FirstName">First Name</label>
                    <input
                        id="FirstName"
                        className="form-control"
                        type="text"
                        onChange={handleFirstName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input
                        id="LastName"
                        className="form-control"
                        onChange={handleLastName}
                        type="text"
                    />
                </div>
                {/* <div className="form-group">
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input id="PhoneNumber" className="form-control" type="text"></input>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email Address</label>
            <input id="Email" className="form-control" type="text"></input>
          </div>
           */}
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
                {/* <input
                        id="CreditCardNumber"
                        className="null card-image form-control"
                        type="text"
                    >

                    </input> */}

                <label htmlFor="ExpiryDate">Expiration date</label>
                <CardExpiryElement
                    options={{
                        style: elementStyles
                    }}
                    onChange={handleCardExpiry}
                    className="stripe-card-input" />

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
                {/* <div className="input-container">
                        <input id="SecurityCode" className="form-control" type="text"></input>
                    </div> */}

                {/* <div className="country-code-group form-group">
                    <label htmlFor="CountryCode">Country</label>
                    <div className="input-container">
                        <input id="CountryCode" className="form-control" type="text"></input>
                    </div>
                </div> */}

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