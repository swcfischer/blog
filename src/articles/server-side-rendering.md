---
title: 'Server-Side Rendering'
date: '2021-06-21'
description: 'Setting up server-side rendering from scratch is no easy feat.'
author: Steve Fischer
tags: ['Frontend', 'Server-Side Rendering', 'React']
---

What if I told you loading a page as quickly as possible increases conversion rates?

What if I also told you web crawlers, such as Google, have a hard time indexing Single Page Apps (SPAs)?

What if I told you traditional React apps first serve up an HTML page, then request the app bundle at the bottom of the body tag.

After the initial HTML page is requested, the app bundle is then requested, and often there is a JWT grabbed from local storage to check if the user is authenticated -- and only finally you do your API calls for your data.

This is what I did on Asia Teach. (https://asia-teach.com)

As you can see, this is potentially 3 to 5 requests before content is visible to the user.

We want to have content immediately visible to the user after just one request.

**Enter Server Side Rendering**

To avoid the pitfalls I mentioned, we want to do all our data calls and render our React app in memory on the server, then send the html to the user.

But it doesn't stop there, we also need to add a bundle to our html because html is not reactive without javascript. So we include a bundle for our React app that will hydrate the app.

This means our data calls will happen again and the app will render again. However, we are defering loading our React app, which is good for getting content on the screen as soon as possible.

**Universal JavaScript, Isomorphic Javascript, Sever-Side Rendering**

There are two highfalutin terms that accompany server-side rendering: _Universal JavaScript and Isomorphic Javascript_.

For our use case, they both mean the same thing: JavaScript that is run on both the server and the client.

To accomplish this we have two different webpack configs, one for the server and one for the client.

**All Necessary Data Calls Server Side**

Using `react-router-config`, we can create an array of routes that map to components and also provide the data calls necessary for each out.

Below is an example of the routes array which you pass to renderRoutes, which is a named import from `react-router-config`.

```javascript
const routes = [
  {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UserListPage,
        path: '/users',
      },
      {
        ...AdminListPage,
        path: '/admins',
      },
      {
        ...NotFoundPage,
        path: '',
      },
    ],
  },
]
```

The App component serves as a layout component, so it does not have a path and has its own route property, which is an array of objects with components and paths.

The App component fetches the user's authentication status. This is all done serverside. Using `react-router-config` on the server allows us to use `react-router-dom` on the client, so we can use `Link`s to navigate are our SPA.

`react-router-config` also takes a context object, which can be used to know when a page is not found and do a redirect server side.

We can also use `react-helmet`, for generating unique titles, descriptions as well as other open graph tags, such as meta.

```jsx
export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      // Below is the context object that is passed in. After the app is
      rendered server side, we can check the context object
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  )
  // React Helmet lets us easily change our head tags for better SEO and descriptive links
  const helmet = Helmet.renderStatic()

  return `
    <html>
    <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    </head>
    <body>
      <div id="root">${content}</div>
      <!-- We serialize our redux store and grab it when we hydrate our app with our client bundle -->
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <!-- Client-Side Bundle -->
      <script src="bundle.js"></script>
    </body>
    </html>
  `
}
```

Here is a link to the full codebase. This was all part of a course on Udemy by Stephen Grider.
[GitHub Repo](https://github.com/swcfischer/server-side-rendering 'Server Side Rendering')
