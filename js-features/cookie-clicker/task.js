let count = document.getElementById("clicker__counter");
const clicker = document.getElementById("cookie")

clicker.addEventListener("mousedown", () => {
  clicker.width = 175;
  count.textContent = `${+count.textContent+1}`;
});

clicker.addEventListener("mouseup", () => {
  clicker.width = 200;
});

