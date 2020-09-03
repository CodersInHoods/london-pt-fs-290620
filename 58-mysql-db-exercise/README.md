# MySQL exercises

#### Requirements:
1. If db `store_db` do not exist, create it.
2. If table `users` do not exist in `store_db`, create a table `users`.
###### `users` table specification:
- `id` - `INT AUTO_INCREMENT PRIMARY KEY`;
- `firstName` - `VARCHAR(255)`;
- `lastName` - `VARCHAR(255)`;
- `age` - `INT`;
3. With express create the next end points to add/update/delete data in `users` table.
- `/api/users`
    - `GET` - select and return all users from `users` table;
    - `POST` - add a new user to `users` table;
- `/api/user/:id`
    - `GET` - return the user by id;
    - `PATCH` - modify the user by id;
    - `DELETE` - delete the user by id and return the deleted user id;
- `/api/users?name=`
    - `GET` - return the user by name;


#### Tools to install: 
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [GUI](https://tableplus.com/)
- [Postman](https://www.postman.com/downloads/)

#### USEFUL LINKS:

- [MySQL Cheatsheet](https://devhints.io/mysql)