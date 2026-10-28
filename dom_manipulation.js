const heading = document.getElementById("heading");

heading.textContent - "My Learning Dashboard";

const status = document.querySelector(".status");

status.textContent = "In Progress";

status.classList.add("active");

let count = 0;

const countDisplay = document.getElementById("count");

const increaseBtn = document.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});
