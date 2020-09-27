const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

function clickHendeler(){
  overlay.classList.toggle('open');
  modal.classList.toggle('open');
}
openBtn.addEventListener('click', clickHendeler);
closeBtn.addEventListener('click', clickHendeler);