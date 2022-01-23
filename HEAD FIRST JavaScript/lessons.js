/*             ЗАДАЧА 1. Если посетителю 12 лет или больше, он может проходить. Если ему еще 
не исполнилось 12, но его сопровождает взрослый, пусть тоже проходит. Во всех
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
let animalsWild = ["Tiger", "Lion"];
let animalsHome = ["Cat"];
let animalsInZoo = animalsWild.concat(animalsHome);
console.log(animalsInZoo);   


                ЗАДАЧА 5.Random
let randomBody = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBody:
let randomBodyParts = randomBody[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
 // Выбор случайного слова из массива randomWords:
let randomWord = randomWords[Math.floor(Math.random() * 5)];
// Соединяем случайные строки в предложение:
let randomRes = "У тебя " + randomBodyParts + " словно " + 
randomAdjective + " " + randomWord + "!!!";
console.log(randomRes);


                ЗАДАЧА 5.Выбор рандомного ученика из списка(50 чел)
let student = Math.round(Math.floor(Math.random()*100)/2);
console.log(student);


                ЗАДАЧА 6. Объекты
let house = {
    "color": "green",
    "size": "big"
}
console.log(house);

                ЗАДАЧА 7. Получение информации о конкретном свойстве одного из объектов
let cats = [
    {
        name: "Dark",
        pregnant: false,
        birthday: 2007,
        color: "brown",
        placeForGames: ["house", "street"],
        levelOfHappiness: "100%"
    },
    {
        name: "Bruk",
        pregnant: false,
        birthday: 2003,
        color: "red with white spots",
        placeForGames: ["house"],
        levelOfHappiness: "970%"
    },
    {
        name: "Lily",
        pregnant: true,
        birthday: 2010,
        color: "white",
        placeForGames: ["flat"],
        levelOfHappiness: "99%",
        littleCats: [
            {
                name: "littleDark",
                birthday: 2007,
                color: "brown",
                placeForGames: ["house", "street"],
                levelOfHappiness: "100%"
            },
            {
                name: "littleBruk",
                birthday: 2003,
                color: "white with black spots",
                placeForGames: ["house"],
                levelOfHappiness: "970%"
            }
        ]

    }
];
console.log(cats[2].littleCats[1].color);


                    ЗАДАЧА 8. Добавить навого кота и вывести имена всех взрослых котов
let cats = [
    {
        name: "Dark",
        pregnant: false,
        birthday: 2007,
        color: "brown",
        placeForGames: ["house", "street"],
        levelOfHappiness: "100%"
    },
    {
        name: "Bruk",
        pregnant: false,
        birthday: 2003,
        color: "red with white spots",
        placeForGames: ["house"],
        levelOfHappiness: "970%"
    },
    {
        name: "Lily",
        pregnant: true,
        birthday: 2010,
        color: "white",
        placeForGames: ["flat"],
        levelOfHappiness: "99%",
        littleCats: [
            {
                name: "littleDark",
                birthday: 2007,
                color: "brown",
                placeForGames: ["house", "street"],
                levelOfHappiness: "100%"
            },
            {
                name: "littleBruk",
                birthday: 2003,
                color: "white with black spots",
                placeForGames: ["house"],
                levelOfHappiness: "970%"
            }
        ]

    }
];
let newCat =  {
    name: "Ally",
    pregnant: false,
    birthday: 2005,
    color: "white",
    placeForGames: ["house"],
    levelOfHappiness: "970%"
};
cats.push(newCat);

let result = [];

for (let i = 0; i < cats.length; i++){
    let name = cats[i].name;
    result.push(name);
}
console.log(result);

                    ЗАДАЧА 9. Conditions
                    1. IF
const MyName = "Hanna";
console.log("Hello, " + MyName);
if (MyName.length < 7) {
    console.log("Your name is too big!");
}
                    2. IF ... ELSE IF... ELSE
let flowers = 22;
if(flowers <= 10){
    console.log("This flowers are red");
} else if(flowers <= 20 && flowers > 10){
    console.log("There are just white flowers");
} else {
    console.log("We bought too much flowers");
}
                    
                    ЗАДАЧА 10. В очереди на мойку 3 авто. Если приезжаети новая авт и она с 
                мигалками, она становится в первую очередб, без - в конец. Вероятность 50/50.

let cars = ["BMW", "Mini", "Audi"];
let newCar = " ";
let random = Math.floor(Math.random()*100);

if (random > 50){
    newCar = "LightSignals";
} else {
    newCar = "withoutLightSignals";
}
if (newCar === "LightSignals") {
    cars.unshift(newCar)
    console.log(cars);
    console.log("Police car");
} else  {
    cars.push(newCar)
    console.log(cars);
    console.log("Usual car");
} 

                    ЗАДАЧА 11. цикл while
let flowers = 0;
while (flowers < 10){
    console.log("Посчитано цветов: " + flowers + "!");
    flowers++; 
}
console.log("uhhhy");
}

                    ЗАДАЧА 12. цикл for
for(let flowers = 0; flowers < 5; flowers++) {
    console.log("Counting: " + flowers);
}

let sellers = 7
for(let flowers = 0; flowers < sellers; flowers++) {
    console.log(flowers);
}

let animals = ["лев", "фламинго", "белый медведь", "удав"];
for (var i = 0; i < animals.length; i++) {
 console.log("В этом зоопарке есть " + animals[i] + ".");
}

                    ЗАДАЧА 13. Вывести четные числа
let array = [23, 45, 586, 13, 22, 100];
for (let i = 0; i < array.length; i++){
    if(array[i]%2 === 0){
    console.log(array[i]);}
} 

                    ЗАДАЧА 14. Тренировка confirm, alert, prompt
/const name = prompt("Как вас зовут?");
/console.log("Привет, " + name);

likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
    console.log("Ты классная кошка!");
   } else {
    console.log("Что ж, не проблема. Все равно ты молодец!");
   }
   
alert('this is alert');


                    ЗАДАЧА 15. Функции (базовая структура)
let ourFirstFunction = function() {
    console.log("Hello, world");
};
ourFirstFunction();


                    ЗАДАЧА 16. Передача аргумента в функцию
let name = "Vikki";
let sayHalloTo = function (name) {
    console.log("Hello, " + name + "!");
};
sayHalloTo(name);


                    ЗАДАЧА 17. Рисуем 10 котиков
let  drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
    }
   };
drawCats(10);


                    ЗАДАЧА 18. Передача нескольких аргументов в функцию
let  printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
    }
};
printMultipleTimes(4, "^$*$^");


                    ЗАДАЧА 19. Возврат значения из функции
let x = 1;
let sum = function (a) {
 return a = a + 1;
}
console.log(sum(x));


let flowers = 10;
let seller = function (a) {
    let res = (a * 4) / 2;
    return res;
}
console.log(seller(100)); // функци работает с любым аргументом


                    ЗАДАЧА 20. Вызов ф-ии в качестве значения
let seller = function (a) {
    let res = (a * 4) / 2;
    return res;
}
console.log(seller(seller(10)));


                    ЗАДАЧА 21. Перепишем игру на рандом под функции
let randomWords = ["Hi", "clever", "fashion"];
let pickWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}
console.log(pickWord(randomWords));


                    ЗАДАЧА 22. Ранный выход из функции по return
let letter = function (name){
    if (name.length < 4) {
        return;
    } 
    return "четвертая буква вашего имени: " + name[3] + ".";
};
console.log(letter("hanna"));


                    ЗАДАЧА 23. Способы записи функций
let math = function(num) {
    return num * 2;
}

function math2 (num = 2){
    return num * 2;
}

let math3 = (num) => {
    return num * 2;
}

                    ЗАДАЧА 24. Тернарный оператор
//1
                    let array = [1, 2, 3, 4, 5];
if (array[2] > 2 && array[2] < 4) {
    console.log("Three");
} else {
    console.log("not three");
} ;
// преобразуем в тернарное выражение
array[2] > 2 && array[2] < 4 ? console.log("Three") : console.log("not three");


//2
let num = function (a, b){
    a > b ? console.log(true) : console.log(false);
}
num(1, 3);
// сокращаем код
let num = (a, b) => a > b ? true : false ;
console.log(num(1, 3));

                    ЗАДАЧА 25. Создайте две функции, add и multiply; пусть каждая принимает
по два аргумента. Функция add должна складывать аргументы и возвращать результат, а функция multiply — перемножать
аргументы. С помощью только этих двух функций вычислите следующее несложное выражение: 36325 * 9824 + 777

let add = function(a, b){
return a + b;
}
let multiply = function(x, y){
return x * y;
}
console.log(add(multiply(36325, 9824), 777));

                    ЗАДАЧА 26. Напишите функцию areArraysSame, которая принимает два
массива с числами в качестве аргументов. Она должна возвращать true, если эти массивы одинаковые 
(то есть содержат одни и те же числа в одном и том же порядке), или false, если массивы различаются. 
Убедитесь, что ваша функция работает правильно, запустив такой код:
areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
false

РЕШЕНИЕ:
let firstArray = [1,2,3];
let secondArray = [1,2,3];
let areArraysSame = function (a, b) {
    if (a.length !== b.length){
        return false;
    } else {
        let count = a.length;
        for(let i = 0; i < b.length; i++){
                if(a[i] !== b[i]){
                    count--;
                } 
        } return count === a.length;  
     }

};
console.log(areArraysSame(firstArray, secondArray));


                    ЗАДАЧА 27. Вывести количество повторений в массиве цифры 2
let array = [1,2,4,6,8,4,2,4,2,5,6,2,2];
function duplicate (arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(array[i] ===2){
            count++;
        }
    }
    return count;
}
console.log(duplicate(array));
*/



