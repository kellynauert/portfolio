document.querySelectorAll(".card").forEach((item) => {
  item.addEventListener("mouseover", (mouseInFunc) => {
    item.classList.add("class", "mouse-over");
    item.classList.remove("class", "mouse-out");
  });
  item.addEventListener("mouseout", (mouseOutFunc) => {
    item.classList.remove("class", "mouse-over");
    item.classList.add("class", "mouse-out");
  });
});
console.log(window.location.href);
