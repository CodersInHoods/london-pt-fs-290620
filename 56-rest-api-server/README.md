# REST API server exercise

1. Use `users.json` to store your users.
2. Use `orders.json` to store users orders.
3. Create an express server with the following end points:

**User schema:**

```
{
    id: number,
    firstName: string,
    lastName: string,
    email: string
}
```

NOTE: you can use `uuid` package to generate unique ids.

**Endpoint** - `/users/`

- `GET` - Returns all users as a JSON object.
- `POST` - adds a new user. As a response returns new user.

**Endpoint** - `/user/:id`

- `GET` - Returns a user.
- `PATCH` - updates an existing user by id. As a response returns new user.
- `DELETE` - removes an existing user by id. As a response returns id of removed user.

**Order schema:**

```
{
    id: number,
    userId: number,
    productName: string
    quantity: number
}
```

**Endpoint** - `/orders`

- `GET` - Returns all orders.
- `POST` - adds a new order. As a response returns a new order.

**Endpoint** - `/orders?userId=:id`

- `GET` - Returns all orders by user id.

**Endpoint** - `/order/:id`

- `GET` - Returns an order.
- `PATCH` - updates an existing order by id. As a response returns modified order.
- `DELETE` - removes an existing order by id. As a response returns id of deleted order.


