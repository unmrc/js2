let count = 0;
let numberPositive = 0;
let numberNegative = 0;
let numberZero = 0;
let numberEven = 0;
let numberOdd = 0;

do {
  let number = +prompt("Введите числа:");
    
  count++;

  number > 0 ? numberPositive++ : numberNegative++;

  number == 0 ? numberZero++ : ``;

  number % 2 == 0 ? numberEven++ : numberOdd++;
} while (count <= 10);

alert(`позитивных: ${numberPositive} негативных: ${numberNegative} нулей: ${numberZero} четных: ${numberEven} нечетных: ${numberOdd}`);

