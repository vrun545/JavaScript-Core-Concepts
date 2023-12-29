// Temporal Dead Zone ---> (Hoisting Not Possible in let and const)

age = 100;
console.log("Value of Age:", age)   // Throws error can't access age before initialization

let age = 30;
console.log("Value of Age:",age);
