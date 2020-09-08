const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = form.action;
    const method = form.method;

    const dataToSend = [...form.elements]
      .slice(0, form.elements.length - 1)
      .reduce((object, inputField) => {
        object[inputField.name] = inputField.value;

        return object;
      }, {});

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.token = data.token;
        }
      });
  });
});

if (localStorage.token) {
  fetch("http://localhost:3000/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ token: localStorage.token }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((data) => {
      document.body.innerHTML = `welcome back ${data.user.username} <button>signout</signout>`;

      document.body.addEventListener("click", (event) => {
        if (event.target.innerHTML === "signout") {
          localStorage.removeItem("token");
          window.location.reload();
        }
      });
    })
    .catch((res) => {
      localStorage.removeItem("token");
      window.location.reload();
    });
}


const postTweet = () => {
    fetch('/tweets')
}