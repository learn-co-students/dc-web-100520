
const URL = 'http://localhost:3000/pokemon'

//1. When DOM loads, I want to make a GET fetch, create some POkemonCard divs
document.addEventListener('DOMContentLoaded', () => {
    getPokemon()

    document.querySelector('form').addEventListener('submit', (event) => {
        createAPokemon(event)
    })

    
})



function getPokemon() {
    fetch(URL)
        .then((res) => res.json())
        .then((pokeArray) => {
            pokeArray.forEach((pokemon) => renderPokemon(pokemon))
        })
}

function renderPokemon(pokemon){

    let pokebox = document.getElementById('pokemon-container')


    let card = document.createElement('div')
        card.classList.add('card', 'm-3', 'w-25')
        card.id = `pokemon-${pokemon.id}`

    let cardImg = document.createElement('img')
        cardImg.classList.add('card-img-top')
        //Objname.key => valie
        //pokemon.id => 1 
        cardImg.src = pokemon.sprite

    let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = pokemon.name

        cardBody.appendChild(cardTitle)
        card.append(cardImg, cardBody)

        card.addEventListener('click', (event) => {
            deletePokemon(event)
        })

        pokebox.appendChild(card)

}


function deletePokemon(event){
    let pokeId = event.currentTarget.id.split("-")[1]

    console.log(pokeId);

    fetch(`${URL}/${pokeId}`, {method: "DELETE"})
        .then(() => {
            document.getElementById(`pokemon-${pokeId}`).remove()
        })



}

//2. When form is submitted, I want to make a POST fetch, append to pokemon div

function createAPokemon(event){
    event.preventDefault()

    let data = {
        name: event.target.pokeName.value,
        sprite: event.target.pokeImg.value
    }

    let reqObj = {}
        //objName.key = value
        reqObj.method = "POST"
        reqObj.headers = {"Content-Type": "application/json"}
        reqObj.body = JSON.stringify(data)

    fetch(URL, reqObj)
    .then(res => res.json())
    .then(data => renderPokemon(data))

    
    // fetch(URL, )
}
//3. When the pokemonCard div is clicked, I want to make a DELETE fetch, and remove the pokemonDiv







































// document.addEventListener('DOMContentLoaded', () => {

//     getMyPokemon()

//     document.querySelector('form').addEventListener('submit', (event) => {
//         createAPokemon(event)
//     })
    
    
// })

// function createAPokemon(event){
//     event.preventDefault()
//     let name = document.querySelector('#namevalue').value
//     let img = event.target.pokeImg.value
    
//     let data = {
//         name: name,
//         sprite: img
//     }
    
    
    
//     let reqPackage = {}
//         reqPackage.method = "Post"
//         reqPackage.headers = {"Content-Type": "application/json", "Accept": "application/json"}
//         reqPackage.body = JSON.stringify(data)
    
        
//     fetch('http://localhost:3000/pokemon', reqPackage)
//         .then(res => res.json())
//         .then(pokemon => renderPokeMon(pokemon))
// }


// function getMyPokemon() {
//     document.getElementById('pokeBtn').addEventListener('click', () => {
//         fetch('http://localhost:3000/pokemon')
//         .then(res => res.json())
//         .then(pokeArray => {
//             pokeArray.forEach(monster => renderPokeMon(monster))
//         })
//     })
// }

// function renderPokeMon(pokemon) {
   
//     let gridItem = document.createElement('div')
//         gridItem.classList.add('col-sm-6')

//     let card = document.createElement('div')
//         card.classList.add('card', 'm-3', 'w-25')
//         card.id = `pokemon-${pokemon.id}`

//     let cardImg = document.createElement('img')
//         cardImg.src = pokemon.sprite
//         cardImg.classList.add('card-img-top')
    
//     let cardBody = document.createElement('div')
//         cardBody.classList.add('card-body')

//     let cardTitle = document.createElement('h5')
//         cardTitle.classList.add('card-title')
//         cardTitle.innerText = pokemon.name
//         cardBody.appendChild(cardTitle)

    
//     card.append(cardImg, cardBody)

//     gridItem.appendChild(card)
    
//     document.getElementById('pokemon-container').appendChild(card)

//     card.addEventListener('click', (event) => {
//         deletePokemon(event)
//     })


//     // Fill that card with the pokemons data

//     //Append that card to the pokemond box 
// }

// function deletePokemon(event){
//     let pokeId = event.currentTarget.id.split("-")[1]
//     console.log(pokeId)

//     fetch(`http://localhost:3000/pokemon/${pokeId}`, {method: "DELETE"})
//         .then(res => res.json())
//         .then(() => {
//             document.getElementById(`pokemon-${pokeId}`).remove()
//         })

// }













// console.log("we in");

// const pokeContainer = () => document.querySelector('#pokemon-container')

// document.addEventListener('DOMContentLoaded', () => {

//     fetch('http://localhost:3000/pokemon')
//         .then(res => res.json())
//         .then(pokemons => {pokemons.forEach( pokemon => renderPokemon(pokemon))
//         })

// })

// const renderPokemon = (pokemon) => {
//     let gridItem = document.createElement('div')
//         gridItem.classList.add('col-sm-6')

//     let card = document.createElement('div')
//         card.classList.add('card', 'm-3', 'w-25')

//     let cardImg = document.createElement('img')
//         cardImg.src = pokemon.sprite
//         cardImg.classList.add('card-img-top')
    
//     let cardBody = document.createElement('div')
//         cardBody.classList.add('card-body')

//     let cardTitle = document.createElement('h5')
//         cardTitle.classList.add('card-title')
//         cardTitle.innerText = pokemon.name
//         cardBody.appendChild(cardTitle)

    
//     card.append(cardImg, cardBody)

//     gridItem.appendChild(card)
    
//     pokeContainer().appendChild(card)

// }