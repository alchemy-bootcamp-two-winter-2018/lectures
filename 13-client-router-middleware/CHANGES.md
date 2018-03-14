# Changes

## Server

### PUT & DELETE

Add routes:
* `PUT` route to update resource (RETURNING full entity)
* `DELETE` route to delete a resource. respond with `{ removed: <true or false> }` based on `result.rowCount`

### Admin Middleware

* Check for token in query string, is it correct passphrase?
* Create `GET` `/api/auth` for explicit validation of token (uses middleware)
* (After action is tested with client, enable on route)

### Common Error Handling Middleware

* Goes at the end
* Make all the routes us `next`. Use `{ code: , message: }` for custom

## Client

### Use context `ctx`

Same middleware flow! For the client side routes that first get data:

* data fetching puts values on `ctx` and call `next`, 
* views read values from `ctx`

### Common reset view

* Use generic handler `*` and reset view from `app.js`
* don't forget to call `next()`!
* Remove code from views

### Delete

* Create `Todo.delete`
    * Use `id`, callback
    * Not entirely consistent with `ctx, next`, but close!
* Add a delete button to the detail view
    * Make part of view or template depending on where 
* Wire up in view
* Use `confirm`
* Call `Todo.delete`
* Navigate to `page('/')`

### `handleAction` pattern

* Use `const` arrow functions for actual response
* Use closures to pass data from init

### Auth View

* New `auth-view.js` for "authenticating"
* Standard

