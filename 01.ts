let num1 = +prompt('число 1');
let num2 = +prompt('число 2');

let sum = 0;

while (num1 < num2) {
    num1++
    sum += num1
}

alert(sum);