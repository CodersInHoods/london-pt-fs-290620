const fetch = require("node-fetch-polyfill");
const fs = require("fs");

document.body.innerHTML = ``;

const URL = "http://localhost:3001";

describe("Endpoint - /users", () => {
  test("should return all users on GET request", async () => {
    const data = fs.readFileSync("./db/users.json");
    const users = JSON.parse(data);

    const fetchedData = await fetch(`${URL}/users`).then((res) => res.json());

    expect(fetchedData).toEqual(users);
  });

  test("should add a new user to DB and return added user on POST request", async () => {
    const oldUsers = JSON.parse(fs.readFileSync("./db/users.json"));

    const fetchedData = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Test first name",
        lastName: "Test last name",
        email: "test@example.com",
      }),
    }).then((res) => res.json());

    const newUsers = JSON.parse(fs.readFileSync("./db/users.json"));

    expect(fetchedData.email).toEqual("test@example.com");
    expect(oldUsers.length).toEqual(newUsers.length - 1);
  });
});

describe("Endpoint - /user/:id", () => {
  test("should return user by id", async () => {
    const fetchedData = await fetch(`${URL}/user/2`).then((res) => res.json());

    expect(fetchedData.id).toEqual(2);
  });

  test("should update user by id", async () => {
    const oldUsers = JSON.parse(fs.readFileSync("./db/users.json"));
    const selectedUser = oldUsers[oldUsers.length - 1];

    const updatedUser = await fetch(`${URL}/user/${selectedUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Random name",
      }),
    }).then((res) => res.json());

    const updatedUsers = JSON.parse(fs.readFileSync("./db/users.json"));
    const newSelectedUser = updatedUsers.find(
      (user) => user.id === updatedUser.id
    );

    expect(selectedUser.firstName).not.toEqual(newSelectedUser.firstName);
  });

  test("should delete user by id", async () => {
    const oldUsers = JSON.parse(fs.readFileSync("./db/users.json"));
    const selectedUser = oldUsers[oldUsers.length - 1];

    const removedUserId = await fetch(`${URL}/user/${selectedUser.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    const newUsers = JSON.parse(fs.readFileSync("./db/users.json"));
    const isDeleted = !newUsers.find((user) => user.id === removedUserId);

    expect(isDeleted).toBe(true);
  });
});

describe("Endpoint - /orders", () => {
  test("should return all orders on GET request", async () => {
    const data = fs.readFileSync("./db/orders.json");
    const orders = JSON.parse(data);

    const fetchedData = await fetch(`${URL}/orders`).then((res) => res.json());

    expect(fetchedData).toEqual(orders);
  });

  test("should add a new order to DB and return added order on POST request", async () => {
    const oldOrders = JSON.parse(fs.readFileSync("./db/users.json"));

    const fetchedData = await fetch(`${URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "2",
        productName: "laptop",
        quantity: 1,
      }),
    }).then((res) => res.json());

    const newOrders = JSON.parse(fs.readFileSync("./db/users.json"));

    expect(fetchedData.productName).toEqual(
      newOrders[newOrders.length - 1].productName
    );
    expect(oldOrders.length).toEqual(newOrders.length - 1);
  });
});

describe("Endpoint - /orders?userId=:id", () => {
  test("should return all orders for selected user on GET request", async () => {
    const orders = fs.readFileSync("./db/orders.json");
    const selectedId = orders[0].id;
    const ordersByUserIdFs = data.filter(
      (order) => order.userId === selectedId
    );

    const ordersByUserId = await fetch(
      `${URL}/orders?userId=${selectedId}`
    ).then((res) => res.json());

    expect(ordersByUserIdFs.length).toEqual(ordersByUserId.length);
  });
});

describe("Endpoint - /order/:id", () => {
  test("should return Order by id", async () => {
    const fetchedData = await fetch(`${URL}/Order/2`).then((res) => res.json());

    expect(fetchedData.id).toEqual(2);
  });

  test("should update order by id", async () => {
    const oldOrders = JSON.parse(fs.readFileSync("./db/orders.json"));
    const selectedOrder = oldOrders[oldOrders.length - 1];

    const updatedOrder = await fetch(`${URL}/order/${selectedOrder.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName: `${selectedOrder.productName}-new`,
      }),
    }).then((res) => res.json());

    const updatedOrders = JSON.parse(fs.readFileSync("./db/orders.json"));
    const newSelectedOrder = updatedOrders.find(
      (order) => order.id === updatedOrder.id
    );

    expect(selectedOrder.productName).not.toEqual(newSelectedOrder.productName);
  });

  test("should delete order by id", async () => {
    const oldOrders = JSON.parse(fs.readFileSync("./db/orders.json"));
    const selectedOrder = oldOrders[oldOrders.length - 1];

    const removedOrderId = await fetch(`${URL}/order/${selectedOrder.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    const newOrders = JSON.parse(fs.readFileSync("./db/orders.json"));
    const isDeleted = !newOrders.find((order) => order.id === removedOrderId);

    expect(isDeleted).toBe(true);
  });
});
