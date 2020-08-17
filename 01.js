var num1 = +prompt('число 1');
var num2 = +prompt('число 2');
var sum = 0;
while (num1 < num2) {
    num1++;
    sum += num1;
}
alert(sum);
