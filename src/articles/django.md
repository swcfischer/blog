---
title: 'Django Part 1'
date: '2022-10-01'
description: 'A Python web framework that has everything out of the box.'
author: Steve Fischer
tags: ['Python', 'Backend']
---

# Python is a productive, high-level language.

Although Python appears to be the work of one [Dutchman](https://gvanrossum.github.io/) -- who took a liking to the series Monty Python -- the language has become a popular choice for web development and programming in general.

Python has a peculiar syntax that seems arbitrary at first. But once you dig in, you find it easy to read and remember.

> It has a rather interesting aspect in regard to functions: you can pass in arguments in order -- or name them. And you can spread these argument types into named variables.

There exist two popular web development frameworks for Python, the first is [Django](https://docs.djangoproject.com/en/4.1/), which I will be covering in this article and the second is [Flask](https://flask.palletsprojects.com/en/2.2.x/).

# Django, a fullstack Python framework.

After installing Django, create an app using the scaffolding tool:

```
django-admin startproject your-proj-name
```

You must have Django installed. You can check by typing:

```
python -m django --version
```

You can run your server by typing:

```
cd your-proj-name
django-admin manage.py runserver
```

Next you will want to try the scaffolding tool for creating a feature.

```
django-admin manage.py startapp polls
```
