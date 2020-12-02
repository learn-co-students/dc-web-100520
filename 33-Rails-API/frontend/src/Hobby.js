async function fetchHobbies(){
    let resp = await fetch('http://localhost:3000/hobbies')
    let hobbies = await resp.json()

     hobbies.forEach(renderHobby)
}

function renderHobby(hobby){
    let ul = document.querySelector("#hobbies")
    let li = document.createElement("li")
    li.innerText = hobby.name
    ul.appendChild(li)
}