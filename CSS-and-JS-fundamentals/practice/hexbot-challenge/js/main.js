const colorContainer = document.querySelector('.color-container');
const colorInputVal = document.getElementById('userNumber');
const btn = document.getElementById('pickBtn')
let userPick;

function getInputValue(e){
  e.preventDefault();
  userPick = colorInputVal.value;
  colorContainer.innerHTML = '';
  getColors();
}

function displayColors(colors) {
  let myColorsHtml = colors.map(color => {
    return `<div class="my-color" style="background-color: ${color.value}">${color.value}</div>`
  }).join('');


  colorContainer.innerHTML = `
    <div class="my-colors">
      ${myColorsHtml}
    </div>
  `;
}

async function getColors() {
  let result = await fetch(`https://api.noopschallenge.com/hexbot?count=${userPick}`);
  let data = await result.json();
  let colors = data.colors;

  displayColors(colors);
}
btn.addEventListener('click', getInputValue);

