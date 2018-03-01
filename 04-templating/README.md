Class 4: Templating
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

* Templates have some advantages over direct DOM manipulation. Leverage those strengths in the blog by adding in a templating library! We use templating to abstract away the tiresome work of DOM rendering, and this practice is applied in many front-end libraries and frameworks.*

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->
* [Handlebars.js Official Documentation](http://handlebarsjs.com/) (Reference)
* [Learn Handlebars.js in 10 Minutes tutorial](http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/) (Essential)

## Review/Discussion
- Pair Programming
- ?

## Daily Plan
<!-- Below is a template. Please delete, change, update as you see fit... -->
- Code Review
- New Material
- Code Demos
- Lab Preview

## Learning Objectives
* Understand how templates offer a **declartive** way of coding and
the differences between **imperative** code that does direct DOM manipulation. Identify different approaches to reusable HTML templates
* Effectively use templates to present user-entered (or server-provided) data (methods on the Handlebars object).
* Distinguish between the different Handlebars expression types ( **{{}}** vs **{{{}}}** ).
* Modify and style typographic components (**serif, san-serif fonts, font-size, font-family, color, font-weight**, etc)

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> Created an HTML element to use as a template. </li><li> Used jQuery to clone our template and create new elements.</li><li> Used string concatenation to concatenate a variable to a string. </li></ul> | <ul><li> Use Handlebars.js to compile our template. </li><li> Use ES2015 template literals to interpolate a variable to a string.  </li></ul> |

#### HTML Templates
* Template systems simplify the tedious task of creating elements one by one
    * They provide placeholders for dynamically set data
* Handlebars.js is a compiler 
    * It takes an HTML template, compiles it into a JS function which takes an object and returns a filled out HTML template
    * Four steps
        * include the library
        * create an HTML template
        * compile the template
        * fill the template with data


