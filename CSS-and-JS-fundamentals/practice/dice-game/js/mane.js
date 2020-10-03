// State variables

let playerOneTurn = true;
let playerOneScore = 0;
let playerTwoScore = 0;

// DOM elements variables

const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');
const playerOneScoreboard = document.getElementById('player1Scoreboard');
const playerTwoScoreboard = document.getElementById('player2Scoreboard');
const playerOneDice = document.getElementById('player1Dice');
const playerTwoDice = document.getElementById('player2Dice');

function switchDisplayStyle(){
  rollBtn.style.display = 'none';
  resetBtn.style.display = 'block';
}

function rollTheDice(){
  let roll = Math.floor(Math.random() * 6) + 1;
  
  if(playerOneTurn === true) {
    playerOneDice.textContent = roll;
    message.textContent = 'Player Two Turn';
    playerTwoDice.classList.add('active');
    playerOneDice.classList.remove('active');
    playerOneScore = playerOneScore + roll;
    playerOneScoreboard.textContent = playerOneScore;
  } else {
    playerTwoDice.textContent = roll;
    message.textContent = 'Player One Turn';
    playerOneDice.classList.add('active');
    playerTwoDice.classList.remove('active');
    playerTwoScore = playerTwoScore + roll;
    playerTwoScoreboard.textContent = playerTwoScore;
  }

  if(playerOneScore >= 20) {
    message.textContent = 'Player One Won! 🥳';
    switchDisplayStyle();
  } else if(playerTwoScore >= 20){
    message.textContent = 'Player Two Won! 🎉';
    switchDisplayStyle();
  }
  playerOneTurn = !playerOneTurn;
}

function resetHandeler() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneTurn = true;
  message.textContent = "Player 1 Turn";
  playerOneDice.textContent = '-';
  playerTwoDice.textContent = '-';
  rollBtn.style.display = 'block';
  resetBtn.style.display = 'none';
  playerTwoDice.classList.remove('active');
  playerOneDice.classList.add('active');
}

rollBtn.addEventListener('click', rollTheDice);
resetBtn.addEventListener('click', resetHandeler);