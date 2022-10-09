// Random Color Generator
let colorText = document.getElementById("color-name");
let flipperButton = document.querySelector(".color-button");
let backButton = document.querySelector(".back-button");

const flipColor = () => {
  let colorFlipper = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = "#" + colorFlipper;
  colorText.innerText = "The color code is: #" + colorFlipper;
};

flipperButton.addEventListener("click", flipColor);

flipColor();

// Back button error
backButton.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Get back where...? 😕");
});

console.warn(
  "If you want my opinion, I think people should keep their opinions to themselves. 😎",
  "\"Snoops Toping\""
);
