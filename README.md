# Fluxy Social Media API!

This is a simple Social Media API that allows users to sign up, log in, create, read, update, and delete blogs. The API has two collections, User and Blog. Users can sign up by providing their name, email, and password. Once signed up, users can log in

The API is built using Node.js, Express, and MongoDB. It follows RESTful principles and returns responses in JSON format.

## Installation
1. Clone the Repo https://github.com/Swift420/Fluxy-API

2. Install the dependencies
``` Javascript
cd api
npm install
```
3. Start the server:
```Javascript
npm start
```


## End Points

### Users
 - **GET /api/users/** - Get All Users
 -  **POST /api/users/signup** - Sign up a user
 - **POST /api/users/login** - Login user
 - **GET /api/users/getUser** - Get a single User 

### Blogs
 - **GET /api/blog/** - Get All Blogs
 -  **GET /api/blog/singleBlog/:id** - Get Single blog by ID
 - **POST /api/blog/add** - Add a new Blog
 - **PUT/api/blog/update/:id** - Update a blog by ID
 - **DELETE/api/blog/delete/:id** - Delete a blog by ID
 
## User Schema

```JSON
{ 
"name": "string", 
"email": "string",
"password": "string",
"blogs": []
}
```
## Blogs Schema

``` JSON
{
  "id": "string",
  "title": "string",
  "description": "string",
  "image": "string"
  "userId": User
}

```


