const form = document.querySelector("form");
const listEl = document.querySelector(".list");

const todos = localStorage.todos ? JSON.parse(localStorage.todos) : [];
let counter = todos.length ? todos[todos.length - 1].id : 0;

const createLiEl = ({ value, completed, id }) => {
  const li = document.createElement("li");
  li.innerText = value;

  li.innerHTML += `
  <input type="checkbox" ${completed ? "checked" : ""} data-id="${id}"/>
  <button data-id="${id}">delete</button>
  `;

  return li;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = event.target.querySelector("input").value;

  const newTodo = {
    id: ++counter,
    value,
    completed: false,
  };

  todos.push(newTodo);

  const liEl = createLiEl(newTodo);
  listEl.appendChild(liEl);

  event.target.reset();

  localStorage.todos = JSON.stringify(todos);
});

// listen for checkbox clicks

listEl.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    const index = parseInt(event.target.dataset.id);

    todos[index] = {
      id: todos[index].id,
      value: todos[index].value,
      completed: event.target.checked,
    };

    localStorage.todos = JSON.stringify(todos);
  }

  if (event.target.tagName === "BUTTON") {
    const index = parseInt(event.target.dataset.id);
    todos.splice(index, 1);

    localStorage.todos = JSON.stringify(todos);
    renderTodosList();
  }
});

const renderTodosList = () => {
  listEl.innerHTML = "";

  todos.forEach((todo) => {
    const newLi = createLiEl(todo);
    listEl.appendChild(newLi);
  });
};

renderTodosList();
