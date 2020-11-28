const setupDiv = document.getElementById('setup');
const punchlineDiv = document.querySelector('#punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;

async function getJoke(){
  const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
  const joke = await jokePromise.json();

  setupDiv.innerHTML = joke[0].setup;
  punchline = joke[0].punchline;

  punchlineDiv.innerHTML = '';
  punchlineDiv.classList.remove('bubble');
  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
}
getJoke();

function getPunchline(){
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add('bubble');
  newJokeBtn.classList.toggle('hidden');
  punchlineBtn.classList.toggle('hidden');
}

punchlineBtn.addEventListener('click', getPunchline);
newJokeBtn.addEventListener('click', getJoke);