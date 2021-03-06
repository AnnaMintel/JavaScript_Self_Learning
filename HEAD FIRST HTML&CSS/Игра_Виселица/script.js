/* «Виселица» — игра на угадывание слов. Один игрок выбирает слово,
а второй пытается его отгадать. Например, если первый игрок загадал
слово КАПУСТА, он изобразит семь «пустых мест», по одному на каждую
букву слова:
_ _ _ _ _ _ _
Второй игрок старается отгадать это слово, называя буквы. Каждый
раз, когда он угадывает букву, первый игрок заполняет пустоты, вписывая ее везде, где она встречается. Например, если второй игрок назвал
букву «А», первый должен вписать все «А» для слова КАПУСТА, вот так:
_ А _ _ _ _ А
Если второй игрок назовет букву, которой нет в слове, у него отнимается очко, а первый игрок рисует руку, ногу или другую часть тела
человечка. Если первый игрок закончит рисовать человечка раньше, чем
второй угадает все буквы, второй игрок проиграл. 

let words = [
    "morning",
    "cinema",
    "poster",
    "wife",
    "sport",
    "lessons",
    "wolf"
];

// Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// Создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let attempts = 10;

// Игровой цикл
while (remainingLetters > 0 && attempts > 0) {

    // Показываем состояние игры
    alert(answerArray.join(" "));

    // Запрашиваем вариант ответа
    let value = prompt("Угадайте букву или нажмите Отмена для выхода из игры.").toLowerCase();
    if (value === null) {
        // Выходим из игрового цикла
        break;
    } else if (value.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
        attempts--;
    } else {
        // Обновляем состояние игры
        for (let j = 0; j < word.length; j++) {
            if (word[j] === value && answerArray[j] !== word[j]) {
                answerArray[j] = value;
                remainingLetters--;
            }
        }
        attempts--;
    }
    // Конец игрового цикла
}

// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);

ПЕРЕПИСЫВАЕМ ИГРУ ПОД ФУНКЦИИ:

*/
let words = [
    "morning",
    "cinema",
    "poster",
    "wife",
    "sport",
    "lessons",
    "wolf"
];

// Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// Создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let attempts = 10;

// Игровой цикл
function game() {
while (remainingLetters > 0 && attempts > 0) {

    // Показываем состояние игры
    alert(answerArray.join(" "));

    // Запрашиваем вариант ответа
    let value = prompt("Угадайте букву или нажмите Отмена для выхода из игры.").toLowerCase();
    if (value === null) {
        // Выходим из игрового цикла
        break;
    } else if (value.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
        attempts--;
    } else {
        // Обновляем состояние игры
        for (let j = 0; j < word.length; j++) {
            if (word[j] === value && answerArray[j] !== word[j]) {
                answerArray[j] = value;
                remainingLetters--;
            };
        };
        attempts--;
    };
    // Конец игрового цикла
};
};

game();
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
