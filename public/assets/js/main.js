"use strict";

const container = document.querySelectorAll(".js-image");
const description = document.querySelectorAll(".js-text");

function showText(event) {
  const id = parseInt(event.currentTarget.id);
  description[id].classList.toggle("js-projects");
  description[id].classList.toggle("js-text");
}
function hideText(event) {
  const id = parseInt(event.currentTarget.id);
  description[id].classList.toggle("js-text");
  description[id].classList.toggle("js-projects");
}

for (let i = 0; i < container.length; i++) {
  container[i].addEventListener("mouseover", showText);
  container[i].addEventListener("mouseout", hideText);
}

//# sourceMappingURL=main.js.map
