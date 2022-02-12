/* events handler
function pageLoaded () {
    alert ("Im alive!");
}

window.onload = pageLoaded;
*/

/* */
let callback = (a) => {console.log('i have clicked')};

let block = document.querySelector('.block');
let block1 = document.querySelector('.block1');
let block2 = document.querySelector('.block2');

block.addEventListener('dblclick', callback );
block1.addEventListener('click', callback );
block2.addEventListener('mouseover', callback );
