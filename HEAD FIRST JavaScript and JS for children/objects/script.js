let dog = {
    name: "Gavv",
    legs: 4
};

dog.bark = function() {
    console.log("Bark! My name is " + this.name + "!");
};
dog.bark();
