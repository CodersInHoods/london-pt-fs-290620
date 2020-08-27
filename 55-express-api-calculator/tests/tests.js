const URL = "http://localhost:3000";

describe("Endpoint: /double/:num", () => {
  test("should return application/json as Content-Type", async () => {
    const response = await fetch(`${URL}/double/4`);
    const isApplicationJson = response.headers
      .get("Content-Type")
      .includes("application/json");

    expect(isApplicationJson).toBe(true);
  });

  test("should return status 200", async () => {
    const response = await fetch(`${URL}/double/4`);
    expect(response.status).toEqual(200);
  });

  test("should return doubled number", async () => {
    const { result } = await fetch(`${URL}/double/4`).then((resp) =>
      resp.json()
    );

    expect(result).toEqual(8);
  });
});

describe("Endpoint: /square/:num", () => {
  test("should return application/json as Content-Type", async () => {
    const response = await fetch(`${URL}/square/4`);
    const isApplicationJson = response.headers
      .get("Content-Type")
      .includes("application/json");

    expect(isApplicationJson).toBe(true);
  });

  test("should return status 200", async () => {
    const response = await fetch(`${URL}/square/4`);

    expect(response.status).toEqual(200);
  });

  test("should return squared number", async () => {
    const { result } = await fetch(`${URL}/square/4`).then((resp) =>
      resp.json()
    );

    expect(result).toEqual(16);
  });
});

describe("Endpoint: /:num1/:operation/:num2", () => {
  test("should return application/json as Content-Type", async () => {
    const response = await fetch(`${URL}/5/add/3`);
    const isApplicationJson = response.headers
      .get("Content-Type")
      .includes("application/json");

    expect(isApplicationJson).toBe(true);
  });

  test("should return the result of 10 + 2", async () => {
    const { result } = await fetch(`${URL}/10/add/2`).then((resp) =>
      resp.json()
    );

    expect(result).toEqual(12);
  });

  test("should return status 200", async () => {
    const response = await fetch(`${URL}/5/subtract/3`);

    expect(response.status).toEqual(200);
  });

  test("should return the result of 5 - 3", async () => {
    const { result } = await fetch(`${URL}/5/subtract/3`).then((resp) =>
      resp.json()
    );

    expect(result).toEqual(2);
  });

  test("should return the result of 5 * 3", async () => {
    const { result } = await fetch(`${URL}/5/multiply/3`).then((resp) =>
      resp.json()
    );

    expect(result).toEqual(15);
  });

  test("should return the result of 10 / 2", async () => {
    const { result } = await fetch(`${URL}/10/divide/2`).then((resp) =>
      resp.json()
    );

    expect(result).toEqual(5);
  });

  test("should return error message on bad request", async () => {
    const response = await fetch(`${URL}/5/add/cat`);

    expect(response.status).toEqual(400);
  });
});
