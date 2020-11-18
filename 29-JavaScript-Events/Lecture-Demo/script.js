


// document.addEventListener('DOMContentLoaded', () => {
//     console.log("We're  In");
//     document.querySelector('form').addEventListener('submit', submitHandler)
//     // addPokeClicker()
//     bubbleListener()
// })

// function submitHandler(event){
//     event.preventDefault()
//     let pokeName = event.target.pokeName.value
//     let pokeType = event.target.pokeType.value
//     let pokeWeight = event.target.pokeWeight.value
//     let pokeImg = event.target.pokeImg.value
//     addAPokemon(pokeName, pokeType, pokeWeight, pokeImg)
  
//     form.reset()
// }


// function addPokeClicker() {
//     document.querySelectorAll('tr').forEach(function(row){
//         row.addEventListener('click', function(event){
//             console.log(event.target.id)
//         })
//     })
// }

// function bubbleListener() {
//     document.querySelector('table').addEventListener('click', (event) => {
//         if(event.target.id === "grass" ){
//             console.log("hey");
//         }
//         else {
//             console.log("hey hey hey");
//         }
//     })
// }

// function addAPokemon(pokeName, pokeType, pokeWeight, pokeImg) {
    
//         let table = document.getElementById("table")
//         let newRow = document.createElement('tr')
    
//         let tHead = document.createElement('th')
//             tHead.scope = "row"
//             tHead.innerText = pokeName
    
//         let pokeTypeTd = document.createElement('td')
//             pokeTypeTd.innerText = pokeType
        
//         let pokeWeightTd = document.createElement('td')
//             pokeWeightTd.innerText = pokeWeight
    
//         let imageData = document.createElement('td')
//             let img = document.createElement('img')
//             img.src = pokeImg
//             imageData.appendChild(img)
    
//         newRow.append(tHead, pokeTypeTd, pokeWeightTd, imageData)
    
//         table.appendChild(newRow)
// }