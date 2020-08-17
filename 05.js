var count = 0;
var numberPositive = 0;
var numberNegative = 0;
var numberZero = 0;
var numberEven = 0;
var numberOdd = 0;
do {
    var number = +prompt("Введите числа:");
    count++;
    number > 0 ? numberPositive++ : numberNegative++;
    number == 0 ? numberZero++ : "";
    number % 2 == 0 ? numberEven++ : numberOdd++;
} while (count <= 10);
alert("\u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u044B\u0445: " + numberPositive + " \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u044B\u0445: " + numberNegative + " \u043D\u0443\u043B\u0435\u0439: " + numberZero + " \u0447\u0435\u0442\u043D\u044B\u0445: " + numberEven + " \u043D\u0435\u0447\u0435\u0442\u043D\u044B\u0445: " + numberOdd);
