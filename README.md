## Kittens and Doggos Router Lab!

![](https://media.giphy.com/media/X6HWNLjWi9rw7PLVSO/giphy.gif)

### Introduction
In this lab you will create a full-stack CRUD app in which the user can interact with Kitten and Doggo resources.

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
- We've already created a `routes/` directory for your with a `kittenRouter.js` and `doggoRouter.js`.
- In each of these files, require `Router` with `const { Router } = require('express');`
- Define a `kittenRouter` and `doggoRouter` with `Router()`
- Add an INDEX (`/`) route for each resource; be sure to import the `Kitten` and `Doggo` models from the models file
- export the routers with `module.exports . . .`
- import the routers from server.js and mount them to the app under the `/kittens` and `/doggos` paths using `app.use`

Test that hitting the `/kittens` and `/doggos` endpoints returns an empty array

### Create
- add a `CREATE` route handler for each resource.
- You can verify that `CREATE` works with `axios` in a `scratch.js` file
- Also verify that the `INDEX` route returns a non-empty array after creating a few kittens and doggos

### Show
- Add a `SHOW` route handler for each resource. `SHOW` is a type of route that only shows one item, rather than all (`INDEX`)
- One `SHOW` route should be for ID (`/:id`); one should be for name (`/:name`)
- Verify that `SHOW` works with `axios`

### Delete
- Add a `DELETE` route handler for both the `Kitten` and `Doggo` resources
- Note how adding the same RESTful action is remarkably similar for each resource.  Appreciate this symmetry.

### Update
- Now add an `UPDATE` route handler to both resources

### THE FRONT END
Now that we have all our express routes set up and working, we can connect them to our front end so that users can easily interact with our app.

Reference the [lab](https://git.generalassemb.ly/sei-nyc-pandas/croquet_demo) from today on how to connect your express and react apps.
