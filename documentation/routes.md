# Frontend 

* Login page
  * Redirects to home once logged in

* Homepage (if logged in)
  * Navbar (elements for search, user profile, settings)
  * List of tasks

# Back-End 

## Tasks

* GET /tasks        - returns all tasks in all lists for current user
* GET /tasks?=query - returns tasks matching a query string
* GET /tasks/:id    - returns given task by task ID (user clicks on task)
* POST /tasks       - creates a new task linked to current user
* PATCH/tasks       - updates task name, description, isCompleted, associated gif, etc
* DELETE /tasks     - deletes a task

## Lists (named collections of tasks)

* GET /lists        - returns list of all tasks for current user
* GET /lists?=query - returns lists matching a query string
* GET /lists/:id    - returns all tasks in one list by list ID (user clicks on list)
* POST /lists       - creates a new list linked to current user
* PATCH/lists       - updates list name, description, isCompleted, associated gif, etc
* DELETE /lists     - deletes a list

## Users

* POST /users       - creates a user
* GET /users/:id    - returns a user by ID
* DELETE /users/:id - deletes a user by ID
* POST /users/token - gets JWT token for user
