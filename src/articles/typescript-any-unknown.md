---
title: 'Any versus Unknown'
date: '2020-12-20'
description: 'There are such things as supertypes and subtypes in Typescript, "any" is the topmost type encompassing every type.'
author: Steve Fischer
tags: ['TypeScript', 'Node', 'JavaScript']
---

The comparison of `unknown` and `any` showcases some core concepts of TypeScript and shows how TypeScript, a superset of JavaScript, comes in handy.

In this article we are going to do some lefthand typing in TypeScript. What does that mean exactly?

Lefthand typing is explicit type annotation (to the left of the equal sign); whereas righthand typing is type inference, meaning TypeScript is placing a type on the variable behind the scenes.

Check out the example below:

```ts
// lefthand typing
const greet = (name: string): string => {
  return `Hi there, ${name.toUpperCase()}`
}
greet('steve')
// Hi there, STEVE

// righthand typing
const greetImplicit = name => {
  return `Hi there, ${name.toUpperCase()}`
}
greetImplicit('Dave')
// Hi there, 'DAVE
```

In `greetImplicit` TypeScript infers that the parameter `name` is a string; otherwise, we would not be able to call the method `toUpperCase`.

**_Let's see Any in action!_**

As a programmer, there will be times where you will have to add a feature to a utility function. This may very well mean you must expect another type to be passed into the function.

Let's say you don't know what will be passed into this utility function, but you have been told to handle strings and arrays.

This means, that you must expect really _anything_ to be passed to the function.

Below is our hypothetical utility function:

```ts
const getLength(param: any) => {
  return param.length
}

```

In this first example, we return the length property of the parameter `param`.

This is possible when we use the `any` type because `any` ecompasses all types, so the property `length` does not cause a problem.

Now, if we had the same example using `unknown`, we would get a complaint from TypeScript.

```ts
const getLength(param: unknown) => {
  return param.length
  // length is not a property of unknown
}
```

**_Control Flow and Type Guards_**

Unknown forces us to be cautious. In order to access the length of the `param`, we must use a Type Guard.

If we check the type of `param`, we will have narrowed down the possibilities of what `param` is and TypeScript will let us use methods on the variable.

This is JavaScript at the end of the day. The type guard will show up in your compiled code; however, TypeScript makes use of it, too.

```ts
const getLength(param: unknown) => {
  if (typeof param === 'string') {
    return param.length
  }
}
```

This type check means inside the `if` block, we know for sure that param is a string and can therefor access the `length` property.

Unlike `any`, `unknown` does not let us access just anything on `param` without type checking.

With `any`, we could attempt to access an object inside `param` and call one of its methods.

All without any complaint!

Here is the code you end up writing for your employer:

```ts
const getLength(param: unknown) => {
  if (typeof param === 'string' || Array.isArray(param)) {
    return param.length
  }
  throw new Error('This function only accepts strings and arrays!');
}

```
