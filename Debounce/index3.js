// Debouncing in JavaScript
// Basic Idea:
// When a debounced function is invoked, it doesn't execute immediately. Instead, it waits for a specified amount of time (the debounce period) before executing. If the function is invoked again within that period, the timer resets. This is particularly useful for scenarios like handling user input, where you want to wait for a pause in typing before triggering an action.
let counter = 0;
const getData = () => {
    // Calls an API and gets Data
    console.log("Fetching Data.....", counter++);
}

const debounce = (fn, delay) => {
    let timer;
    return function() {
        let context = this, args = arguments
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, delay)
    }
}

const betterFunction = debounce(getData, 300);


//------------------
//Why Use Debouncing:
//-------------------

// Performance Optimization: Debouncing is often used to optimize performance by reducing the number of function calls, especially for expensive operations.

// User Input Handling: In scenarios like handling user input (e.g., search suggestions, autocomplete), debouncing ensures that the action is triggered after the user pauses typing, preventing too many unnecessary requests or computations.

// Real-Life Example - Search Input: