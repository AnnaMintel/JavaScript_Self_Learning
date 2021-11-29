/*              ЗАДАЧА 1. Если посетителю 12 лет или больше,
он может проходить. Если ему еще не исполнилось 12, но его
сопровождает взрослый, пусть тоже проходит. Во всех
остальных случаях вход запрещен.

let age = 13;
let accessableAge = 12;
let canEnter = age >= accessableAge;
let withParents = false;
console.log(canEnter || withParents); 


                ЗАДАЧА 2. Добавление элементов в пустой массив.

let animals = [];
animals.push("Cat");
animals.push("Dog");
animals.unshift("Monkey");
console.log(animals);   

                ЗАДАЧА 3. Перезаписать последний элемент массива в начало
let a = [1, 2, 3, 4];
let lastNum = a.pop();
a.unshift(lastNum);
console.log(a); 

    ВАРИАНТ 2. Перезапишем все элементы массива через цикл
let a = [1, 2, 3, 4];
for (let i = 0; i < a.length; i++) {
    let lastNum = a.pop();
    a.unshift(lastNum);
    console.log(a);
}
                ЗАДАЧА 4. Объединение массивов.
*/
let animalsWild = ["Tiger", "Lion"];
let animalsHome = ["Cat"];
let animalsInZoo = animalsWild.concat(animalsHome);

console.log(animalsInZoo);   







