// document.getElementById("action").addEventListener("click", async ()=>{
    
//   // call user API
//   // store random first name in a variable firstUser
//   // call user API again, after you finish calling first one
//   // store random first name in variable secondUser 
//   // console log `${firstUser} and ${secondUser} are friends`
  
//   const userApi = 'https://randomuser.me/api/'
//   // async function getUserName(){
//   //     const randomUser = await fetch(userApi);
//   //     console.log(randomUser);
//   // }
//   // getUserName();

//   // fetch(userApi).then(response => response.json()).then(json=>{
//   //     const firstUser = json.results[0].name.first;
//   //     fetch(userApi).then(response => response.json()).then(json => {
//   //       const secondUser = json.results[0].name.first;
//   //       console.log(`${firstUser} and ${secondUser} are friends`);
//   //     })
//   // })
//   const firstResponse = await fetch(userApi);
//   const firstUserJson = await firstResponse.json();
//   const firstUser = firstUserJson.results[0].name.first
  
//   const secondResponse = await fetch(userApi);
//   const secondUserJson = await secondResponse.json();
//   const secondUser = secondUserJson.results[0].name.first;

//   console.log(firstUser, secondUser);
//   })
  
  // function succesfulPromise(){
  //   return new Promise((resolve, reject) => {
  //     resolve('success!');
  //   })
  // }
  // (async function(){
  //   try {
  //     const result = await succesfulPromise();
  //     console.log(result);
  //   }
  //   catch(err) {
  //     console.log(err);
  //   }
  // }());

// ========================================================================================================================================
//  Promise practice
// ========================================================================================================================================

// create a promise 
// wait for 4 seconds
// resolve or reject based on randomBool
// false - reject 'hero is on vacation'
// true - resolve 'batman is here'


// const randomBool = Boolean(Math.round(Math.random())) // returns either 0 or 1 

// function lookingForHero(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(randomBool) {
//         resolve('batman is here');
//       } else {
//         reject(new Error('hero is on vacation'));
//       }
//     }, 4000);
//   })
// }

// (async function() {
//     try{
//         const result = await lookingForHero();
//         console.log(result);
        
//     }catch(err){
//         console.log(err)
//     }
// })();
// const promise = ()=>{
//   return new Promise((resolve,reject)=>{
//       reject(new Error('Something went wrong'))
//   })
// }

// const resolver = async (promise)=>{
//   try{
//       await promise()
//   }catch(err){
//       console.log(err)
//   }finally{
//       return 'I still return the value'
//       console.log('I am here')
//   }
// }

// (async function() {
//   const test = await resolver(promise)
//   console.log(test)
// })();

// ========================================================================================================================================
//  Promise practice: Typing WOW! or WOW;)
// ========================================================================================================================================


// const taskW = ()=>{
//   return new Promise((res)=>{
//      setTimeout(()=>{
//            res('W')
//      },1000)
// })       
// } 
// const taskO = ()=>{
//   return new Promise((res)=>{
//      setTimeout(()=>{
//            res('O')
//      },500)
// })
// }
// const taskExclaim = ()=>{
//    return new Promise((res) => {
//      setTimeout(()=>{
//            res('!')
//      },Math.floor(Math.random() * 1000))
// })
// }
// const taskSmiley = ()=>{
//    return new Promise((res) => {
//      setTimeout(()=>{
//            res(':)')
//      },300)
// })
// }

// (async function(){
//   try{
//     let wow = '';
//     const getW = await taskW();
//     wow += getW;
//     const allLetters = await Promise.all([taskO(), taskW()]);
//     wow = wow + allLetters[0] + allLetters[1];
//     const lastOne = await Promise.race([taskExclaim(), taskSmiley()]);
//     wow = wow + lastOne;
//     console.log(wow);
//   }
//   catch(err){
//     console.log(err);
//   }
// })();

// ========================================================================================================================================
// Road Lighting switch effect
// ========================================================================================================================================

// let active = 0
// let lights = document.querySelectorAll('.circle')

// const switchLight = (currentLight) =>{
//     currentLight.classList.add(currentLight.getAttribute('color'));
// }
// const turnOffLight = (currentLight) =>{
//     currentLight.className = 'circle'
// }

// const changeLight = ()=>{
//    return new Promise((res, rej) => {
//      let currentLight = lights[active];
//      if(active === 0) {
//        switchLight(currentLight);
//        setTimeout(() => {
//          turnOffLight(currentLight);
//          active = 1;
//          res(active);
//        }, 1000)
//      }
//      if(active === 1) {
//       switchLight(currentLight);
//       setTimeout(() => {
//         turnOffLight(currentLight);
//         active = 2;
//         res(active);
//       }, 4000)
//     }
//     if(active === 2) {
//       switchLight(currentLight);
//       setTimeout(() => {
//         turnOffLight(currentLight);
//         active = 0;
//         res(active);
//       }, 2000)
//     }
//    })
// }

// (async function() {
//     try{
//        await changeLight()
//        await changeLight()
//        await changeLight()
//     }catch(err){
//         console.log(err)
//     }
// })();

// ========================================================================================================================================
//  Async Fetch posting some post from API to page
// ========================================================================================================================================


// async function getPost(){
//   const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const post = await postPromise.json();
  
//   const html = `
//     <h1>${post.title}</h1>
//     <p>${post.body}</p>
//   `;
//   document.body.innerHTML = html;
// }

// getPost();

// ========================================================================================================================================
//  Gether the DATA from User form using fetch
// ========================================================================================================================================


// const userForm = document.getElementById('userForm');

// userForm.addEventListener('submit', function(e){
//   e.preventDefault();

//   const formData = new FormData(this);
//   const options = {
//     method: 'POST',
//     body: formData
//   };
//   // Write the Fetch statement using https://httpbin.org/post along with the options. Then console log the JSON response.

//   // async function getPost(){
//   //   const postPromise = await fetch('https://httpbin.org/post', options);
//   //   const post = await postPromise.json();

//   //   console.log(post);
//   // }

//   // getPost();

//   fetch('https://httpbin.org/post', options)
//     .then(response => response.json())
//     .then(json => console.log(json.form))
//     .catch(err => console.error(err));
// })

// ========================================================================================================================================
//  Uploading files using Fetch and Async function
// ========================================================================================================================================

// Create a variable for the form element. Then create an event listener for submit. Prevent the default behavior. Post a FormData object to https://httpbin.org/post, then console log the JSON response.

const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function(e){
  e.preventDefault();

  uploadFile(this);

  async function uploadFile(data){
    const formData = new FormData();
    const files = data.querySelector('input[type="files"]').files;

    for (let i = 0; i < files.length; i++) {
      formData.append(`fileInput_${i}`, files[i]);
    }
    const options = {
      method: 'POST',
      body: formData
    }
    
    const uploadPromise = await fetch('https://httpbin.org/post', options);
    if(uploadPromise.ok) {
      const uploadResp = await uploadPromise.json();
      console.log(uploadResp.files);
    } else {
      console.error(uploadPromise.status);
    }
  }
});