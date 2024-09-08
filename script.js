let container = document.querySelector(".container");
let gridSize = 16;

createGrid(gridSize);

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let cellSize = 100 / gridSize;
    let cell = document.createElement("div");
    cell.classList.add("gridCell");
    cell.style["height"] = `${cellSize}%`;
    cell.style["width"] = `${cellSize}%`;

    let blackOverlay = document.createElement("div");
    blackOverlay.classList.add("blackOverlay");
    blackOverlay.style["opacity"] = "0";
    cell.appendChild(blackOverlay);

    blackOverlay.addEventListener("mouseover", (e) => {
      if (cell.classList.contains("colored")) {
        let currentOpacity = Number(blackOverlay.style["opacity"]);
        blackOverlay.style["opacity"] = Math.min(currentOpacity + 0.1, 1);
      } else {
        cell.classList.add("colored");
        let randomColor = getRandomColor();
        cell.style["background-color"] = randomColor;
      }
    });

    container.appendChild(cell);
  }
}

function clearGrid() {
  container.innerHTML = "";
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var slider = document.querySelector(".slider");
var gridSizeText = document.querySelector("#gridSize");
slider.oninput = function () {
  gridSize = slider.value;
  gridSizeText.textContent = `${gridSize} x ${gridSize}`;
  clearGrid();
  createGrid(gridSize);
};
