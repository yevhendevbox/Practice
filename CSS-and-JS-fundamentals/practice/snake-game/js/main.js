const grid = document.querySelector('.grid');
const startBtn = document.querySelector('#start');
const score = document.querySelector('#score');
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
const width = 10;
let appleIndex = 0;

function createGrid(){
  // creating grid for the game
  for (let i = 0; i < width*width; i++) {
    const newElement = document.createElement('div');
    grid.appendChild(newElement);
    newElement.classList.add('square');
    squares.push(newElement);
  }
}

createGrid();

// Making actual snake on the grid
currentSnake.forEach(index => squares[index].classList.add('snake'));

function move(){
  // Snake hit the walls logic
  if(
    (currentSnake[0] + width >= width*width && direction === width) ||
    (currentSnake[0] % width === width-1 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    snake[currentSnake[0] + direction].classList.contains('snake')
    )

  return clearInterval(timerID);
  // Make snake to move
  const tail = currentSnake.pop();
  squares[tail].classList.remove('snake');
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add('snake');
}
move();
const timerID = setInterval(move, 1000);

// Generate apples
function generateApples(){
  do{
    appleIndex = Math.floor(Math.random()* squares.length)
  } while (squares[appleIndex].classList.contains('snake')) {
    squares[appleIndex].classList.add('apple');
  }
}
generateApples();

// Controling the direction of the snake
function control(e){
  if(e.keyCode === 39){
    direction = 1;
  } else if(e.keyCode === 38){
    direction = -width;
  } else if(e.keyCode === 37){
    direction = -1;
  } else if(e.keyCode === 40){
    direction = +width;
  }
}

// event for arrows to press
document.addEventListener('keyup', control);