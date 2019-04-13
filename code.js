//In this course you will learn  to develop simple codes with JS oriented object programming

let animals = {

    name: "vertebrates",
    number: 210,
    walk: function() {

        return 20;
    },
    run: function() {
        return "too fast";
    },

    speak: function() {

        return "nowdays," + this.name + " dont speak =P  ";
    }


}

console.log(animals);
console.log(animals.name);
console.log(animals.number);

console.log(animals.run());
console.log(animals.speak());

//working a constructor

function Dog() {

    this.name = "firulais";
    this.color = "blue";
    this.numLegs = 4;
}

let pitbull = new Dog();
pitbull.name = "Punisher";

//another type is creating a dynamic constructor
function Animal(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

//using prototype



let terrier = new Animal("Firulais", "Dark Brown");
//verifying prototype of object

console.log(Animal.prototype.isPrototypeOf(terrier));
Animal.prototype.size = 10;

//understanding chain prototype  Object is like a super class in JS for example

console.log(Object.prototype.isPrototypeOf(Animal.prototype));



//another way to check the object's type is constructor

console.log(terrier instanceof Animal);

console.log(terrier.constructor === Animal);



//Adding properties to array
let ownProps = [];

for (let property in terrier) {
    if (terrier.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);


//working with prototype inside an object
Animal.prototype = {
    constructor: Animal,
    numLegs: 4,
    eat: function() {


    },
    describe: function() {


    }
};