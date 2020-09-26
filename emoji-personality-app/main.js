// 1. Loop through the myEmojis array and log each of them out to the console
// 2. Grab the emojiContainer div and store it in a variable. Log it to the console
// 3 .Render the emojis as <span> tags in the emojisContainer <div>

// Hints: you can achieve this by creating an span with createElement(),
// setting its content with textContent, and using append() to append it to the container

// 4. Hook an event listener up with the button, and log out the input field's value when it's clicked

// 5. Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

// 6. Make the unshift button work just as the push button (but with unshifting instead of pushing)

const myEmojis = ["👨‍💻", "⛷", "🍲"];
const eContainer = document.getElementById('emoji-container');
const emojiInput = document.getElementById('emoji-input');
const addLastBtn = document.getElementById('push-btn');
const addFirstBtn = document.getElementById('unshift-btn');
const rmvFirstBtn = document.getElementById('shift-btn');
const rmvLastBtn = document.getElementById('pop-btn');

// for (const emojis in myEmojis) {
  //   console.log(myEmojis[emojis]);
  // }

  function renderEmoji(){
    for (let i = 0; i < myEmojis.length; i++) {
      let newEmoji = document.createElement('span');
      newEmoji.textContent = myEmojis[i];
      eContainer.append(newEmoji);
    }
  }
  renderEmoji();

  addLastBtn.addEventListener('click', function(){
    if (emojiInput.value) {
      myEmojis.push(emojiInput.value);
      emojiInput.value = '';
      eContainer.innerHTML = '';
      renderEmoji();
    }
});

  addFirstBtn.addEventListener('click', function(){
    if (emojiInput.value) {
      myEmojis.unshift(emojiInput.value);
      emojiInput.value = '';
      eContainer.innerHTML = '';
      renderEmoji();
    }
  });

  rmvFirstBtn.addEventListener('click', function(){
    if(myEmojis.length > 0){
      myEmojis.shift();
      eContainer.innerHTML = '';
      renderEmoji();
      console.log('Its should remove first item from emoji array');
    } else {
      console.log('Theres nothing to remove!');
    }
  });
  
  rmvLastBtn.addEventListener('click', function(){
    if(myEmojis.length > 0){
      myEmojis.pop();
      eContainer.innerHTML = '';
      renderEmoji();
      console.log('Its should remove first item from emoji array');
    } else {
      console.log('Theres nothing to remove!');
    }
  });