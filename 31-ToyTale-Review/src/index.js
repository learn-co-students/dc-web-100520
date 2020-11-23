let addToy = false;

//subit a form, make a new toy
//update a toys likes
//Adding a button, that deletes a toy
const URL =' http://localhost:3000/toys'

document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  getToys()

  document.getElementsByClassName('add-toy-form')[0].addEventListener('submit', (event) => {
    createAtoy(event)
  })

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//get and render all the toys
function getToys() {
  fetch(URL)
    .then(res => res.json())
    .then(toyArray => toyArray.forEach(toy => renderToy(toy)))
}

function renderToy(toy) {
  let toyCollection = document.getElementById("toy-collection")
  
  let card = document.createElement('div')
  card.className = "card"
  card.id = toy.id 
  
  let h2 = document.createElement('h2')
  h2.innerText = toy.name 
  
  let img = document.createElement('img')
  img.src = toy.image
  img.className = "toy-avatar"
  
  let ptag = document.createElement('p')
  ptag.innerText = `${toy.likes} likes`
  
  let button = document.createElement('button')
      button.innerText = "Like <3"
      button.className = "like-btn"

  let delButton = document.createElement('button')
      delButton.innerText = "Free X"
      delButton.className = "like-btn"



  button.addEventListener('click', (event) => {
    likeMe(event, ptag)
  })

  delButton.addEventListener('click', (event) => {
    delMe(event)
  })
  
  //.append() we can use more than one element
  card.append(h2, img, ptag, button, delButton)
  
  // appendChild()
  toyCollection.appendChild(card)
  // 
  // let card = document.createElement('div')
  // card.innerHTML += `
  // <div class='card'>
  //   <h2>${toy.name}</h2>
  //   <img src=${toy.image} class='toy-avatar' />
  //   <p>${toy.likes}Likes </p>
  //   <button class="like-btn">Like <3</button>
  // </div>`
  
  // toyCollection.appendChild(card)
  
  //append cards to this at the end
}

//Submit a form, make a new toy
function createAtoy(event){
  event.preventDefault()
  
  //Grab the data from the forms
  let toyData = {
    name: document.getElementById('toyName').value,
    image: document.querySelector('#toyImage').value,
  }

  
  // Build an object to send to our server 
  fetch(URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(toyData)
  }).then(res => res.json())
    .then(toy => renderToy(toy))

  document.getElementsByClassName('add-toy-form')[0].reset()
}


function likeMe(event, ptag){
  //Event.currentTarget ALWAYS returns the element that the 
  // listener was attached to
  
  let id = event.currentTarget.parentNode.id

  let likes = +ptag.innerText.split(" ")[0] + 1;

  console.log(id, likes);

  fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({likes: likes})
  }).then((res) => res.json())
    .then((toy) => ptag.innerText = `${toy.likes} likes`) 


}

function delMe(event){
  let id = event.currentTarget.parentNode.id
  // console.log(id)
  fetch(`${URL}/${id}`, {method: "DELETE"})
    .then(() => document.getElementById(id).remove()) 
}

