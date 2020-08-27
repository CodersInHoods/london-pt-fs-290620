// Exercise 1
const URL = "http://localhost:4000";
server.close();

describe("Endpoint: /", () => {
  let testServer = null;

  beforeAll(() => {
    testServer = createServer().listen(4000);
  });
  afterAll((done) => {
    testServer.close(done);
  });

  test("should return text/plain as Content-Type", async () => {
    const response = await fetch(URL);

    expect(response.headers.get("Content-Type")).toEqual("text/plain");
  });

  test("should return status 200", async () => {
    const response = await fetch(URL);
    expect(response.status).toEqual(200);
  });

  test("should return 'Hello'", async () => {
    const text = await fetch(URL).then((resp) => resp.text());

    expect(text).toEqual("Hello");
  });
});

describe("Endpoint: /api/users", () => {
  let testServer = null;

  beforeAll(() => {
    testServer = createServer().listen(4000);
  });
  afterAll((done) => {
    testServer.close(done);
  });

  test("should return application/json as Content-Type", async () => {
    const response = await fetch(`${URL}/api/users`);

    expect(response.headers.get("Content-Type")).toEqual("application/json");
  });

  test("should return status 200", async () => {
    const response = await fetch(`${URL}/api/users`);

    expect(response.status).toEqual(200);
  });

  test("should return all users", async () => {
    const data = await fetch(`${URL}/api/users`).then((resp) => resp.json());

    expect(data).toEqual(users);
  });
});

describe("Endpoint: /api/users/:id", () => {
  let testServer = null;

  beforeAll(() => {
    testServer = createServer().listen(4000);
  });
  afterAll((done) => {
    testServer.close(done);
  });

  test("should return application/json as Content-Type", async () => {
    const response = await fetch(`${URL}/api/user/2`);

    expect(response.headers.get("Content-Type")).toEqual("application/json");
  });

  test("should return status 200", async () => {
    const response = await fetch(`${URL}/api/user/2`);

    expect(response.status).toEqual(200);
  });

  test("should return user with id = 2", async () => {
    const data = await fetch(`${URL}/api/user/2`).then((resp) => resp.json());

    expect(data).toEqual(users[1]);
  });
});
