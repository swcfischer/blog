---
title: 'Stripe Webhooks'
date: '2020-07-31'
description: 'Communication with Stripe and your app.'
author: Steve Fischer
tags: ['Stripe', 'Node.js', 'stripe-cli']
---

There are two main ways for an application to communicate with another. The first is polling, which is like knocking on the application’s door every 10 minutes to see if they are home.

The second is webhooks, which is like the other application will sending you a text message when he or she gets home.

In the case of Stripe, I needed Stripe to tell me when a purchase was made so that I could add certain data to my database.

I needed this to happen after the payment was processed by Stripe.

With a webhook, you can specify what type of event you want to listen for. So in my case it was `payment_intent.succeeded`.

After that event was triggered, Stripe will call the webhook endpoint that you specify in the Stripe Dashboard.

You webhook endpoint must send a response with the status of 200, so that Stripe knows to stop hitting the endpoint.

Here is an example endpoint:

```js
app.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }),
  (request, response) => {
    let event

    try {
      event = JSON.parse(request.body)
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`)
    }

    // Handle the event
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      response.json({ received: true })
    } else {
      return response.status(400).end()
    }
    // Return a response to acknowledge receipt of the event
)
```

If Stripe does not receive a response it will eventually notify you in the Dashboard.

To test you webhook endpoint locally, you will need to install the `stripe-cli`.

I’m on a Mac, so I used Homebrew to install it.

```
brew install stripe/stripe-cli/stripe
stripe login
```

You are going to want to open two terminal tabs. In one run:

```
stripe listen --forward-to localhost:5000/webhook
```

In another run:

```
stripe trigger payment_intent.succeeded
```

You should see that your endpoint is called!
