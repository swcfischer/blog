---
title: 'Password Encryption With Bcrypt'
date: '2020-02-15'
description: "Don't let the terminology surrounding password hashing scare you!"
author: Steve Fischer
tags: ['Backend', 'Node.js']
---

It's hard to know where to start with password encryption. One of the tripping points &#151 I think &#151 is that so many developers rely on all-in-one services to do their password encryption. For Ruby &#151 a backend scripting language &#151 there is [Devise](https://github.com/heartcombo/devise 'Devise'). For Node.js, there is [Passport](http://www.passportjs.org/ 'Passport').

These services wave away the grunt work of doing password encryption and leave the developer knowing how to use the tool, rather than giving him or her a deeper knowledge of the process at hand.

This is not to say that Passport or Devise are bad options. I have used them both in projects. My scaled-down Reddit-clone uses [Devise](https://github.com/heartcombo/devise 'Devise'). And I have a Node.js project that never went to production that uses [Passport](http://www.passportjs.org/ 'Passport').

**_Why Use Bcrypt then?_**

There are many different ways to hash a password. [Bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme 'Bcrypt') is just one of them.

If you read the [Wikipedia Page](https://en.wikipedia.org/wiki/Bcrypt 'Bcrypt Wiki'), you will hear words like Blowfish and the term rainbow table; however, those are not necessary to understanding Bcrypt.

Of the many hashing functions &#151 MD5, SHA1, SHA2, SHA3 &#151 Bcrypt stands apart because it slows down bruteforce attacks. With computing power always increasing, bruteforce attacks become a real danger.

Someone online could pay \$300 an hour for a super-computer cluster that could bruteforce crack your password in a couple seconds.

However, with Bcrypt it slows down the ability to do bruteforce attacks through its _work factor_, which you control.

For example, MD5 takes less than a microsecond to hash the password `yaaa`; however, Bcrypt takes .3 seconds when using a workfactor of 12.

So instead of cracking a password every 40 seconds, it would take 12 years or so.

Now, I am going to provide the code to hash a password.

There are two different techniques. I am going to give the one I prefer first:

```javascript
// saltRounds = 10
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
})
```

Or

```javascript
bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    // Store hash in your password DB.
  })
})
```

To compare the password when a user logs in:

```javascript
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
  // result == true
})
```

[A great article that explains the utility of Bcrypt in laymans terms](https://codahale.com/how-to-safely-store-a-password/ 'Coda Hale')
