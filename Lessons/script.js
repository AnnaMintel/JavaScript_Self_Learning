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
*/

