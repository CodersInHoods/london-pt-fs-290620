# MySQL exercises

#### Requirements:

1. Rebuild previous exercise with `sequelize`.
2. If table `orders` do not exist in `store_db`, create it.

###### `orders` table specification:

- `id` - `INT AUTO_INCREMENT PRIMARY KEY`;
- `productName` - `TEXT`;
- `quantity` - `INT`;
- `userId` - `INT`;

3. With express create the next end points to add/update/delete data in `orders` table.

- `/api/orders`
  - `GET` - select and return all orders from `orders` table;
  - `POST` - add a new order to `orders` table;
- `/api/order/:id`
  - `GET` - return the order by id;
  - `PATCH` - modify the order by id;
  - `DELETE` - delete the order by id and return the deleted user id;
- `/api/order?userId=`
  - `GET` - return the orders by userId;

#### Tools to install:

- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [GUI](https://tableplus.com/)
- [Postman](https://www.postman.com/downloads/)
- [Sequelize](https://sequelize.org/)

#### USEFUL LINKS:

- [MySQL Cheatsheet](https://devhints.io/mysql)
- [Sequelize setup](https://sequelize.org/master/manual/getting-started.html)
- [Creating tables with sequelize](https://sequelize.org/master/manual/query-interface.html)
- [Create models in sequelize](https://sequelize.org/master/manual/model-basics.html)
- [Model queries](https://sequelize.org/master/manual/model-querying-basics.html)
