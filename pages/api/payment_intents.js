import Stripe from "stripe";

// @ts-ignore
const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);
console.log('check intent res running secrete', stripe)

export default async (req, res) => {
  console.log('check intent res running')
  console.log('check intent res running', req)

  // if (req.method === "POST") {
    try {
      const { amount } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd"
      });

      console.log('check intent res', paymentIntent)
      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
      console.log(err)
    }
  // } else {
  //   res.setHeader("Allow", "POST");
  //   res.status(405).end("Method Not Allowed");
  // }
};