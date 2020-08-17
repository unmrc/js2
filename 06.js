do {
    var num1 = +prompt('введите число 1');
    var num2 = +prompt('введите число 2');
    var sign = prompt('введите символ');
    var result = 0;
    switch (sign) {
        case '+':
            result = num1 + num2;
            alert(result);
            break;
        case '-':
            result = num1 - num2;
            alert(result);
            break;
        case '*':
            result = num1 * num2;
            alert(result);
            break;
        case '/':
            result = num1 / num2;
            alert(result);
            break;
        default:
            alert('Нет такого символа.');
            break;
    }
} while (confirm('Хотите еще раз решить ?'));
