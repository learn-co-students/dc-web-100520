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