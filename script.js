const img = document.querySelector("img");
const btnNewImage = document.querySelector("#btn-search");
const inputField = document.querySelector("#input-field");
const errorMessageField = document.querySelector(".error-message");

btnNewImage.addEventListener("click", () => {
  console.log("btnNewImage on click!");
  errorMessageField.textContent = "";
  let valueInput = inputField.value;
  getData(valueInput);
  console.log(valueInput);
});

async function getData(gifsName = "cats") {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=xDfaUM063KEUbwjvfGC2bYo7XF09utMC&s=${gifsName}`,
      { mode: "cors" }
    );
    const promiseResponse = await response.json();
    img.src = promiseResponse.data.images.original.url;
  } catch (err) {
    console.log(err);
    if (err instanceof TypeError) {
      errorMessageField.textContent = "Keyword Not Found!";
    }
  }
}
