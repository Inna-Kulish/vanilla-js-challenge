const canvas = document.querySelector("#draw");
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "$BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}
//
//
//
const costOneBook = 800;

const discount = {
  1: 0,
  2: 5,
  3: 10,
  4: 20,
  5: 25,
};

export const cost = (books) => {
  const bookObj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  for (let i = 0; i < books.length; i++) {
    bookObj[String(books[i])]++;
  }

  const firstCost = doObj(bookObj, 0) || 0;

  return books.length === 1 ? 800 : firstCost;
};

function doObj(bookObj, firstCost) {
  let bookArr = [];

  for (const key in bookObj) {
    if (bookObj[key] !== 0) {
      bookArr.push(bookObj[key]);
      bookObj[key]--;
    }
  }

  if (bookArr.length !== 0) {
    firstCost +=
      bookArr.length *
      ((100 - discount[String(bookArr.length)]) / 100) *
      costOneBook;

    return doObj(bookObj, firstCost);
  }

  return firstCost;
}

console.log(cost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
