const theBestJsLibrary = require("../theBestJsLibrary");
const {
  createATag,
  createATagWithChildren,
  addElement,
  getElement,
  removeElement,
} = theBestJsLibrary;

// Exercise 1
describe("createATag", () => {
  test("should create an element", () => {
    const el = createATag("p");

    expect(el.tagName).toEqual("P");
  });

  test("should create an element with class", () => {
    const el = createATag("p", ["test_class"]);

    expect(el.className.includes("test_class")).toBe(true);
  });

  test("should create an element with class", () => {
    const el = createATag("p", [], "testId");

    expect(el.id.includes("testId")).toBe(true);
  });
});

describe("createATagWithChildren", () => {
  test("should create an element", () => {
    const el = createATagWithChildren("p");

    expect(el.tagName).toEqual("P");
  });

  test("should create an element with class", () => {
    const el = createATagWithChildren("p", ["test_class"]);

    expect(el.className.includes("test_class")).toBe(true);
  });

  test("should create an element with class", () => {
    const el = createATagWithChildren("p", [], "testId");

    expect(el.id.includes("testId")).toBe(true);
  });

  test("should create an element with children", () => {
    const p = createATag("p");
    const a = createATag("a");
    const el = createATagWithChildren("p", [], "testId", [p, a]);

    expect(el.querySelector("p")).toBeTruthy();
    expect(el.querySelector("a")).toBeTruthy();
  });
});

describe("addElement", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("should add element to selected target", () => {
    const el = createATag("p", ["test_class"]);

    expect(document.body.querySelector(".test_class")).toBeFalsy();

    addElement(el, "body");

    expect(document.body.querySelector(".test_class")).toBeTruthy();
  });
});

describe("getElement", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("should return 1 the first element with selector", () => {
    const el = createATag("p", ["test_class"]);
    const el2 = createATag("p", ["test_class"]);
    el.innerHTML = "Hello";
    el2.innerHTML = "Hello";
    addElement(el, "body");
    addElement(el2, "body");

    const selectedEl = getElement(".test_class");
    const isOneElement = selectedEl instanceof HTMLElement;
    expect(isOneElement).toBe(true);
  });

  test("should return all elements with selector", () => {
    const el = createATag("p", ["test_class"]);
    el.innerHTML = "Hello";
    addElement(el, "body");

    const el2 = createATag("p", ["test_class"]);
    el2.innerHTML = "Hello 2";
    addElement(el2, "body");

    expect(getElement(".test_class", true).length).toBe(2);
  });
});

describe("removeElement", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("should remove 1 element by selector", () => {
    const el = createATag("p", ["test_class", "test_class_1"]);
    el.innerHTML = "Hello";
    addElement(el, "body");

    const el2 = createATag("p", ["test_class", "test_class_2"]);
    el2.innerHTML = "Hello 2";
    addElement(el2, "body");

    expect(getElement(".test_class", true).length).toBe(2);

    removeElement(".test_class");

    expect(getElement(".test_class", true).length).toBe(1);
  });

  test("should remove all elements by selector", () => {
    const el = createATag("p", ["test_class", "test_class_1"]);
    el.innerHTML = "Hello";
    addElement(el, "body");

    const el2 = createATag("p", ["test_class", "test_class_2"]);
    el2.innerHTML = "Hello 2";
    addElement(el2, "body");

    removeElement(".test_class", true);

    expect(getElement(".test_class", true).length).toBe(0);
  });
});
