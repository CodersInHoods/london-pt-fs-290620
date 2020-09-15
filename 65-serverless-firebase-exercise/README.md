# Serverless Firebase exercise

1. Create a firebase project.
2. Create a `bank` DB on Firebase(mock some data)
   `bank` should have:
   - employees;
     **Schema**
     - `id` - integer
     - `firstName` - string
     - `lastName` - string
     - `title` - string
   - clients;
     **Schema**
     - `id` - integer
     - `firstName` - string
     - `lastName` - string
     - `accountNumber` - integer
     - `balance` - integer
3. Create endpoints:

   - `/api/clients`
     - `GET` - returns a list of all clients;
     - `POST` - creates a new client;
   - `/api/client/:id`
     - `GET` - returns a client by ID;
     - `PATCH` - update an existing client;
     - `DELETE` - remove a client by ID;
   - `/api/employees`
     - `GET` - returns a list of all employees;
     - `POST` - creates a new employee;
   - `/api/employee/:id`
     - `GET` - returns a employee by ID;
     - `PATCH` - update an existing employee;
     - `DELETE` - remove a employee by ID;
   - `/` - return HTML file with 2 lists:

     - employees
     - clients

   - `/client/:id` - return HTML with client's details;
   - `/employee/:id` - return HTML with employee's details;

**NOTE:**
You can use [Consolidate](https://www.npmjs.com/package/consolidate) and Handlebars or [Express-handlebars](https://www.npmjs.com/package/express-handlebars) to render templates

4. Deploy your application to Firebase

**USEFUL LINKS**

1. [Firebase-tools](https://www.npmjs.com/package/firebase-tools)
2. [Firebase-admin](https://www.npmjs.com/package/firebase-admin)
3. [firebase-functions](https://www.npmjs.com/package/firebase-functions)
