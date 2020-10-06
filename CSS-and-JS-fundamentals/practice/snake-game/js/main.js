const grid = document.querySelector('.grid');
const startBtn = document.querySelector('#start');
const score = document.querySelector('#score');
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
let width = 10;

function createGrid(){
  for (let i = 0; i < 100; i++) {
    const newElement = document.createElement('div');
    grid.appendChild(newElement);
    newElement.classList.add('square');
    squares.push(newElement);
  }
}

createGrid();

currentSnake.forEach(index => squares[index].classList.add('snake'));

function move(){
  const tail = currentSnake.pop();
  squares[tail].classList.remove('snake');
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add('snake');
}

move();

const timerID = setInterval(move, 1000);
// clearInterval(timerID);

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

document.addEventListener('keyup', control);