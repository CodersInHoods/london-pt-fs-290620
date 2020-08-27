const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Starting upload...");
  
  const formData = new FormData();
  formData.append("image", input.files[0]);

  const resp = await fetch("http://localhost:3001/uploads", {
    method: "POST",
    body: formData,
  }).then(response => response.text());

  console.log(resp);
});
