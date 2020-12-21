// https://jservice.io/api/categories


// async function getQuestions(count, offset = 2){
//   const res = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`);
//   const categories = await res.json();
//   return categories;
// }
// function getCategorieHtml(categories) {
//   let categorieHtml = categories.map(categorie => {
//     return `
//       <div class="categorie-title">${categorie.title}</div>
//     `;
//   }).join('');
//   return `
//     <div class="board-grid">${categorieHtml}</div>
//   `;
// }
// getQuestions(4, 4)
//   .then( categories => {
//     let categorieHtml = getCategorieHtml(categories);

//     document.body.innerHTML = `
//       <div class="container">
//         ${categorieHtml}
//       </div>
//     `;
//   });

async function getCategories() {
  let response = await fetch("https://jservice.io/api/categories?count=4&offset=30")
  let data = await response.json()
  return data
}

function getCategoryHtml(category) {
  return `
      <div class="my-category-title">${category.title}</div>
      <div class="my-category-clue" style="grid-row-start: 2">$100</div>
      <div class="my-category-clue" style="grid-row-start: 3">$200</div>
      <div class="my-category-clue" style="grid-row-start: 4">$300</div>
      <div class="my-category-clue" style="grid-row-start: 5">$400</div>
  `
}

getCategories().then(categories => {
  console.log(categories)
  document.body.innerHTML = `<div class="board">
      ${categories.map(getCategoryHtml).join('')}
  </div>`
})