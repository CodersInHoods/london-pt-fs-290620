const Clement = {
  createElement: (tag, options = {}) => {
    const newElement = document.createElement(tag);

    if (options.className) {
      newElement.className = options.className;
    }

    if (options.onClick) {
      newElement.addEventListener("click", options.onClick);
    }

    if (options.children) {
      newElement.append(...options.children);
    }

    if (options.text) {
      newElement.append(options.text);
    }

    return newElement;
  },
};
