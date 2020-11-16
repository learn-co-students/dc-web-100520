// Primative Data Types
    //String
    let a = "This is a string"
    const b = "You cant reassign this variable"

    //Number
    let myNum = 10
    let myString = "10"
    // What happens when we add myNum + myString

    //Boolean
    let c = true
    Boolean({})
    let name = "Adam"
    console.log(!!name);


// Complex Data Types
    //Arrays
    const myArray = ["carrots", "chicken"]
        myArray.push("apples")
        myArray.push("bananas")
        console.log(myArray);

    //Objects
    const myObj = {}
        myObj.firstName = "Clark"
        myObj.lastName = "Kent"
        console.log(myObj);

    const newObj = {
        firstName: "Bruce",
        lastName: "Wayne"
    }

//  Function Declaration
 function funcDeclaration(num) {
     if(num < 12){
         console.log(num);
     }
     else {
         debugger
         console.log("num too big");
   }
 }

// Function Expression
let funcExpression = function(firstName) {
   console.log({firstName: firstName});
}

// Arrow Function
let arrowFunc = (firstName) => {
   console.log({firstName: firstName});
}

// Invoking a function vs Function Obj 



