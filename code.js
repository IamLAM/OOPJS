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

let terrier = new Animal("Firulais", "Dark Brown");