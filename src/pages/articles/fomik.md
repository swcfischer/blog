---
title: 'Formik, the formula for forms'
date: '2020-02-17'
description: 'Formik is a form library for React that is meant to simplify form state management and validation.'
author: Steve Fischer
tags: ['Frontend', 'React']
---

In the world of Javascript &#151 and more precisely, React &#151 one form library has shown itself to do be straightforward and forward-thinking.

Forms have come a long way since Web 1.0. There is a lot of leeway when it comes to forms &#151 forms used to have a prop on the html tag of **action**, which would point to the endpoint whereby the form contents would be recieved.

## Nowadays, forms are much more than that.

---

Forms have datepickers, phone numbers, dropdowns, addresses and all sorts of other fun, zaney interactive elements that require extra care from the developer.

And that's exactly why there was a need for this library &#151 due to the un-standardized way of handling forms.

I've used this library in several projects already and it is quickly becoming industry standard.

##Next, I will _show_ you how to do a simple form in formik.

---

Like I said, Formik is forward-thinking, so the library uses React hooks.

Here is a simple example. Keep in mind that Formik is your state management for your form (Formik uses React Context), as well as your form handlers and validation.

This first example is just a newsletter, with no validation and a fake api call when the user submits.

```jsx
const NewsLetter = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      // api call
      // axios.post('/newletter/', values);
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
```

Notice that you do not use `useState` or `this.setState`. Formik has its own state management.

Right now you don't quite see the utility of Formik. It's called building suspense :) .

So let's turn it up a bit. This next example we will have validation that will run after the user clicks off the form element &#151 that is, touches it &#151 which is the vocabulary Formik uses.

```jsx
```
