// Exercise 1
describe("user", () => {
  test("should be an object", () => {
    const isObject = typeof user === "object" && user !== null;

    expect(isObject).toBe(true);
  });

  test("should has property firstName", () => {
    expect(user.firstName).toBeTruthy();
  });

  test("should has property lastName", () => {
    expect(user.lastName).toBeTruthy();
  });
});

// Exercise 2
describe("userRead", () => {
  test("should be an object", () => {
    const isObject = typeof userRead === "object" && userRead !== null;

    expect(isObject).toBe(true);
  });

  test("should has property books", () => {
    expect(userRead.books).toBeTruthy();
  });

  test("books should be an array", () => {
    expect(Array.isArray(userRead.books)).toBe(true);
  });

  test("should has property newspapers", () => {
    expect(userRead.newspapers).toBeTruthy();
  });

  test("newspapers should be an array", () => {
    expect(Array.isArray(userRead.newspapers)).toBe(true);
  });
});

// Exercise 3
describe("user update", () => {
  test("should merge userRead into user", () => {
    expect(userRead.books.includes("kitten")).toBeFalsy();

    userRead.books.push("kitten");

    expect(user.books.includes("kitten")).toBeTruthy();
  });
});

// Exercise 4
describe("userWatch", () => {
  test("should be an object", () => {
    const isObject = typeof userWatch === "object" && userWatch !== null;

    expect(isObject).toBe(true);
  });

  test("should has property tvShows", () => {
    expect(userWatch.tvShows).toBeTruthy();
  });

  test("tvShows should be an array", () => {
    expect(Array.isArray(userWatch.tvShows)).toBe(true);
  });

  test("should has property movies", () => {
    expect(userWatch.movies).toBeTruthy();
  });

  test("movies should be an array", () => {
    expect(Array.isArray(userWatch.movies)).toBe(true);
  });
});

// Exercise 5
describe("user add have a new property userWatch", () => {
  test("userWatch should has property userWatch", () => {
    expect(user.userWatch).toBeTruthy();
  });
  test("userWatch should has property userWatch", () => {
    expect(user.userWatch.movies.includes("kitten")).toBeFalsy();

    userWatch.movies.push("kitten");

    expect(user.userWatch.movies.includes("kitten")).toBeTruthy();
  });
});
