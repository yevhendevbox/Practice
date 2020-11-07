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



// Creating DATA using fetch API


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// .then((response) => response.json())
// .then((json) => console.log(json))


// let urlAPI = " https://sv443.net/jokeapi/v2";
// const apiUrl = "https://api.chucknorris.io/jokes/random";

// async function getNewJoke() {
//   const response = await fetch(apiUrl);
//   const joke = await response.json();

//   console.log(joke.value);
// }

// getNewJoke();

// function arrayReplace(array, elemToReplace, substitutionElem) {
//   //  write code here.
//   for ( let i = 0; i < array.length; i++) {
//       if ( array[i] === elemToReplace) {
//           array[i] = substitutionElem;
//       }
//   }
//   return array;
// }

// arrayReplace([1, 2, 1], 1, 3);


// function caseInsensitivePalindrome(str) {
//   //  write code here.
//   let reverseStr = str.split('').reverse();
//   return reverseStr.join('').toLowerCase() === str.toLowerCase();
// }
// caseInsensitivePalindrome('AaBac');

// function encloseInBrackets(str) {
//   //  write code here.
//   const newStr = '(' + str + ')';
//   return newStr;
// }

// encloseInBrackets('ananana');

// function factorialNumber(num) {
//   // write code here
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   for (let i = num - 1; i >= 1; i--) {
//     num = num * i;
//   }
//   console.log(num);
//   return num;
// }
// factorialNumber(5);

// function firstDigit(str) {
//   //  write code here.
//   let strToArr = str.split('');
//   const examArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   for ( let char of strToArr) {
//     if(examArr.includes(char)) {
//       console.log(char);
//       return char;
//     }
//   }

// }

// firstDigit("var_1__Int2");

// function largestNumber(num) {
//   //  write code here.
//   let container = '';

//   for (let i = 0; i < num; i++) {
//     container = container.concat('9');
//   }
//   return parseInt(container);
// }
// console.log(largestNumber(5));
// largestNumber(5);

// function maxMultiple(divisor, bound) {
//   //  write code here.
//   for (let i = 1; i < bound; i++) {
//     let multipleValue = divisor * i;
//     if (multipleValue === bound - 1) {
//       return multipleValue;
//     }
//   }
// }
// console.log(maxMultiple(3, 10));

function maxMultiple(divisor, bound) {
  //  write code here.
  const reminder = bound % divisor;

  return bound - reminder;
}