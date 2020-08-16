// CONST DOM ELEMENTS
const productsContainer = document.querySelector("#products");
const colorOptionsContainer = document.querySelector("#color-options");
const filterForm = document.querySelector("form");
const sortOptionRadioButtons = document.querySelectorAll(
  'input[name="sort-option"]'
);
const basketQuantitySpan = document.querySelector("#basket-quantity");
const pageDownButton = document.querySelector('#page-down')
const pageUpButton = document.querySelector('#page-up')
const pageNumber = document.querySelector('#page-number')

// APP STATE VARS
let selectedSortOption = "DEFAULT";
let basket = window.localStorage.getItem("basket")
  ? JSON.parse(window.localStorage.getItem("basket"))
  : [];
let currentPage = 1;
const numberOfProductsPerPage = 6;

const updatePage = (dir) => { // -1 || 1
    currentPage += dir;
    pageNumber.innerText = currentPage;

    pageDownButton.disabled = currentPage < 2;
    pageUpButton.disabled = currentPage > 3;

    applyFilters(getColorsSelected(), getPriceRange());
}

const addToBasket = (product) => {
    if (basket.includes(product.name)) {
        basket = basket.filter(name => name !== product.name)
    } else {
        basket.push(product.name);
    }
  basketQuantitySpan.innerText = basket.length;

  window.localStorage.setItem("basket", JSON.stringify(basket));
};

const renderProductDetails = (product) => {
  const div = document.createElement("div");

  const price = document.createElement("p");
  price.innerText = `£${product.price}`;
  const type = document.createElement("p");
  type.innerText = product.type;
  const colors = document.createElement("p");
  colors.innerText = product.colors.join(", ");

  const addToBasketButton = document.createElement("button");
  addToBasketButton.innerText = "Add to basket";

  addToBasketButton.addEventListener("click", (e) => {
    e.stopPropagation();
    addToBasket(product);
  });

  div.append(price, type, colors, addToBasketButton);

  return div;
};

const renderProduct = (product) => {
  // Display product details on click of product
  let showDetails = false;

  // create div
  const div = document.createElement("div");
  div.className = "product-info";
  // display product details

  div.innerText = product.name;

  div.addEventListener("click", () => {
    showDetails = !showDetails;

    if (showDetails) {
      const productDetails = renderProductDetails(product);

      div.append(productDetails);
    } else {
      const productDetails = div.querySelector("div");

      productDetails.remove();
    }
  });

  // add div to page
  productsContainer.append(div);
};

const renderProducts = (products) => {
  productsContainer.innerText = "";
  // render all the products in the array
  products
    .sort((productA, productB) => {
      if (selectedSortOption === "DEFAULT") return 0;

      if (selectedSortOption === "HIGHEST")
        return productB.price - productA.price;

      if (selectedSortOption === "LOWEST")
        return productA.price - productB.price;
    })
    .filter((product, i) => {
        // currentpage = 1
        // 0, 1, 2, 3

        // currentpage = 3
        // 8, 9, 10, 11

        const min = numberOfProductsPerPage * (currentPage - 1)
        const max = min + numberOfProductsPerPage;

        return i >= min && i < max;
    })
    .forEach((product) => {
      renderProduct(product);
    });
};

const uniqueColors = () => {
  const colors = PRODUCTS.map((product) => product.colors).flat();

  return [...new Set(colors)];
};

const highestPrice = () => {
  return Math.max(...PRODUCTS.map((product) => product.price));
};

const createColorOptions = (colors) => {
  // for each color in array
  // create checkbox

  colors.forEach((color) => {
    const label = document.createElement("label");
    label.innerText = color;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = color;
    checkbox.name = "color";

    label.append(checkbox);

    colorOptionsContainer.append(label);
  });
};

const applySortOption = (sortOption) => {
  selectedSortOption = sortOption;

  applyFilters(getColorsSelected(), getPriceRange());
};

const applyFilters = (colors, priceRange) => {
  const productsToRender = PRODUCTS.filter((product) => {
    return colors.length === 0
      ? true
      : product.colors.some((productColor) => colors.includes(productColor));
  }).filter((product) => {
    return product.price >= priceRange.min && product.price <= priceRange.max;
  });

  renderProducts(productsToRender);
};

const getColorsSelected = () => {
  // get selected colors
  const inputFieldSelected = [...filterForm.elements.color];
  const colorsSelected = inputFieldSelected
    .filter((input) => input.checked)
    .map((input) => input.value);

  return colorsSelected;
};

const getPriceRange = () => {
  // get price range
  const minInput = filterForm.elements["min-price"];
  const maxInput = filterForm.elements["max-price"];

  const minPrice = parseFloat(minInput.value);
  const maxPrice = parseFloat(maxInput.value);

  return {
    min: minPrice || 0,
    max: Math.max(maxPrice || highestPrice(), minPrice || 0),
  };
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  applyFilters(getColorsSelected(), getPriceRange());
};

filterForm.addEventListener("submit", handleFormSubmit);

sortOptionRadioButtons.forEach((radioButton) => {
  radioButton.addEventListener("input", (e) => {
    applySortOption(e.target.value);
  });
});

pageDownButton.addEventListener('click', () => {
    updatePage(-1)
})
pageUpButton.addEventListener('click', () => {
    updatePage(1)
})

const init = () => {
    renderProducts(PRODUCTS);

    basketQuantitySpan.innerText = basket.length;
    
    createColorOptions(uniqueColors());

    updatePage(0);
}

init();