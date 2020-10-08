const grid = document.querySelector('.grid');
const startBtn = document.querySelector('#start');
const scoreDisplay = document.querySelector('#score');
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerID = 0;

function createGrid(){
  // creating grid for the game
  for (let i = 0; i < width*width; i++) {
    const newElement = document.createElement('div');
    newElement.classList.add('square');
    grid.appendChild(newElement);
    squares.push(newElement);
  }
}

createGrid();

// Making actual snake on the grid
currentSnake.forEach(index => squares[index].classList.add('snake'));

function startGame(){
  currentSnake.forEach(index => squares[index].classList.remove('snake'))
  squares[appleIndex].classList.remove('apple');
  clearInterval(timerID);
  currentSnake = [2,1,0];
  direction = 1;
  score = 0;
  scoreDisplay.textContent = score;
  intervalTime = 1000;
  generateApple();
  currentSnake.forEach(index => squares[index].classList.add('snake'))
  timerID = setInterval(move, intervalTime);
}

function move(){
  // Snake hit the walls logic
  if(
    (currentSnake[0] + width >= width*width && direction === width) ||
    (currentSnake[0] % width === width-1 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains('snake')
    )

  return clearInterval(timerID);
  // Make snake to move
  const tail = currentSnake.pop();
  squares[tail].classList.remove('snake');
  currentSnake.unshift(currentSnake[0] + direction);
  
  // Make snake eat an apple and grow | speed snake up
  if(squares[currentSnake[0]].classList.contains('apple')){
    squares[currentSnake[0]].classList.remove('apple');
    squares[tail].classList.add('snake');
    currentSnake.push(tail);
    generateApple();
    score++;
    scoreDisplay.textContent = score;
    clearInterval(timerID);
    intervalTime = intervalTime * speed;
    timerID = setInterval(move, intervalTime);
  }

  squares[currentSnake[0]].classList.add('snake');

}

// Generate apples
function generateApple(){
  do{
    appleIndex = Math.floor(Math.random() * squares.length)
  } while (squares[appleIndex].classList.contains('snake')) {
    squares[appleIndex].classList.add('apple');
  }
}
generateApple();

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

// event for arrows to press | start button click
document.addEventListener('keyup', control);
startBtn.addEventListener('click', startGame);