const awaitContainer = document.querySelector("#async");

const displayAwaitResponse = (dates) => {
  dates.forEach((date) => {
    const div = document.createElement("div");

    div.innerText = `From ${date.from}, to: ${date.to}`;

    awaitContainer.append(div);
  });
};

const init = async () => {
  const response = await fetch(
    "https://api.carbonintensity.org.uk/intensity/date"
  );
  const data = await response.json();
  displayAwaitResponse(data.data);

  return data;
};

const returnValueFromInit = init();

console.log(returnValueFromInit);
