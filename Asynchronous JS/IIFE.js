// IIFE = Immediately Invoked Function Expression
// Used to Avoid polluting the global namespace

(function add(a, b) {
    console.log(a + b);
})(2, 3);                    // output - 5

/////////////////////////////////////////////////

(() => console.log("I am ES6"))();

/////////////////////////////////////////////////////////

(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.

 //////////////////////////////////////////////////////////

//  const data = ( async () => await fetch())();

 ////////////////////////////////////////////////////////

 const atm = function (initialBalance) {
    let balance = initialBalance;
    function withdraw(amt) {
        if(amt > balance) {
            return "Insufficient Balance";
        }
        else {
            balance -= amt;
            return balance;
        }
    }
    return { withdraw };
 };

 let piyush = atm(1000);
 console.log(piyush.withdraw(100));     // Output - 900
 console.log(piyush.withdraw(1000));    // Output - Insufficient Balance