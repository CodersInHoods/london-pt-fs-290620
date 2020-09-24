const responseContainer = document.querySelector("#response");

const displayResponse = (dates) => {
  dates.forEach((date) => {
    const div = document.createElement("div");

    div.innerText = `From ${date.from}, to: ${date.to}`;

    responseContainer.append(div);
  });
};

fetch("https://api.carbonintensity.org.uk/intensity/datesssss")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw "oops something went wrong";
    }
  })
  .then((data) => displayResponse(data.data))
  .catch((error) => {
    const errorDiv = document.createElement("div");
    errorDiv.style.background = "red";
    errorDiv.innerText = error;
    document.body.append(errorDiv);
  });
console.log("after fetch?");
