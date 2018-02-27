## **Module 1: The View**
# Class 2: jQuery and the DOM + some RWD

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Announcements
1. Agile & MVC
1. jQuery
1. Lab Prep

### Announcements
* Feedback
    * Project grades: group submission graded as a whole.
<hr></hr>

## Learning Objectives
- Describe the different parts of the MVC design pattern.
- Include the jQuery library using a CDN or including it locally.
- Describe the pros and cons of using jQuery.
- Perform DOM manipulations using `append`, `remove`, `clone`, `data`, `html`, `text`.
- Traverse the DOM tree, with `parents`, `children`, `find`.
- Differentiate between certain methods & the process of chaining.
- Include JavaScript files accounting for dependencies by loading `<script>` tags in order.

<hr></hr>

## Notes

#### Agile and MVC
* Agile Web Development
  * [Infographic](https://toggl.com/developer-methods-infographic)
  * Compared with the ‘Waterfall’ process
  * Some ways to implement agile:
    * Daily Sprints
    * ‘MVP’ & ‘Stretch’ Goals
    * User (or project stakeholder) stories & Developer stories
    * Iterative Development
    * Agile buzzwords (backlog, sprint demos, retrospective, etc)

* MVC
  * Model, View, Controller design pattern
  * Why do developers care about separating these concerns?
  * What are some other architectural design patterns?
    * MVP: Model View Presenter
    * MVVM: Model View View Model
    * Component Based Architecture
  * What does each MVC layer do?
  * How does each MVC layer tie together in a modern web application?
    * Model = our data as objects
    * View = the DOM
    * Controller = logic around user's interaction and the model
  * Additional resources:
    * [MVC Architecture](https://developer.chrome.com/apps/app_frameworks)
    * [Learning JavaScript Design Patterns: MVC](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvcmvp)

#### DOM & jQuery
* Overview
  * Including jQuery from CDN/locally sourced
  * Basic jQuery syntax
  * Waiting for DOM load using `$(document).ready()`;
  * Basic CSS selector review - how this works with jQuery selection
    * Each jQuery selection attempts to return a set of matched elements, and if it cannot, will return an empty array-like object.
  * Chaining methods
    * Why are we able to chain in jQuery?
      * Each method returns a jQuery object
  * Understanding the "getter" and “setter” differences between single and double parameter jQuery method calls
    * Ex:`$(‘.el’).attr(‘some-data-attribute’)`- gets the attribute
    * Ex:`$(‘.el’).attr(‘some-data-attribute’, ‘some val’)`- sets the attribute
* Demo
    * Using jQuery to render our spaceship listings
        * new HTML attribute! `data-KEY="VALUE"`
        * new HTML element! `<template>`
            * Bonus reading for template: https://www.html5rocks.com/en/tutorials/webcomponents/template/
        * new JS array method! `.forEach()`

####  Lab Prep
* Walk through today's TODOS


## Readings
* [MVC with Legos](https://realpython.com/blog/python/the-model-view-controller-mvc-paradigm-summarized-with-legos/) (Essential)
    * Note that the code examples are in Python! Don't worry about what's going on in the code, we'll have our own examples.
* Javascript & jQuery: pages 293-325
  * (Context: 293-301; Essential: 310-325; Reference: 302-309)