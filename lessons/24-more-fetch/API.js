const APIURL = "http://localhost:3000/recipes";
const recipeURL = (recipe) => `http://localhost:3000/recipes/${recipe.id}`;

const postRecipe = (newRecipe) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newRecipe),
  };

  return fetch(APIURL, fetchOptions).then((res) => res.json());
};

const getAllRecipes = () => fetch(APIURL).then((res) => res.json());

const patchRecipe = (recipe, newRecipeData) => {
  return fetch(recipeURL(recipe), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newRecipeData),
  }).then((res) => res.json());
};

const deleteRecipe = (recipe) =>
  fetch(recipeURL(recipe), { method: "DELETE" }).then((res) => res.json());

const API = {
  postRecipe,
  getAllRecipes,
  patchRecipe,
  deleteRecipe,
};
