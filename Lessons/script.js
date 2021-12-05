/*              ЗАДАЧА 1. Если посетителю 12 лет или больше, он может проходить. Если ему еще 
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
*/


