let grid;
let cols;
let rows;
let resolution = 15; // Size of each cell
let speed = 30; // Amount of frames until next step

function setup() {
  createCanvas(windowWidth - (resolution * 2), windowHeight - 50);
  cols = floor(width / resolution - 2);
  rows = floor(height / resolution - 1);

  // cols = 5;
  // rows = 5;

  grid = make2DArray(cols, rows);
  randomizeGrid();
}

function draw() {
  background(240); // Light gray background

  drawGrid(grid);
  grid = updateGrid(grid);
}

function updateGrid(g) {
  let bufferGrid = g;
  for(let i = 0; i < g.length; i++) {
    for(let j = 0; j < g[i].length; i++) {
      if((countNeighbors(g, i, j) < 2 && g[i][j] == 1) || (countNeighbors(g, i, j) > 3 && g[i][j] == 1)) {
        bufferGrid[i][j] = 0;
      } else if(countNeighbors(g, i, j) == 3 && g[i][j] == 0) {
        bufferGrid[i][j] = 1;
      }
    }
  }
  return bufferGrid;
}

function drawGrid(g) {
  for(let i = 0; i < g.length; i++) {
    for(let j = 0; j < g[i].length; j++) {
      if(g[i][j] == 0) {
        fill("black");
      } else {
        fill("white");
      }
      rect((i + 1) * resolution, (j + 1) * resolution, resolution, resolution);
    }
  }
}

// --- INTERACTIVE CONTROLS ---

// 1. Click or Drag to Draw
function mousePressed() {
  toggleCell();
}

function mouseDragged() {
  toggleCell();
}

function toggleCell() {

}

// 2. Keyboard Controls
function keyPressed() {

}

// --- HELPER FUNCTIONS ---

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows).fill(0);
  }
  return arr;
}

function randomizeGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function countNeighbors(grid, x, y) {
  let neighbors = 0;
  return neighbors;
}
