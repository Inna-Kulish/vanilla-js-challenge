const controls = document.querySelector(".controls");
const img = document.querySelector(".var-container img");
const titleJS = document.querySelector(".hl");

controls.addEventListener("change", handleUpdate);
controls.addEventListener("mousemove", handleUpdate);

function handleUpdate(e) {
  if (e.target.tagName !== "INPUT") return;

  if (e.target.name === "spacing") {
    img.style.padding = e.target.value + "px";
  }

  if (e.target.name === "blur") {
    img.style.filter = `blur(${e.target.value}px)`;
  }

  if (e.target.name === "base") {
    img.style.background = e.target.value;
    titleJS.style.color = e.target.value;
  }
}
