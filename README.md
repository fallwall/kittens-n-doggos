## Kittens Router Lab!

![](https://media.giphy.com/media/X6HWNLjWi9rw7PLVSO/giphy.gif)

### Introduction
In this lab you will create a full-stack CRUD app in which the user can create, read, and update itty bitty kittens.

### Set up
- clone down this repo
- run `npm install`
- `createdb pets_lab_db`
- `npm run resetDb`
- `npm start` to start your back end server
- run `create-react-app client` to create your front-end React app
- `cd` into clint and then `npm start` -- this will start your front end server on another port


### THE BACK END
We will set up our express routes before handling them on the front end.

### The Router
- We've already created a `routes/` directory for your with a `kittenRouter.js`.
- In `kittenRouter`, require `Router` with `const { Router } = require('express');`
- Define a `kittenRouter` with `Router()`
- Add an INDEX (`/`) route; be sure to import the `Kitten` model from the models file
- export the router with `module.exports . . .`
- import the router from server.js and mount it to the app under the `/kittens` path using `app.use`

Test that hitting the `/kittens` endpoint returns an empty array

### Create
- add a `CREATE` route handler.
- You can verify that `CREATE` works with `axios` in a `scratch.js` file
- Also verify that the `INDEX` route returns a non-empty array after creating a few kittens

### Show
- Add a `SHOW` route handler. `SHOW` is a type of route that only shows one item, rather than all (`INDEX`)
- One `SHOW` route should be for ID (`/:id`); one should be for name (`/:name`)
- Verify that `SHOW` works with `axios`

### Delete
- Add a `DELETE` route handler.
- Note how adding the same RESTful action is remarkably similar for each resource.  Appreciate this symmetry.

### Update
- Now add an `UPDATE` route handler. Reference today's [update lesson](https://git.generalassemb.ly/sei-nyc-pandas/update-lesson) if you forget how to do this.

### THE FRONT END
Now that we have all our express routes set up and working, we can connect them to our front end so that users can easily interact with our app.

- Reference the [lab](https://git.generalassemb.ly/sei-nyc-pandas/croquet_demo) from today on how to connect your express and react apps.
- Think about how you want to structure this app. What are your components? Where are you creating your functions? What is held in state? You've done LOTS of updating in React, so reference old homeworks and projects if you need a refresher! The main elements you need are:
  - a form rendered on the page
  - functions that handle the form change and form submit. the form submit can either use axios call functions from an `api-helper.js` file or directly in the components
  - in state: a formData object; a kittens array
  - 'edit' and 'delete' buttons on each rendered item

### BONUS
- Now do the same thing but for Doggos!! Everything should be quite similar, but think about how you want to implement this extra resource in your React app.

