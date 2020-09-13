---
title: 'Simple Stripe Payment'
date: '2020-07-06'
description: 'Buying online is more common than ever.'
author: Steve Fischer
tags: ['Stripe', 'Node.js', 'React']
---

In today’s article I am going to share how to do a simple payment through Stripe, a rather popular online payment processor.

After you sign up for the Stripe API, you will start out in the test portion of the site. You know you are working with your test API keys if they start with “sk_test..”

# Let’s get cracking!

There are two ways to handle the frontend portion of a Stripe checkout. You can either send the user to a Stripe checkout and later Stripe will redirect your user back to a success or failure route.

Or you can use the Stripe iframe, which is essentially loading Stripe's checkout into your own yet with more configurability.

I chose the latter, which for React is a package called Stripe Elements.

You throw Stripe Elements into a form and begin the checkout process when the user clicks the pay button.

Here is the code for a simple frontend React checkout using Elements:

```jsx
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('sk_test...')

const Checkout = props => {
  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const {
      data: { client_secret },
    } = await axios.post(API_ROOT + `/api/checkout/`, {
      quantity: price,
    })

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message)
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Elements stripe={stripePromise}>
        <CardElement options={cardElementOpts} />
      </Elements>
      <button>Pay $99</button>
    </form>
  )
}
```

I know there is a lot there, but I will unpack it.

First, we create a stripe promise by passing our public key into `loadStripe`. This promise is then passed as a prop called "stripe" to the `Elements` provider.

When the user inputs their credit card info and clicks pay, the `onSubmit` event handler first fetches a client secret from the backend, which is done by creating a payment intent and passing the resulting `client_secret`. Here is that code.

```javascript
const paymentIntent = await stripe.paymentIntents.create({
  amount: priceInCents,
  currency: 'usd',
  customer: user.customerId,
})

return res.send(paymentIntent.client_secret)
```

Charges in Stripe are done in the lowest denominator of the chosen currency. In this case, cents.

The client secret is then used on the frontend to call Stripe's `confirmCardPayment`, where you also pass in the card info from the Stripe UI called Stripe Elements.

On the backend, you will want to set it up so that a successful or failed payment calls a webhook.

I will not be covering that here, unforunately. But I do have a webhook article.

Once you get the results of `confirmCardPayment`, you can either show a success toast notifcation or give an error message informing the user what went wrong.

## Advice for those learning stripe

You can install the Stripe-CLI in your terminal, which will list out the sample repos that you can learn from.

You can brew install the Strip-CLI and to list the projects type `stripe samples list`.

Also, Stripe has a great YouTube channel where they have many video tutorials.
