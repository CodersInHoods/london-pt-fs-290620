# theBestJsLibrary exercise

Create your own JS library with will help you to work with DOM.

Requirements:

- create a method `createATag` which will return a new HTML tag(DOM node).
  - method should handle the next arguments:
    1. tagName (string);
    2. className/s (string);
    3. id (string);
    - if you do not pass any argument it should return `null`
- create a method `createATagWithChildren` which will return a new HTML tag(DOM node) with children.
  - method should handle the next arguments:
    1. tagName (string);
    2. className/s (string);
    3. id (string);
    4. children (array of DOM nodes);
- create a method `addElement` which will add a new element to the DOM.
  - method should handle the next arguments:
    1. element (DOM node);
    2. destination (string) - it can be a any valid css selector(tag name/class/id etc);
- create a method `getElement` which will return a specific element/s from the DOM.
  - method should handle the next arguments:
    1. selector (string) - css selector(tag name/class/id etc)
    2. all (boolean) - to get all elements with your selector.
- create a method `removeElement` which will remove a specific element from the DOM.
  - method should handle the next arguments:
    1. selector (string) - css selector(tag name/class/id etc)
    2. all (boolean) - to remove all elements with your selector.
- create a method `addStyles` which will set styles for the specified element.
  - method should handle the next arguments:
    1. selector (string) - css selector(tag name/class/id etc)
    2. styleProperty(string)
    3. styleValue(string)
- create a method `setText` which will set text for the specified element.
  - method should handle the next arguments:
    1. selector (string) - css selector(tag name/class/id etc)
    2. text (string)
