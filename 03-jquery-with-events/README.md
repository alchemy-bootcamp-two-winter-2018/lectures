## **Module 1: The View**
# Class 3: jQuery and Events 

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Announcements
1. Code Review
1. ES6
1. jQuery events
1. Lab Prep

### Announcements
* [Learning Roadmap](https://github.com/kamranahmedse/developer-roadmap)
    * Don't get overwhelmed! Get excited!
* Pair programming tips and tricks for a great experience
    * TAKE. BREAKS.
    * Ask your pair for feedback.
    * Bring wine and cheese. (This is a joke.)
    * Give each other time.
    * Approach your partner as if they know things you don't (because they do!).
    * Have a shared goal of finding, naming, listing the holes in your knowledge so that you can fill 'em! This is a learning environment, after all.
    * Other resources:
        * [Everything I learned about pairing...](https://collaboration.csc.ncsu.edu/laurie/Papers/Kindergarten.PDF)
        * [How To Pair](https://medium.com/@jdxcode/how-to-pair-program-d6741077e513)
            * While you are pairing, the number one thing to keep in mind is “Is my pair engaged?” or “Am I engaged with my pair?”
            * Don’t just zone out and especially don’t start checking your email or something. If anything, go for a 5 minute walk to reset. You’ll be damaging the process itself if you feign attention.
            * Ask a lot of questions about the code “hmm, so what would the value of this variable be here?”, “We’re sure this is returning a boolean, right?” 
        * [Communication Styles](http://keeleyhammond.com/communication-styles/)

<hr></hr>

## Learning Objectives
* Create event listeners using jQuery's `$.on()`
* Distinguish when to use event delegation.
* Select and target HTML elements using the `data` attribute.


<hr></hr>

## Notes
* Code Review

* ES6 
    * template literals
        * ```js
            const excited = '!!!!!!!';
            const oldWay = 'We used the + sign to concat strings and variables' + excited;
                // We used the + sign to concat strings and variables!!!!!!!
            const newWay = `We use backticks instead of quotes${excited}, plus the dollar sign and curly braces${excited}`;
                // We use backticks instead of quotes!!!!!!!, plus the dollar sign and curly braces!!!!!!!
    * arrow functions
        * ```js
            let dog = {
                name: 'steve',
                rename: function (newName) {
                    this.name = newName;
                },
                changeName: (newName) => {
                    this.name = newName;
                }
            };

            dog.changeName('boop');  // won't change dog.name

* jQuery Events
    * Review
        * Attach event listeners to HTML elements
            * ```js
                const cloudDiv = document.getElementById('cloud');
                cloudDiv.addEventListener('click', cloudClickHandler);
        * Events are handled by callback functions (our event handlers) (`cloudClickHandler` in the above example)
        * Event handling can be used to override default behavior (like link click, or form submit)
            * Using `event.preventDefault()`
        * `this` is the element that triggered the event
            * Inside of `cloudClickHandler`, `this` refers to `cloudDiv`
        * Vanilla JS events recap (pg. 244)
    * jQuery events
        * Same thing! Different syntax.
        * With jQuery, event listeners are registered with `$element.click()` (with the event name) or `$element.on()`
            * ```js
                const $cloudDiv = $('#cloud');
                $cloudDiv.click(cloudClickHandler);
                $cloudDiv.on('click', cloudClickHandler);
        * With jQuery, you can trigger an event on an element in your script: `$cloudDiv.click()`
        * Event delegation
            * Which element should listen for the click?
            * How to add event listeners to dynamically created and inserted elements?
        * Examples: click, change/input, scroll, ready
* Lab Prep
    * Walk through new file: `articleView.js`


## Readings

* JavaScript & jQuery: pages 326-366
  *(Context: 354-361; Essential: 322-353; Reference: 362-366)*