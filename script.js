let heading = document.querySelector("#heading");
let btn = document.querySelector("#btn");

let switchToDarkMode = () => {
  //   console.log("clicked");
  document.body.classList.toggle("darkBody");

  heading.classList.toggle("darkHeading");

  btn.classList.toggle("darkBtn");

  if (btn.classList.contains("darkBtn")) {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
};

btn.addEventListener("click", switchToDarkMode);
