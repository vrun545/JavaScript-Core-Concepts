/////////////////////////////////////////////
// Getting element by class Name
console.log(document.getElementsByClassName("heading"))

/////////////////////////////////////////////
// Getting element by Id
console.log(document.getElementById("main-heading"))



/////////////////////////////////////////////
// querySelector()
////////////////////////////////////////////
const element = document.querySelector("#main-heading")         // for ID
console.log(element)
console.log(document.querySelector(".header")) // for Class
// for Selecting all elements with same ID or Class
console.log(document.querySelectorAll(".nav-item"))



//////////////////////////////////////////////
// Reading or Manipulating text of elements
//////////////////////////////////////////////
const mainHeading1 = document.getElementById("main-heading");
console.log(mainHeading1.textContent)
mainHeading1.textContent = "This is Something else"
console.log(mainHeading1.textContent) // This returns Hello As well 
console.log(mainHeading1.innerText) // This dosn'r return Hello


/////////////////////////////////////////
// Getting specific element
////////////////////////////////////////////

// This will return the first div in HTML page
console.log(document.querySelector("div"))

// This will return the div with class name = "headline" and inside this class we are accessing h2 element
console.log(document.querySelector("div.headline h2"))


////////////////////////////////////////
// Change Style of Elements
/////////////////////////////////////////
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style); // returns all styles available
mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = 'red';
mainHeading.style.border = "10px solid green"



///////////////////////////////////////////
// get and set Attributes (like name, placeholder, href etc.)
/////////////////////////////////////////////
const link = document.querySelector("a")
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));



///////////////////////////////////////////////////
// get multiple elements using getElement by class name
// get multiple elements using querySelectorAll
///////////////////////////////////////////////////
const navItems1 = document.getElementsByClassName("nav-item");
console.log(navItems1); // returns HTML Collection
console.log(navItems1[0]);


const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);  // returns NodeList
console.log(navItems[0]);



/////////////////////////////////////
// LOOP
//////////////////////////////////////
// We can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach

let navItems2 = document.getElementsByTagName("a")
// Simple Loop
// for (let i=0; i<navItems2.length; i++) 
// {
//     const navItem = navItems2[i]
//     navItem.style.color = "green"
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.fontWeight = "bold"
// }

// Convert HTMLCollection into Array
navItems2 = Array.from(navItems2)
// forEach Loop
navItems2.forEach(element => {
    element.style.color = "green"
    element.style.backgroundColor = "#fff"
    element.style.fontWeight = "bold"
});


// InnerHTML
const headline = document.querySelector(".headline");
console.log(headline.innerHTML)
headline.innerHTML = "<h1>Inner HTML Changed </h1>";
headline.innerHTML += "<button class=\"btn\">Learn More </button>"
console.log(headline.innerHTML)


///////////////////////////////////////////////////
// Root Node
// getRootNode()
// childNodes it returns NodeList of child elements along with new line space
// parentNode it returns parent element - it is not a function
// nextSibling  it returns next sibling
// children  returns all children excluding new line space
/////////////////////////////////////////////////////
const rootNode = document.getRootNode()
console.log(rootNode)

const head = document.querySelector("head");
// we can use selector methods on variables as well
const title = head.querySelector("title");
console.log(title)
console.log(title.childNodes)

// Accessing ParentNode of h1
const h1 = document.querySelector("h1")
const parentH1 = h1.parentNode
console.log(parentH1)
parentH1.style.backgroundColor = "green";


// How to add and remove new elements
// append()
// remove
// after
// before
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
newTodoItem.append(newTodoItem)
todoList.append(newTodoItem)

