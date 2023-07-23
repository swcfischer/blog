---
title: 'Django Polls App'
date: '2023-05-01'
description: 'A simple polls app, showcasing Django in action!'
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

We will have a Question and Choice model with a one-to-many relationship.

```python
import datetime
from django.db import models
from django.utils import timezone

# Create your models here.


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")

    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
```

After our models are made, we can create our migration and then run the migration. Keep in mind, Django has many ways to disect the migration, including viewing the raw SQL query.

```
python manage.py makemigrations polls

python manage.py migrate
```

In the `views.py`, we will create our responses. We will be using the generic detail view and list view. Which simplifies the logic quite a bit.

```python
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.views import generic
from django.utils import timezone


from .models import Question, Choice

# Create your views here.
class IndexView(generic.ListView):
    template_name = "polls/index.html"
    context_object_name = "latest_question_list"

    def get_queryset(self):
        return Question.objects.filter(pub_date__lte=timezone.now()).order_by("-pub_date")[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = "polls/detail.html"


class ResultsView(generic.DetailView):
    model = Question
    template_name = "polls/results.html"


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)

    try:
        selected_choice = question.choice_set.get(pk=request.POST["choice"])

    except (KeyError, Choice.DoesNotExist):
        return render(request, "polls/detail.html", {
            "question": question,
            "error_message": "You didn't select a choice"
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        return HttpResponseRedirect(reverse("polls:results", args=(question_id,)))


```

`template/polls/detail.html`

```html
<form action="{% url 'polls:vote' question.id %}" method="post">
  {% csrf_token %}
  <fieldset>
    <legend><h1>{{ question.question_text }}</h1></legend>
    {% if error_message %}
    <p><strong>{{ error_message }}</strong></p>
    {% endif %} {% for choice in question.choice_set.all %}
    <input
      type="radio"
      name="choice"
      id="choice{{ forloop.counter }}"
      value="{{ choice.id }}"
    />
    <label for="choice{{ forloop.counter }}">{{ choice.choice_text }}</label
    ><br />
    {% endfor %}
  </fieldset>
  <input type="submit" value="Vote" />
</form>
```

`template/polls/index.html`

```html
{% if latest_question_list %}
<ul>
  {% for question in latest_question_list %}
  <li>
    <a href="{% url 'polls:detail' question.id %}"
      >{{ question.question_text }}</a
    >
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No polls are available.</p>
{% endif %}
```

`template/polls/results.html`

```html
<h1>{{ question.question_text }}</h1>

<ul>
  {% for choice in question.choice_set.all %}
  <li>
    {{ choice.choice_text }} -- {{ choice.votes }} vote{{ choice.votes|pluralize
    }}
  </li>
  {% endfor %}
</ul>

<a href="{% url 'polls:detail' question.id %}">Vote again?</a>
```

`urls.py`

```python
from django.urls import path

from . import views

app_name = "polls"

urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path('<int:pk>/', views.DetailView.as_view(), name="detail"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote")
]

```
