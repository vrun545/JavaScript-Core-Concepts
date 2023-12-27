let myArray = ["John", "Marry", "Emma", "Doe"]

let myObject = {
    firstName: "Varun",
    lastName: "Bajpai",
    printName: function(){
        console.log(`My Name is ${this.firstName} ${this.lastName}`);
    }
}

let myFunction = function(hobbies){
    console.log(hobbies)
}

Object.prototype.unanimouslyFunction = function (){
    console.log("I am Unanymous Function");
}

myFunction.unanimouslyFunction()      //   I am Unanymous Function
myObject.unanimouslyFunction()       //   I am Unanymous Function
myArray.unanimouslyFunction()       //   I am Unanymous Function

Array.prototype.arrayFunction = function () {
    console.log("I am Array Method") }

myArray.arrayFunction()             // I am Array Method
myObject.arrayFunction()            // TypeError: myObject.arrayFunction is not a function


// ########################
// NOTES
// ########################

//  That means Array, String, Objects, Function all are Objects in Javascript

// Object.prototype.unanimouslyFunction = function (){
//     console.log("I am Unanymous Function");
// }

// we have used above method to declare with objects only but we can see this method added with myArray, myObject and myFunction as well.