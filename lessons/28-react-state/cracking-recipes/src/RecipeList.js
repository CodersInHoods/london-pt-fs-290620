import React from "react";

import originalRecipes from "./recipes";

class RecipeList extends React.Component {
  state = {
    recipes: originalRecipes,
    onlySimple: false,
    searchTerm: "",
  };

  toggleSimpleRecipes = () => {
    const onlySimple = !this.state.onlySimple;
    this.setState({
      onlySimple: onlySimple,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    const searchMatchedRecipes = this.state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    const recipesToDisplay = this.state.onlySimple
      ? searchMatchedRecipes.filter(
          (recipe) => recipe.ingredients.split(", ").length < 9
        )
      : searchMatchedRecipes;

    return (
      <div className="recipes">
        <label>
          show only the simple ones?
          <input
            type="checkbox"
            checked={this.state.onlySimple}
            onChange={this.toggleSimpleRecipes}
          />
        </label>
        <label>
          search term
          <input
            type="search"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
        </label>
        <div>there are {recipesToDisplay.length} recipes</div>
        {recipesToDisplay.map((recipe) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={recipe.href}
              className="recipe"
            >
              <div>{recipe.title.replace("Omelet", "Omelette")}</div>
              <img alt={recipe.title} src={recipe.thumbnail} />
              <div>{recipe.ingredients}</div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default RecipeList;
