# Server-side rendering

1. Store a list of users in DB.
   **Schema**

- `id` - Integer,
- `firstName` - String,
- `lastName` - String,
- `email` - String,
- `phoneNumber` - String,
- `age` - Integer

2. Create end points

**Endpoints:**

- `/` - return a html page with:
  - list of users from the database
  - each list item has the name of the use and a link to user specific end point
    Ex: `<li><a href="http://localhost:3000/:userId">userName</a></li>`
- `/:userId` - return html page with user details and link "Go back".
  - full name
  - age
  - email
  - phone number

3. Each page should has header and footer which are reusable components.
4. Use css to style your header and footer.

**NOTE:**
Use any templating engine.

- [Pug](https://pugjs.org/api/getting-started.html)
- [HALM](https://haml.info/)
- [Handlebars](https://handlebarsjs.com/)
- [Mustache](https://github.com/janl/mustache.js)

Or any other.
