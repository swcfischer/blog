---
title: 'Django Framework'
date: '2020-06-29'
description: 'A Python web framework that has great conventions.'
author: Steve Fischer
tags: ['Python', 'Backend']
---

Python is a productive language. Although the language appears to be the work of one Dutchman who took a liking for the series Monty Python, the language has grown to a substantial size. It has a peculiar syntax that seems rather arbitrary.

But once you dig into it, you find it sticks pretty well. :)

It has a rather interesting aspect in regard to functions: you can pass in arguments in order or name them. And you can spread these argument types into named variabals.

### Now for Django, a fullstack Python framework.

To create an app using the scaffolding tool, type:

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
