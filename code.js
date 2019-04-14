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

//inheritance in prototypes for using functions

function Animals() {}

Animals.prototype = {
    constructor: Animals,
    eat: function() {
        console.log("Im hungry");
    }
};
Dog.prototype = Object.create(Animals.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Woof woof");
}

let duck = Object.create(Animals.prototype);
let beagle = Object.create(Animals.prototype);

duck.eat();
beagle.eat();

let bulldog = new Dog();
bulldog.bark();
bulldog.eat();

//basic rule ChildObject.prototype = Object.create(ParentObject.prototype);

//if you want to override a method, you need to do this:

Dog.prototype.eat = function() { //dog overrides animals
    console.log("Well I m not hungry");
}

bulldog.eat();
let chihua = new Dog();
console.log("----");
chihua.eat();

//mixing function in unrelated objects

let mixfunctionsO = function(obj) {

    obj.run = function() {
        console.log("run fast!!!");
    }

}

mixfunctionsO(bulldog);
mixfunctionsO(duck);
duck.run();
bulldog.run();