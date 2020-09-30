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

  API.postRecipe(newRecipe).then((recipe) => {
    const div = document.createElement("div");
    div.innerText = recipe.title;
    recipesContainer.appendChild(div);
  });
});

const promiseWait = (duration, val) =>
  new Promise((resolve) => setTimeout(() => resolve(val), duration));

const displayRecipe = (recipe) => {
  const div = document.createElement("div");
  div.innerText = recipe.title;
  recipesContainer.appendChild(div);

  const convertToChocolateButton = document.createElement("button");
  convertToChocolateButton.innerText = "Convert to chocolate";
  div.appendChild(convertToChocolateButton);

  convertToChocolateButton.addEventListener("click", () => {
    API.patchRecipe(recipe, { title: "Chocolate" }).then((recipe) => {
      div.innerText = recipe.title;
    });
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.style.background = "red";

  div.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    API.deleteRecipe(recipe).then(() => {
      div.remove();
    });
  });
};

const displayRecipes = (recipes) => {
  recipes.forEach((recipe) => {
    displayRecipe(recipe);
  });
};

API.getAllRecipes().then((recipes) => {
  displayRecipes(recipes);
});
//   .then((param) => {
//     console.log(param);
//     return "Sam";
//   })
//   .then((name) => {
//     console.log(name);
//     return promiseWait(1000, "daniel");
//   })
//   .then((name) => {
//     console.log(name);
//     return promiseWait(500, "mushtaq");
//   })
//   .then((param) => {
//     console.log(param);
//   });
