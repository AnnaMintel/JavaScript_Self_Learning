/* let h1 = document.getElementById("main-h1");
console.log(h1.innerHTML);

let newH1 = prompt("Enter new title: ");
h1.innerHTML = newH1 ;
*/

                        //       jquery

/* change title 
let newH1 = prompt("Enter new title: ");
$("#main-h1s").text(newH1);
*/

/* СОздание новых элементов
$("body").append("<p>new p</p>");
*/

/* Вывод элементов массива на экран
let students = ['Anna', 'Nick', 'Ivan', 'Paul'];
for (let i = 0; i < students.length; i++){
    $("body").append("<p>" + students[i] + "</p>");
}
*/

/* Анимация
$("#main-h1").slideUp(1000).slideDown(100); */


/* setTimeout and setInterval
let time = function() {
    alert("Time is out!");
}
setTimeout(time, 3000); 
clearTimeout(time);
*/

/*
let counter = 1;
function printMassage() {
    console.log ("You look at console yet " + counter + " sec");
    counter++;
};
let interval = setInterval(printMassage, 1000);

clearInterval(interval);
*/

/* реакция на клики
let clickHandler = function (event) {
    console.log("Клик! " + event.pageX + " " + event.pageY);
    };
$("h1").click(clickHandler);
*/

/* событие mousemove */
$("html").mousemove(function (event) {
    $("#heading").offset({
        left: event.pageX,
 top: event.pageY
 });
 });