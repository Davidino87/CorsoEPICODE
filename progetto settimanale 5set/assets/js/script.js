window.addEventListener("scroll", function () {
  const threshold = 750;
  const header = document.querySelector("header");
  const button = document.querySelector("header > div > button");
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > threshold) {
    header.classList.add("scrolled");
    button.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    button.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".svg-container > svg > g > g > g");
  console.log(elements);

  function toggleRandomElements() {
    const numberOfElementsToToggle = 20;

    for (let i = 0; i < numberOfElementsToToggle; i++) {
      var randomIndex = Math.floor(Math.random() * elements.length);
      var element = elements[randomIndex];
      element.style.opacity = element.style.opacity === "0" ? "1" : "0";
    }

    setTimeout(toggleRandomElements, 500);
  }

  toggleRandomElements();
});
