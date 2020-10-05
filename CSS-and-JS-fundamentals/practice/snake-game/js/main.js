const grid = document.querySelector('.grid');
const startBtn = document.querySelector('#start');
const score = document.querySelector('#score');
let squares = [];
let curentSnake = [0,1,2];

function createGrid(){
  for (let i = 0; i < 100; i++) {
    const newElement = document.createElement('div');
    grid.appendChild(newElement);
    newElement.classList.add('square');
    squares.push(newElement);
  }
}

createGrid();

curentSnake.forEach(index => squares[index].classList.add('snake'));