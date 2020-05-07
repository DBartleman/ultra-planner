# Frontend 

* Login page
  * Redirects to home once logged in

* Homepage (if logged in)
  * Navbar (elements for search, user profile, settings)
  * List of tasks

# Back-End 

## Homepage

* GET / - returns list of all tasks for current user
* Get /?=query - returns tasks matching a query string
* POST / - creates a new task linked to current user

## Users

* POST /users - creates a user
* GET /users/:id - returns a user by ID
* DELETE /users/:id - deletes a user by ID
* POST /users/token - gets JWT token for user

## Tasks

* GET /task/:id - returns given task by ID (user clicks on task on front end)
