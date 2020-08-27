// Exercise 1
describe("createJsonFileWithContent", () => {
  afterEach(() => {
    const file = readJsonFile("test");
    file && fs.unlinkSync("./data/test.json");
  });

  test("should create a JSON file", () => {
    expect(readJsonFile("test")).toEqual(null);
    createJsonFileWithContent({ name: "Alex" }, "test");

    expect(readJsonFile("test")).toEqual({ name: "Alex" });
  });
});

// Exercise 2
describe("readJsonFile", () => {
  afterEach(() => {
    const file = readJsonFile("test");
    file && fs.unlinkSync("./data/test.json");
  });

  test("should read a JSON file", () => {
    createJsonFileWithContent({ name: "Alex" }, "test");
    expect(readJsonFile("test")).toEqual({ name: "Alex" });
  });

  test("should return null if file doesn't exist", () => {
    expect(readJsonFile("test")).toEqual(null);
  });
});

// Exercise 3
describe("updateFileWithContent", () => {
  afterEach(() => {
    const file = readJsonFile("test");
    file && fs.unlinkSync("./data/test.json");
  });

  test("should update a file with provided content", () => {
    createJsonFileWithContent({ name: "Alex" }, "test");
    updateFileWithContent({ age: 20 }, "test");

    expect(readJsonFile("test")).toEqual({ name: "Alex", age: 20 });
  });
});

// Exercise 4
describe("getFileSize", () => {
  afterEach(() => {
    const file = readJsonFile("test");
    file && fs.unlinkSync("./data/test.json");
  });

  test("should get file size", () => {
    createJsonFileWithContent({ name: "Alex" }, "test");
    const size = fs.statSync(`./data/test.json`).size;

    expect(getFileSize("test")).toEqual(size);
  });
});

// Exercise 5
describe("cloneJsonFile", () => {
  afterEach(() => {
    const file = readJsonFile("test");
    const clonedFile = readJsonFile("test_clone");
    file && fs.unlinkSync("./data/test.json");
    clonedFile && fs.unlinkSync("./data/test_clone.json");
  });

  test("should clone file", () => {
    createJsonFileWithContent({ name: "Alex" }, "test");
    expect(readJsonFile("test_clone")).toEqual(null);

    cloneJsonFile("./data/test.json", "./data/test_clone.json");
    expect(readJsonFile("test_clone")).toBeTruthy();
  });
});

// Exercise 6
describe("deleteFile", () => {
  test("should delete file", () => {
    createJsonFileWithContent({ name: "Alex" }, "test");
    deleteFile('./data/test.json')
    expect(readJsonFile("test")).toEqual(null);
  });
});
