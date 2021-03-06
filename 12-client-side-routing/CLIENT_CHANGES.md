Client
===

## Use consistent file naming

Both `camelCase` and `kebob-case` are common for JavaScript. However, we don't want a 
mix between the client and server repo. `kebob-case` is more common for node projects,
so we will go with that.

* Rename camelCase files to kebob-case
* Don't forget to change the src and href in script and link tags!

## Manage Environment and Config

* Test if production using `window.location.protocol === 'https:'`; 

* Create a top level script that sets variable based on dev/prod:
    * `API_URL`
    * `ROUTER_OPTIONS` 

* Initialize module here. Because we are going to call our main page `app.js`,
let's change the name to `window.module`. Each view file needs to be updated to pass
in this variable to iife: 

```js
(function(module){
    /*...*/
})(window.module);
```

## Organize `index.html`

* views
    * `<section id="view-id" class="view">`
* templates
    * `<script id="todo-detail-template" type="text/x-handlebars">`
* scripts
    * config
    * vendor
    * your scripts
        * `app.js` last

## Views and init methods

* A view file can still manage more than one view
* Simplify init method names
    * For main view, use `init`
    * For secondary view, use init and name: `initNew`, `initDetail`
* Move templates to view (they were thin anyway)
* Each view `init` method:
    * Call `resetView` 
    * Show _this_ view (can be delayed to later in the method)
    * Undo anything from previous call to this init
        * `empty()` templated content
        * call `off()` on event handlers
    * Populate any templated content
    * Wire-up events

## Models

* Move template to view
* Use `Model.create` instead of instance method
    * View passes in raw data from the form

## Routing with Page.js

1. Add script to `index.html`. Use cdn, or rawgit if you want to view source
1. Our page initialization is per view, so we no longer use init script in `index.html`.
1. Add `app.js` file at root of `scripts` folder.
    1. Common view handling, like toggle menu, can live here
    1. Reference the needed models and view from `module`
    1. For each view, register a handler function for the client-side route
        1. Fetch data, if needed
        1. Call view init (passing to callback if fetching data)
    1. Call `page(ROUTER_OPTIONS);` to initialize

## Error View

1. Create an error view and template. In model `catch`, call errorCallback that
    1. consoles the error
    1. inits the error view with the error


