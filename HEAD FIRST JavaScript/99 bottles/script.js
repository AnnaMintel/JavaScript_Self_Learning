let word = "bottles";
let count = 99;
while (count > 0){
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer, ");
    console.log("Take one down, pass it around");
    count = count - 1;

    if (count > 0){
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        console.log("NO more" + word + " of beer on the wall");
    }
}