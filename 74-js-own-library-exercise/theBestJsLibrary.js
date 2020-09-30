const createATag = (tagName, className, id) => {
  if (!tagName) null;

  const newEl = document.createElement(tagName);
  className && newEl.classList.add(...className);

  if (id) {
    newEl.id = id;
  }

  return newEl;
};

const createATagWithChildren = (tagName, className, id, children = []) => {
  const newEl = createATag(tagName, className, id);

  children.forEach((child) => {
    newEl.appendChild(child);
  });

  return newEl;
};

const addElement = (el, destination) => {
  const destEl = document.querySelector(destination);

  destEl && destEl.appendChild(el);
};

const getElement = (selector, isAll) => {
  if (isAll) {
    return document.querySelectorAll(selector);
  }

  return document.querySelector(selector);
};

const removeElement = (selector, isAll) => {
  if (isAll) {
    return document.querySelectorAll(selector).forEach((el) => el.remove());
  }

  document.querySelector(selector).remove();
};

module.exports = {
  createATag,
  createATagWithChildren,
  addElement,
  getElement,
  removeElement,
};
