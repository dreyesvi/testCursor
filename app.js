const greeting = document.querySelector("#greeting");
const action = document.querySelector("#action");
const status = document.querySelector("#status");

const messages = [
  "Hello, David",
  "The page is running locally",
  "Change this list in app.js",
];

let index = 0;

action.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  greeting.textContent = messages[index];
  status.textContent = `Message ${index + 1} of ${messages.length}`;
});
