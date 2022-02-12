/* events handler
function pageLoaded () {
    alert ("Im alive!");
}

window.onload = pageLoaded;
*/


/* move callback to common variable
let callback = (a) => {console.log('i have clicked')};

let block = document.querySelector('.block');
let block1 = document.querySelector('.block1');
let block2 = document.querySelector('.block2');

block.addEventListener('dblclick', callback );
block1.addEventListener('click', callback );
block2.addEventListener('mouseover', callback );
*/


/* working with different blocks
let callback1 = (a) => {console.log('i have clicked on BLUE')};
let callback2 = (a) => {console.log('i have clicked on PINK')};
let callback3 = (a) => {console.log('i have clicked on GREEN')};

let block = document.querySelector('.block');
let block1 = document.querySelector('.block1');
let block2 = document.querySelector('.block2');

block.addEventListener('click', callback1 );
block1.addEventListener('click', callback2);
block2.addEventListener('click', callback3 );
*/
