---
title: 'Closures in React'
date: '2019-08-14'
description: 'A closure is a Javascript concept that makes life much easier when you know how to use it!'
author: Steve Fischer
tags: ['Frontend', 'React']
---

In Javascript, functions create their own scope. Moreover, a function in Javascript has access to its local scope and any outer scopes, including the global scope, which in our day and age is the Window object.

Each time a function is called, it is executed using the scope that it was **defined in**, as opposed to the scope it is executed in.

Here is an example of what I'm talking about:

```javascript
var outerScope = 'outerScope'
function scopeTest() {
  var innerScope = 'innerScope'

  console.log(outerScope)
  console.log(innerScope)
  console.log(anotherScope)
}

function anotherScopeTest() {
  var anotherScope = 'anotherScope'
  scopeTest()
  // outerScope
  // innerScope
  // ReferenceError: anotherScope is not defined...
}

anotherScopeTest()
console.log(innerScope)
// ReferenceError: innerScope is not defined...
```

As we can see in the example above, the function scopeTest has access to the outer scope, but not to the scope of anotherScopeTest. This is why we see a reference error when we try to console log the variable anotherScope.

As we would image, too, we get a reference error when we try to console.log the variable innerScope at the bottom. Having been declared inside the scope of scopeTest, it is not reachable by the global scope.

**_Now that we have covered scope a little. We will now tackle closures._**

A closure is when a scope that no longer exists is still referenced by another scope.

Below is an example:

```javascript
function createGreeting(greeting) {
  return function personalizeGreeting(name) {
    console.log(`${greeting}, ${name}?`)
  }
}

const greetingInEnglish = createGreeting('How do you do')
const greetingInFrench = createGreeting('Comment ca va')

greetingInEnglish('Steve')
// How do you do, Steve?
greetingInFrench('Stefan')
// Comment ca va, Stefan?
```

Above, we see that the argument passed into the function createGreeting is referenced in the return function personalizeGreeting. So even though greetingInEnglish has shed its outer function, it still has reference to the outer function's scope. Which is why it recalls the greeting that was passed in as an argument.

**_Now let's see this at play in React._**

This example is going to use a text input. In React a text input can be controlled or uncontrolled, which means it can either reside in the component's state or not.

If you have many text fields, you will want to re-use the logic. Here is a clever bit of code that allows you to write a re-usuable handler.

```javascript
handleChange = event => {
  const { name, value } = event.target

  this.setState({
    [name]: value,
  })
}
```

There are times, however, when you will want to include even more information. Here is one way to do that.

```javascript
handleChange = isChangeable => event => {
  if (isChangeable) {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }
}
```

The above code is taking advantage of the closures. You will call the function in your render method like so.

```javascript

  render() {
    return (
      <React.Fragment>
        {/* ... other code ... */}
        <input name="username" value={this.state.username} onChange={this.handleChange(true)} />
      </React.Fragment>
    )
  }

```
