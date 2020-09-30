const APIURL = "http://localhost:3000/recipes";
const recipeURL = (recipe) => `http://localhost:3000/recipes/${recipe.id}`;

const recipesContainer = document.querySelector("#recipes");
const recipeForm = document.querySelector("form");

// const titleInput = document.querySelector('input[name="title"]');
// const thumbnailInput = document.querySelector('input[name="thumbnail"]');

recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newRecipe = {
    title: recipeForm.elements.title.value,
    thumbnail: recipeForm.elements.thumbnail.value,
  };

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newRecipe),
  };

  fetch(APIURL, fetchOptions)
    .then((res) => res.json())
    .then((recipe) => {
      const div = document.createElement("div");
      div.innerText = recipe.title;
      recipesContainer.appendChild(div);
    });
});

const promiseWait = (duration, val) =>
  new Promise((resolve) => setTimeout(() => resolve(val), duration));

fetch(APIURL)
  .then((res) => {
    return res.json();
  })
  .then((recipes) => {
    recipes.forEach((recipe) => {
      const div = document.createElement("div");
      div.innerText = recipe.title;
      recipesContainer.appendChild(div);

      const convertToChocolateButton = document.createElement("button");
      convertToChocolateButton.innerText = "Convert to chocolate";
      div.appendChild(convertToChocolateButton);

      convertToChocolateButton.addEventListener("click", () => {
        fetch(recipeURL(recipe), {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ title: "Chocolate" }),
        })
          .then((res) => res.json())
          .then((recipe) => {
            div.innerText = recipe.title;
          });
      });

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      deleteButton.style.background = "red";

      div.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
        fetch(recipeURL(recipe), { method: "DELETE" }).then(() => {
          div.remove();
        });
      });
    });
  })
  .then((param) => {
    console.log(param);
    return "Sam";
  })
  .then((name) => {
    console.log(name);
    return promiseWait(1000, "daniel");
  })
  .then((name) => {
    console.log(name);
    return promiseWait(500, "mushtaq");
  })
  .then((param) => {
    console.log(param);
  });
