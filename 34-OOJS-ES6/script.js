// //**********Object Literal ****************/

// let coolGuy = {
//     firstName: "Adam",
//     lastName: "Johnson",
//     greet: () => {
//         console.log(`${this.firstName}`);
//     }
// }

// //********** Factory Pattern ****************************/
// // function coolPersonFactory(firstName, lastName){
// //     return {
// //         firstName: firstName,
// //         lastName: lastName,
// //         greet: () => {
// //             console.log("Hey whats up im cool");
// //         }
// //     }
// // }

// //********** ES5 Constructor ****************************/
// function CoolPerson(firstName, lastName){

//     this.firstName = firstName
//     this.lastName = lastName

//     // this.greet = function() {
//     //     console.log(`Hi name is ${this.firstName} ${this.lastName}`);
//     // }

// }

// CoolPerson.prototype.greet = function() {
//     console.log(`Hi name is ${this.firstName} ${this.lastName}`)
// }

// let matteo = new CoolPerson('Matteo', 'Ricci')
// let ray  = new CoolPerson('Ray', 'Is REALLY cool')
// let mauro = new CoolPerson('Mauro', 'Is cooler than me')

// //********** ES6 Class Inheritance ****************************/

// class Person {

//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     greet(){
//         return `Hello, ${this.getFullName()}`
//     }

// }


// class Teacher extends Person {
//     constructor(firstName, lastName, specialty){
//         // In order to inherit the attributes of the
//         // parent class we must call "super" and pass
//         // this values in there
//         super(firstName, lastName)
//         this.specialty = specialty
//     }

//     teachMe(){
//         console.log(`${this.greet()} teaching ${this.specialty}`)
//     }
    
// }

// let { email, address, favorite_actors } = personObject

// console.log(firstName);


// const pizzaMaker = (cheese, sauce) => {
    //     let newObj = { cheese, sauce } 
    //     console.log(newObj);   
    // }
    
    // Spread Operator ****************************************
    // let myArray = [1, 2, 3]
    // // let array2 = [4, 5, 6]
    
    // // let array3 = [...array, ...array2]
    
    // function addtoArray(array, value){
        //     let newArray = [...array, value]
        //     console.log(newArray);
        // }
        
        // addtoArray(myArray, "hey, im new")
        
        // let personObject = {
        //     firstName: "Adam",
        //     lastName: "Wayne",
        //     email: 'mail@mail.com',
        //     userName: 'adamwjo',
        //     phoneNum: '555-555-5555',
        //     address: `123 B Bakers St.`,
        //     favorite_actors: ['Alicia Vikander', 'Michael Fassbender', 'Jude Law']
        // }
        // // addtoArray(myArray, "another thing")
        
        // function updateName(oldObj, firstName, lastName) {
        //     // let newObj = {...oldObj, firstName: firstName, lastName: lastName}
        //     let newObj = {...oldObj, firstName: firstName, lastName: lastName}
        //     console.log(newObj)
        // }

        // updateName(personObject, "Bruce", "Wayne")


        let coolArray = ['Keanu Reeves','Spiderman', 14, 'Megan Rapinoe', 'Storm', 10, 3]

        // coolArray.find(findNum)

        // let findNum = (item) => typeof item === "number"

        console.log(coolArray.find((item) => typeof item === "number"))

       

        console.log( coolArray.map(item =>  ` hi ${item}` ));


        // console.log( comments.filter(comment => comment === searchText));