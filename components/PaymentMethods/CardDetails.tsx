import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';
import {DonationTest} from './Donation/index';

const { APP_STRIPE_PUBLIC_KEY } = process.env;
// let stripePromise: any;
// if (APP_STRIPE_PUBLIC_KEY) {
//     stripePromise = loadStripe(APP_STRIPE_PUBLIC_KEY);
// }

// QlzeHnqRWmoM9eV8tKwyaCnXISCFbLN1T3CAElaCrqhQQO1sK8
const stripePromise = loadStripe('pk_test_51LorkjDYz8H8zXUaIt4Wmaqzxh733VUpQxYgA3sTgF1abExg9FlO3v69yzp7v1EZG3RqVofn36ugrdNg6WCkme2B00eA2cKoyg');

const CardDetails = (props: any) => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };
    return (
        <Elements stripe={stripePromise} >
            <DonationTest />
        </Elements>
    )
}
export default CardDetails