// Game "SEA BATTLE"

let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess; // number of current attempt
let hits = 0; // hits counter
let guesses = 0; //  attempts counter

let isSunk = false; // the ship is not sank

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6): ");

    if (guess < 0 || guess > 6) {
        alert("Please, enter a valid number!");
    } else {
        guesses++;
    

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!!!")
            hits++;

                if (hits == 3) {
                 isSunk = true;
                 alert("Your sank my battleship");
                }
            } else {
                alert("MISS!!!")
            }
        }
}

let statistics = "You took " + guess + " guess to sink the battleship, " +
                "which means your shooting accuracy was " + (3/guesses);
alert(statistics);