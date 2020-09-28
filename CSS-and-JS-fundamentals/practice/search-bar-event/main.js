const searchInput = document.getElementById('searchInput');

function typingHandeler(event) {
  let searchQuery = event.target.value.toLowerCase();
  let names = document.getElementsByClassName('name');
  
  for (let counter = 0; counter < names.length; counter++) {
    const currentName = names[counter].textContent.toLowerCase();
    if (currentName.includes(searchQuery)) {
      names[counter].style.display = "block";
    } else {
      names[counter].style.display = "none";
    }
  }
}

searchInput.addEventListener('keyup', typingHandeler);

