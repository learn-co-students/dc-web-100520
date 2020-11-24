const url = "http://localhost:3000/films"

const filmsDiv = () => document.querySelector("#films")

const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const title = () => document.querySelector('#title')
const runtime = () => document.querySelector('#runtime')
const filmInfo = () => document.getElementById('film-info')
const showtime = () => document.querySelector('#showtime')
const ticketNum = () => document.querySelector('#ticket-num')
const ticketBtn = () => document.querySelector('#ticket-btn')

// - See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
document.addEventListener('DOMContentLoaded', () => {
    fetch(url+"/1")
        .then(res => res.json())
        .then(film => renderFilm(film))
})

function renderFilm(film){

    posterDiv().src = film.poster 
    title().innerText = film.title
    runtime().innerText = film.runtime + " minutes"
    filmInfo().innerText = film.description 
    showtime().innerText = film.showtime
    //capacity is a string "30"
    //tickets sold is a number 2 
    // tickets left ??? == the capacity minus the tickets sold 
    // ?? capacity type number ?? 
    let remaining = film.capacity - film.tickets_sold
    ticketNum().innerText = remaining

    if(remaining !== 0 ){
        ticketBtn().addEventListener('click', () => {
            buyTicket(film)
        })
    }else {
        ticketBtn().innerText = "Sold out"
        ticketBtn().className = "ui disabled button"

    }



}

function buyTicket(film) {

    let newTix = {
        tickets_sold: film.tickets_sold + 1
    }

    let metaData = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(newTix)
    }
    
    

    fetch(url + `/${film.id}`, metaData)
        .then(res => res.json())
        .then(newFilmData => renderFilm(newFilmData))


}



// - Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.

// - I should not be able to buy a ticket if the showing is sold out.





























// const title = () => document.querySelector('#title')
// const runtime = () => document.querySelector('#runtime')
// const filmInfo = () => document.querySelector('#film-info')
// const showtime = () => document.querySelector('#showtime')
// const ticketNum = () => document.querySelector('#ticket-num')
// const ticketBtn = () => document.querySelector('#ticket-btn')



// document.addEventListener('DOMContentLoaded', () => {
//     fetch(url + "/1")
//         .then(res => res.json())
//         .then(data => renderMovie(data))
// })

// function renderMovie(movie) {
//     posterDiv().src = movie.poster
//     title().innerText = movie.title
//     runtime().innerText = movie.runtime + " minutes"
//     filmInfo().innerText = movie.description
//     showtime().innerText = movie.showtime
//     ticketNum().innerText = +movie.capacity - movie.tickets_sold
//     let sum = +movie.capacity - movie.tickets_sold
//     console.log(sum);
//     if(sum != 0){
//         ticketBtn().addEventListener('click', () => {
//             buyTicket(movie)
//         })
//     }else{
//         ticketBtn().className = "disabled"
//         ticketBtn.innerText = "SoldOut"
//     }
// }

// function buyTicket(movie){
//     let newTickets = {
//         tickets_sold: movie.tickets_sold + 1
//     }

//     let metaData = {}
//         metaData.method = "PATCH"
//         metaData.headers = {"Content-Type": "application/json"}
//         metaData.body = JSON.stringify(newTickets)

//     fetch(url + `/${movie.id}`, metaData)
//         .then(res => res.json())
//         .then(movie => renderMovie(movie))
// }