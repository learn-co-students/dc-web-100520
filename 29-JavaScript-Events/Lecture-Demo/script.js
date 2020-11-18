let form = () => document.querySelector('form')



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('table').addEventListener('click', (event) => {
        // currentTarget = where the event listener was added
        // target = where the event originated
       sayHi(event)
    })

    form().addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event.target[1].value);
        // console.log(event.target.pokeName.value);
        // Grab each value from the form
        
        let newName = document.querySelector("#pokeName").value 
        let newType = event.target.pokeType.value
        let newWeight = event.target.pokeWeight.value
        let newImg = event.target.pokeImg.value
        addAPokemon(newName, newType, newWeight, newImg)
        // Then use those values to update the DOM 
    })

    // bubbleListener()
    deleteRow()

})

function addAPokemon(pokeName, pokeType, pokeWeight, pokeImg) {
    
        let table = document.getElementById("table")
        let newRow = document.createElement('tr')
    
        let tHead = document.createElement('th')
            tHead.scope = "row"
            tHead.innerText = pokeName
    
        let pokeTypeTd = document.createElement('td')
            pokeTypeTd.innerText = pokeType
        
        let pokeWeightTd = document.createElement('td')
            pokeWeightTd.innerText = pokeWeight
    
        let imageData = document.createElement('td')
            let img = document.createElement('img')
            img.src = pokeImg
            imageData.appendChild(img)
    
        newRow.append(tHead, pokeTypeTd, pokeWeightTd, imageData)

        newRow.addEventListener('click', (event) => {
            event.currentTarget.remove()
        })
    
        table.appendChild(newRow)


        document.querySelector('form').reset()
}


function sayHi(event) {
    console.log(event);
}

function deleteRow() {
    document.querySelectorAll('tr').forEach((row) => {
        row.addEventListener('click', (event) => {
            event.currentTarget.remove()
        })
    })
}



// function bubbleListener() {
//    document.querySelector('table').addEventListener('click', (event) => {
//        if(event.target.id === "grass" ){
//            console.log("hey");
//        }
//        else {
//            event.target.remove()
//        }
//    })
// }


































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

