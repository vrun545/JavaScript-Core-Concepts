
// PROTOTYPAL INHERITANCE
// inheritance

const User = {
    name: "john",
    email: "john@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Old Syntax
Teacher.__proto__ = User

// New Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JohnDoe     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"john".trueLength()
"doe".trueLength()