const img = document.querySelector("img");
const btnNewImage = document.querySelector("#new-image");
const inputField = document.querySelector("#input-field");
const errorMessageField = document.querySelector(".error-message");

btnNewImage.addEventListener("click", () => {
  console.log("btnNewImage on click!");
  errorMessageField.textContent = "";
  let valueInput = inputField.value;
  getData(valueInput);
  console.log(valueInput);
});

function getData(gifsName = "cats") {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=xDfaUM063KEUbwjvfGC2bYo7XF09utMC&s=${gifsName}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let responseData = response.data;
      if (responseData.length !== 0) {
        img.src = response.data.images.original.url;
        return;
      } else {
        throw new Error("Keyword Not Found!");
      }
    })
    .catch(function (error) {
      console.log(error);
      errorMessageField.textContent = error.message;
    });
}
getData();
