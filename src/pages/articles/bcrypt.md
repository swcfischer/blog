---
title: 'Password Encryption With Bcrypt'
date: '2020-02-15'
description: 'A closure is a Javascript concept that makes life much easier when you know how to use it!'
author: Steve Fischer
tags: ['Backend', 'Node.js']
---

It's hard to know where to start with password encryption. One of the tripping points -- I think -- is that so many developers rely on all-in-one services to do their password encryption. For Ruby -- a backend scripting language -- there is Devise. For Node.js, there is Passport.

These services wave away the grunt work of doing password encryption and leave the developer knowing how to use the tool, rather than a deeper knowledge of the process at hand.

This is not to say that Passport or Devise are bad options. I have used them both in projects. My scaled-down Reddit-clone uses Devise. And I have a Node.js project that never went to production that uses Passport.

**_Why Use Bcrypt then?_**

There are many different ways to hash a password. Bcrypt is just one of them.

If you read the Wikipedia page, you will hear words like Blowfish and the term cipher; however, those are not necessary to understanding Bcrypt.

Of the many hashing algorythms, Bcrypt stands apart because it slows down bruteforce attacks. With computing power always increasing, bruteforce attacks become a real danger.

Someone online could pay \$300 and hour for a supercomputer cluster that could bruteforce crack your password in a couple seconds.

However, with Bcrypt it slows down the ability to do bruteforce attacks because
