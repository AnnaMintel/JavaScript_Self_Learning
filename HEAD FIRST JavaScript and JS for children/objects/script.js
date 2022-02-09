/* add method through object
let dog = {
    name: "Gavv",
    legs: 4
};

dog.bark = function() {
    console.log("Bark! My name is " + this.name + "!");
};
dog.bark();
*/

/* using THIS 
let car = {
    door: 4,
    color: 'red',
    model: function (){
        if (this.door == 4){
            console.log('Tesla');
        } else {
            console.log('sport');
        }
    }
}
car.model();
*/