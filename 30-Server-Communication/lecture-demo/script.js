

document.addEventListener('DOMContentLoaded', () => {
    // fetch('http://localhost:3000/pokemon')
    //     .then(function(res){
    //         res.json()
    //     })
    getMyPokemon()

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault()
        let name = document.querySelector('#namevalue').value
        let img = event.target.pokeImg.value

        let data = {
            name: name,
            sprite: img
        }

     

        let reqPackage = {}
            reqPackage.method = "Post"
            reqPackage.headers = {"Content-Type": "application/json", "Accept": "application/json"}
            reqPackage.body = JSON.stringify(data)

            
        fetch('http://localhost:3000/pokemon', reqPackage)
            .then(res => res.json())
            .then(pokemon => renderPokeMon(pokemon))

    })

    // fetch('http://localhost:3000/pokemon')
    //     // When we have a single argument we dont neet parenths
    //     // When we have a single line, we dont need brackets OR a return
    //     .then(res => res.json())
    //     .then(pokeArray => {
    //         pokeArray.forEach(pokemon => console.log(pokemon))
    //     })
})

// Create a button
// Add an eventlister to that button of type 'click'
function getMyPokemon() {
    document.getElementById('pokeBtn').addEventListener('click', () => {
        fetch('http://localhost:3000/pokemon')
        .then(res => res.json())
        .then(pokeArray => {
            pokeArray.forEach(monster => renderPokeMon(monster))
        })
    })
}

function renderPokeMon(pokemon) {
   
    let gridItem = document.createElement('div')
        gridItem.classList.add('col-sm-6')

    let card = document.createElement('div')
        card.classList.add('card', 'm-3', 'w-25')

    let cardImg = document.createElement('img')
        cardImg.src = pokemon.sprite
        cardImg.classList.add('card-img-top')
    
    let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = pokemon.name
        cardBody.appendChild(cardTitle)

    
    card.append(cardImg, cardBody)

    gridItem.appendChild(card)
    
    document.getElementById('pokemon-container').appendChild(card)


    // Fill that card with the pokemons data

    //Append that card to the pokemond box 
}




// When we click, we make our fetch call
// Handle the response
// Render a pokemon card for each pokemon in the array











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