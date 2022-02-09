let width = 500;
let height = 500;
let clicks = 0;

let getRandomNumber = function(size){
    return Math.floor(Math.random() * size);
}

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

 let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Burn yourself!";
    } else if (distance < 20) {
        return "TOO HOT";
    } else if (distance < 40) {
        return "Hot";
    } else if (distance < 80) {
        return "Warm";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Too cold";
    } else {
        return "Frozen!";
    }
};

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function (event) {
    clicks++;

let distance = getDistance(event, target);
let distanceHint = getDistanceHint(distance);

$("#distance").text(distanceHint);
    if (distance < 8) {
        alert("The treasure was found for " + clicks + " clicks");
        }
});